import { githubFetch, getLimits, isRateLimited, readCache, writeCache, cacheFresh } from './github.js';

export const PEOPLE_CAP = 20;
export const REPOS_CAP = 40;
export const FEED_MIN = 10;
export const FEED_MAX = 20;
export const SHOPIFY_CACHE_KEY = 'hub-shopify-radar-v2';
export const SHOPIFY_TTL_MS = 6 * 60 * 60 * 1000;
export const EVENTS_CACHE_KEY = 'hub-shopify-events-v2';
export const EVENTS_TTL_MS = 15 * 60 * 1000;

const SEARCH_QUERIES = [
  'topic:shopify-theme',
  'topic:shopify-app',
  'topic:shopify-hydrogen',
  'topic:shopify-cli',
];

const DROP_ORGS = {
  Shopify: true,
  'Shopify-Partners': true,
  shopify: true,
};

const THEME_TOPICS = { 'shopify-theme': true, 'shopify-themes': true };
const APP_TOPICS = { 'shopify-app': true, 'shopify-apps': true, 'shopify-app-template': true };
const TOOLKIT_TOPICS = {
  'shopify-cli': true,
  'shopify-api': true,
  'shopify-hydrogen': true,
  hydrogen: true,
  polaris: true,
  'shopify-scripts': true,
  'shopify-functions': true,
  'checkout-ui-extensions': true,
  'shopify-theme-app-extension': true,
};

function topicsOf(repo) {
  return (repo.topics || []).map((t) => String(t).toLowerCase());
}

function blob(repo) {
  return ((repo.name || '') + ' ' + (repo.description || '')).toLowerCase();
}

function hasShopifySignal(repo) {
  const topics = topicsOf(repo);
  const text = blob(repo);
  const name = (repo.name || '').toLowerCase();
  if (topics.some((t) => t.startsWith('shopify-'))) return true;
  if (name.includes('shopify')) return true;
  if (text.includes('shopify') && /(theme|app|hydrogen|polaris|liquid|cli|extension|checkout)/.test(text)) {
    return true;
  }
  return false;
}

export function classifyRepo(repo) {
  if (!repo || repo.fork) return null;
  if (!hasShopifySignal(repo)) return null;

  const topics = topicsOf(repo);
  const text = blob(repo);
  const topicBlob = topics.join(' ');

  if (topics.some((t) => THEME_TOPICS[t]) || (text.includes('shopify') && /\bthemes?\b/.test(text) && !/\bapp\b/.test(text))) {
    return 'theme';
  }
  if (topics.some((t) => APP_TOPICS[t]) || (text.includes('shopify') && /\b(app|apps)\b/.test(text))) {
    return 'app';
  }
  if (text.includes('shopify') && /(ai|gpt|llm|copilot)/.test(text + ' ' + topicBlob)) {
    return 'ai';
  }
  if (topics.some((t) => TOOLKIT_TOPICS[t]) || (text.includes('shopify') && /(cli|polaris|hydrogen|liquid|toolkit|sdk|api)/.test(text))) {
    return 'toolkit';
  }
  return null;
}

const COUNTRY_ISO = {
  afghanistan: 'AF', albania: 'AL', algeria: 'DZ', argentina: 'AR', armenia: 'AM',
  australia: 'AU', austria: 'AT', azerbaijan: 'AZ', bahrain: 'BH', bangladesh: 'BD',
  belarus: 'BY', belgium: 'BE', bolivia: 'BO', bosnia: 'BA', brazil: 'BR',
  bulgaria: 'BG', cambodia: 'KH', cameroon: 'CM', canada: 'CA', chile: 'CL',
  china: 'CN', colombia: 'CO', costa: 'CR', croatia: 'HR', cuba: 'CU',
  cyprus: 'CY', czech: 'CZ', denmark: 'DK', ecuador: 'EC', egypt: 'EG',
  estonia: 'EE', ethiopia: 'ET', finland: 'FI', france: 'FR', georgia: 'GE',
  germany: 'DE', ghana: 'GH', greece: 'GR', guatemala: 'GT', honduras: 'HN',
  'hong kong': 'HK', hungary: 'HU', iceland: 'IS', india: 'IN', indonesia: 'ID',
  iran: 'IR', iraq: 'IQ', ireland: 'IE', israel: 'IL', italy: 'IT',
  jamaica: 'JM', japan: 'JP', jordan: 'JO', kazakhstan: 'KZ', kenya: 'KE',
  kuwait: 'KW', latvia: 'LV', lebanon: 'LB', lithuania: 'LT', luxembourg: 'LU',
  malaysia: 'MY', mexico: 'MX', moldova: 'MD', morocco: 'MA', myanmar: 'MM',
  nepal: 'NP', netherlands: 'NL', 'new zealand': 'NZ', nicaragua: 'NI', nigeria: 'NG',
  norway: 'NO', oman: 'OM', pakistan: 'PK', palestine: 'PS', panama: 'PA',
  paraguay: 'PY', peru: 'PE', philippines: 'PH', poland: 'PL', portugal: 'PT',
  qatar: 'QA', romania: 'RO', russia: 'RU', 'saudi arabia': 'SA', scotland: 'GB',
  senegal: 'SN', serbia: 'RS', singapore: 'SG', slovakia: 'SK', slovenia: 'SI',
  'south africa': 'ZA', 'south korea': 'KR', korea: 'KR', spain: 'ES',
  'sri lanka': 'LK', sudan: 'SD', sweden: 'SE', switzerland: 'CH', syria: 'SY',
  taiwan: 'TW', tanzania: 'TZ', thailand: 'TH', tunisia: 'TN', turkey: 'TR',
  uganda: 'UG', ukraine: 'UA', 'united arab emirates': 'AE', uae: 'AE',
  'united kingdom': 'GB', uk: 'GB', england: 'GB', britain: 'GB',
  'united states': 'US', usa: 'US', 'u.s.': 'US', 'u.s.a.': 'US', america: 'US',
  uruguay: 'UY', uzbekistan: 'UZ', venezuela: 'VE', vietnam: 'VN', wales: 'GB',
  yemen: 'YE', zambia: 'ZM', zimbabwe: 'ZW',
};

function isoToFlag(iso) {
  return [...iso.toUpperCase()].map((ch) => String.fromCodePoint(127397 + ch.charCodeAt(0))).join('');
}

export function flagFromLocation(location) {
  if (!location) return { flag: '', label: '' };
  const raw = String(location).trim();
  const lower = raw.toLowerCase();
  const last = raw.split(',').pop().trim().toLowerCase();
  let iso = COUNTRY_ISO[last];
  if (!iso) {
    const names = Object.keys(COUNTRY_ISO).sort((a, b) => b.length - a.length);
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (name.length < 4 && name !== 'usa' && name !== 'uae') continue;
      if (lower.includes(name)) {
        iso = COUNTRY_ISO[name];
        break;
      }
    }
  }
  if (!iso) return { flag: '', label: '' };
  return { flag: isoToFlag(iso), label: last || raw };
}

export function countryFromLocation(location) {
  return flagFromLocation(location).label;
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
      const rank = { theme: 0, app: 1, toolkit: 2, ai: 3 };
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
        name: '',
        country: '',
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

export function splitPeople(people) {
  const byFollowers = (a, b) => {
    const fa = a.followers == null ? -1 : a.followers;
    const fb = b.followers == null ? -1 : b.followers;
    if (fb !== fa) return fb - fa;
    if (b.stars !== a.stars) return b.stars - a.stars;
    return a.login.localeCompare(b.login);
  };
  return {
    theme: people.filter((p) => p.themes > 0).sort(byFollowers).slice(0, PEOPLE_CAP),
    app: people.filter((p) => p.apps > 0).sort(byFollowers).slice(0, PEOPLE_CAP),
  };
}

export async function attachFollowers(people) {
  const unique = [];
  const seen = {};
  people.forEach((p) => {
    if (seen[p.login]) return;
    seen[p.login] = true;
    unique.push(p);
  });
  const slice = unique.slice(0, PEOPLE_CAP * 2);
  if (isRateLimited('core')) return slice;
  const remaining = getLimits().core.remaining;
  if (remaining == null || remaining < 12) return slice;

  const budget = Math.min(slice.length, Math.max(0, remaining - 8));
  const out = [];
  for (let i = 0; i < slice.length; i++) {
    const person = slice[i];
    if (i >= budget || isRateLimited('core')) {
      out.push(person);
      continue;
    }
    try {
      const user = await githubFetch('https://api.github.com/users/' + person.login, 'core');
      out.push(Object.assign({}, person, {
        followers: user.followers || 0,
        name: user.name || '',
        country: flagFromLocation(user.location).label,
        flag: flagFromLocation(user.location).flag,
        location: user.location || '',
      }));
    } catch (e) {
      out.push(person);
    }
  }
  return out;
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
  function collect(minTime) {
    const scored = [];
    const pushes = new Map();
    (events || []).forEach((event) => {
      if (minTime && new Date(event.created_at).getTime() < minTime) return;
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
    return unique;
  }

  const day = Date.now() - 24 * 60 * 60 * 1000;
  let unique = collect(day);
  if (unique.length < FEED_MIN) unique = collect(0);
  const items = unique.slice(0, FEED_MAX);
  const highlights = items.filter((i) => i.score >= 50);
  const rest = items.filter((i) => i.score < 50);
  return { highlights, also: rest, items };
}

export async function loadShopifyRadar() {
  const cached = readCache(SHOPIFY_CACHE_KEY);
  if (cacheFresh(cached, SHOPIFY_TTL_MS)) return cached.data;

  try {
    const repos = await searchShopifyRepos();
    const all = buildPeople(repos);
    const merged = [];
    const seen = {};
    all.filter((p) => p.themes > 0).slice(0, PEOPLE_CAP).concat(all.filter((p) => p.apps > 0).slice(0, PEOPLE_CAP)).forEach((p) => {
      if (seen[p.login]) return;
      seen[p.login] = true;
      merged.push(p);
    });
    const people = await attachFollowers(merged);
    const payload = {
      repos: sortRepos(repos).slice(0, 80),
      people: splitPeople(people),
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
    const events = await githubFetch('https://api.github.com/orgs/Shopify/events?per_page=100', 'core');
    const feed = buildFeed(events);
    writeCache(EVENTS_CACHE_KEY, feed);
    return feed;
  } catch (err) {
    if (cached) return cached.data;
    throw err;
  }
}
