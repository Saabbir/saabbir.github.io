import { githubFetch, getLimits, isRateLimited, readCache, writeCache, cacheFresh } from './github.js';

export const PEOPLE_CAP = 25;
export const REPOS_CAP = 40;
export const FEED_CAP = 15;
export const HIGHLIGHT_CAP = 5;
export const ALSO_CAP = 10;
export const SHOPIFY_CACHE_KEY = 'hub-shopify-radar-v1';
export const SHOPIFY_TTL_MS = 6 * 60 * 60 * 1000;
export const EVENTS_CACHE_KEY = 'hub-shopify-events-v1';
export const EVENTS_TTL_MS = 15 * 60 * 1000;

const SEARCH_QUERIES = [
  'topic:shopify-theme',
  'topic:shopify-app',
  'topic:shopify-hydrogen',
  'topic:shopify',
];

const DROP_ORGS = {
  Shopify: true,
  'Shopify-Partners': true,
  shopify: true,
};

const THEME_TOPICS = { 'shopify-theme': true, 'shopify-themes': true };
const APP_TOPICS = { 'shopify-app': true, 'shopify-apps': true };

function topicsOf(repo) {
  return (repo.topics || []).map((t) => String(t).toLowerCase());
}

function blob(repo) {
  return ((repo.name || '') + ' ' + (repo.description || '')).toLowerCase();
}

export function classifyRepo(repo) {
  if (!repo || repo.fork) return null;
  const topics = topicsOf(repo);
  const text = blob(repo);
  const hasShopify = topics.includes('shopify') || text.includes('shopify');

  if (topics.some((t) => THEME_TOPICS[t]) || (text.includes('shopify') && text.includes('theme'))) {
    return 'theme';
  }
  if (topics.some((t) => APP_TOPICS[t]) || (text.includes('shopify') && /\bapp\b/.test(text))) {
    return 'app';
  }
  if (hasShopify && /(docs?|handbook|guide)/.test(text)) return 'docs';
  if (hasShopify && /(ai|gpt|llm|copilot)/.test(text + ' ' + topics.join(' '))) return 'ai';
  if (topics.includes('shopify-hydrogen') || topics.includes('hydrogen')) return 'other';
  if ((topics.includes('polaris') || topics.includes('liquid')) && hasShopify) return 'other';
  if (topics.includes('shopify')) return 'other';
  return null;
}

function searchUrl(query) {
  return (
    'https://api.github.com/search/repositories?q=' +
    encodeURIComponent(query + ' fork:false') +
    '&sort=stars&order=desc&per_page=100'
  );
}

export async function searchShopifyRepos() {
  const byId = new Map();
  for (const query of SEARCH_QUERIES) {
    if (isRateLimited('search')) break;
    const data = await githubFetch(searchUrl(query), 'search');
    (data.items || []).forEach((repo) => {
      if (!repo || repo.fork) return;
      const kind = classifyRepo(repo);
      if (!kind) return;
      const prev = byId.get(repo.id);
      if (!prev) {
        byId.set(repo.id, Object.assign({}, repo, { kind }));
        return;
      }
      const rank = { theme: 0, app: 1, docs: 2, ai: 3, other: 4 };
      if (rank[kind] < rank[prev.kind]) prev.kind = kind;
    });
  }
  return Array.from(byId.values());
}

export function buildPeople(repos) {
  const byLogin = new Map();
  repos.forEach((repo) => {
    const owner = repo.owner;
    if (!owner || owner.type !== 'User' || DROP_ORGS[owner.login]) return;
    if (repo.kind !== 'theme' && repo.kind !== 'app') return;
    let person = byLogin.get(owner.login);
    if (!person) {
      person = {
        login: owner.login,
        avatar: owner.avatar_url,
        htmlUrl: owner.html_url,
        followers: null,
        stars: 0,
        themes: 0,
        apps: 0,
      };
      byLogin.set(owner.login, person);
    }
    person.stars += repo.stargazers_count || 0;
    if (repo.kind === 'theme') person.themes += 1;
    if (repo.kind === 'app') person.apps += 1;
  });
  return Array.from(byLogin.values()).sort((a, b) => b.stars - a.stars || a.login.localeCompare(b.login));
}

export async function attachFollowers(people) {
  const cap = PEOPLE_CAP;
  const slice = people.slice(0, cap);
  if (isRateLimited('core')) return slice;
  const remaining = getLimits().core.remaining;
  if (remaining == null || remaining < cap + 8) return slice;

  const out = [];
  for (const person of slice) {
    if (isRateLimited('core')) {
      out.push(person);
      continue;
    }
    try {
      const user = await githubFetch('https://api.github.com/users/' + person.login, 'core');
      out.push(Object.assign({}, person, { followers: user.followers || 0 }));
    } catch (e) {
      out.push(person);
    }
  }
  return out.sort((a, b) => {
    const fa = a.followers == null ? -1 : a.followers;
    const fb = b.followers == null ? -1 : b.followers;
    if (fb !== fa) return fb - fa;
    if (b.stars !== a.stars) return b.stars - a.stars;
    return a.login.localeCompare(b.login);
  });
}

export function sortRepos(repos) {
  return repos.slice().sort((a, b) => {
    const stars = (b.stargazers_count || 0) - (a.stargazers_count || 0);
    if (stars) return stars;
    return new Date(b.pushed_at || 0) - new Date(a.pushed_at || 0);
  });
}

function isBot(login) {
  return /\[bot\]$|bot$/i.test(login || '');
}

function repoName(event) {
  const full = (event.repo && event.repo.name) || '';
  const parts = full.split('/');
  return parts[1] || full;
}

function repoUrl(event) {
  const name = event.repo && event.repo.name;
  return name ? 'https://github.com/' + name : 'https://github.com/Shopify';
}

export function scoreEvent(event) {
  if (!event || isBot(event.actor && event.actor.login)) return null;
  const type = event.type;
  if (type === 'WatchEvent' || type === 'ForkEvent') return null;

  if (type === 'ReleaseEvent') {
    const tag = (event.payload && event.payload.release && event.payload.release.tag_name) || '';
    return {
      score: 100,
      at: event.created_at,
      url: (event.payload.release && event.payload.release.html_url) || repoUrl(event),
      text: 'Shopify released ' + repoName(event) + (tag ? ' ' + tag : ''),
      key: 'release:' + (event.repo && event.repo.name) + ':' + tag,
    };
  }

  if (type === 'CreateEvent' && event.payload && event.payload.ref_type === 'repository') {
    return {
      score: 90,
      at: event.created_at,
      url: repoUrl(event),
      text: 'Shopify created ' + repoName(event),
      key: 'create:' + (event.repo && event.repo.name),
    };
  }

  if (type === 'PublicEvent') {
    return {
      score: 80,
      at: event.created_at,
      url: repoUrl(event),
      text: 'Shopify made ' + repoName(event) + ' public',
      key: 'public:' + (event.repo && event.repo.name),
    };
  }

  if (type === 'PullRequestEvent') {
    const pr = event.payload && event.payload.pull_request;
    const action = event.payload && event.payload.action;
    const merged = !!(pr && pr.merged);
    if (action === 'closed' && merged) {
      return {
        score: 70,
        at: event.created_at,
        url: (pr && pr.html_url) || repoUrl(event),
        text: 'Shopify merged a PR in ' + repoName(event),
        key: 'pr-merge:' + (pr && pr.number) + ':' + (event.repo && event.repo.name),
      };
    }
    if (action === 'opened') {
      return {
        score: 50,
        at: event.created_at,
        url: (pr && pr.html_url) || repoUrl(event),
        text: 'Shopify opened a PR in ' + repoName(event),
        key: 'pr-open:' + (pr && pr.number) + ':' + (event.repo && event.repo.name),
      };
    }
    return null;
  }

  if (type === 'IssuesEvent' && event.payload && event.payload.action === 'opened') {
    const issue = event.payload.issue;
    return {
      score: 40,
      at: event.created_at,
      url: (issue && issue.html_url) || repoUrl(event),
      text: 'Shopify opened an issue in ' + repoName(event),
      key: 'issue:' + (issue && issue.number) + ':' + (event.repo && event.repo.name),
    };
  }

  if (type === 'PushEvent') {
    const size = (event.payload && event.payload.size) || 1;
    return {
      score: 10,
      at: event.created_at,
      url: repoUrl(event),
      text: 'Shopify pushed to ' + repoName(event),
      key: 'push:' + (event.repo && event.repo.name),
      pushes: size,
    };
  }

  return null;
}

export function buildFeed(events) {
  const cutoff = Date.now() - 24 * 60 * 60 * 1000;
  const scored = [];
  const pushes = new Map();

  (events || []).forEach((event) => {
    if (new Date(event.created_at).getTime() < cutoff) return;
    const item = scoreEvent(event);
    if (!item) return;
    if (item.score === 10) {
      const prev = pushes.get(item.key);
      if (prev) {
        prev.pushes += item.pushes || 1;
        if (new Date(item.at) > new Date(prev.at)) prev.at = item.at;
      } else {
        pushes.set(item.key, item);
      }
      return;
    }
    scored.push(item);
  });

  const collapsedPushes = Array.from(pushes.values()).map((item) => {
    const n = item.pushes || 1;
    return Object.assign({}, item, {
      text: n > 1 ? item.text + ' (' + n + ' times)' : item.text,
    });
  });

  const unique = [];
  const seen = {};
  scored.concat(collapsedPushes).forEach((item) => {
    if (seen[item.key]) return;
    seen[item.key] = true;
    unique.push(item);
  });

  unique.sort((a, b) => b.score - a.score || new Date(b.at) - new Date(a.at));

  const highlights = unique.filter((i) => i.score >= 50).slice(0, HIGHLIGHT_CAP);
  const highlightKeys = {};
  highlights.forEach((i) => { highlightKeys[i.key] = true; });

  const also = [];
  unique.forEach((item) => {
    if (highlightKeys[item.key]) return;
    if (item.score >= 40) also.push(item);
  });
  unique.forEach((item) => {
    if (highlightKeys[item.key]) return;
    if (item.score === 10 && also.length < ALSO_CAP) also.push(item);
  });

  return {
    highlights,
    also: also.slice(0, ALSO_CAP).slice(0, Math.max(0, FEED_CAP - highlights.length)),
  };
}

export async function loadShopifyRadar() {
  const cached = readCache(SHOPIFY_CACHE_KEY);
  if (cacheFresh(cached, SHOPIFY_TTL_MS)) return cached.data;

  try {
    const repos = await searchShopifyRepos();
    let people = buildPeople(repos);
    people = await attachFollowers(people);
    const payload = {
      repos: sortRepos(repos).slice(0, 80),
      people: people.slice(0, PEOPLE_CAP),
      followersLoaded: people.some((p) => p.followers != null),
    };
    writeCache(SHOPIFY_CACHE_KEY, payload);
    return payload;
  } catch (err) {
    if (cached) return cached.data;
    throw err;
  }
}

export async function loadShopifyFeed() {
  const cached = readCache(EVENTS_CACHE_KEY);
  if (cacheFresh(cached, EVENTS_TTL_MS)) return cached.data;
  if (isRateLimited('core')) {
    return cached ? cached.data : { highlights: [], also: [] };
  }

  try {
    const events = await githubFetch('https://api.github.com/orgs/Shopify/events?per_page=30', 'core');
    const feed = buildFeed(events);
    writeCache(EVENTS_CACHE_KEY, feed);
    return feed;
  } catch (err) {
    if (cached) return cached.data;
    throw err;
  }
}
