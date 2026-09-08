export const OWNER = 'Saabbir';
export const SKIP = {
  'saabbir.github.io': true,
  'personal-website': true,
  'personal-website-v1': true,
};

export const REPOS_CACHE_KEY = 'hub-repos-v1';
export const PROFILE_CACHE_KEY = 'hub-profile-v1';
export const CORE_TTL_MS = 30 * 60 * 1000;

const ACCEPT = { Accept: 'application/vnd.github+json' };

const limits = {
  core: { remaining: null, limit: 60, reset: null },
  search: { remaining: null, limit: 10, reset: null },
};

const listeners = new Set();

export function getLimits() {
  return limits;
}

export function onLimitsChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emitLimits() {
  listeners.forEach((fn) => fn(limits));
  paintChip();
}

function resourceKey(header) {
  const value = (header || 'core').toLowerCase();
  return value.includes('search') ? 'search' : 'core';
}

function applyHeaders(res) {
  const remaining = res.headers.get('X-RateLimit-Remaining');
  const limit = res.headers.get('X-RateLimit-Limit');
  const reset = res.headers.get('X-RateLimit-Reset');
  if (remaining == null) return;
  const key = resourceKey(res.headers.get('X-RateLimit-Resource'));
  limits[key] = {
    remaining: Number(remaining),
    limit: Number(limit) || limits[key].limit,
    reset: Number(reset) || null,
  };
}

export function formatReset(ts) {
  if (!ts) return '';
  const date = new Date(ts * 1000);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
}

export function paintChip() {
  const el = document.getElementById('rateChip');
  if (!el) return;
  const core = limits.core;
  const search = limits.search;
  const coreLeft = core.remaining == null ? '—' : String(core.remaining);
  const searchLeft = search.remaining == null ? '—' : String(search.remaining);
  el.textContent = `Core ${coreLeft} / ${core.limit} · Search ${searchLeft} / ${search.limit}`;
  const tips = [];
  if (core.reset) tips.push('Core resets ' + formatReset(core.reset));
  if (search.reset) tips.push('Search resets ' + formatReset(search.reset));
  el.title = tips.join(' · ') || 'GitHub API remaining requests for this IP';
  el.classList.toggle('low', (core.remaining != null && core.remaining < 10) || (search.remaining != null && search.remaining < 3));
  el.classList.toggle('out', core.remaining === 0 || search.remaining === 0);
}

export async function refreshRateLimit() {
  try {
    const res = await fetch('https://api.github.com/rate_limit', { headers: ACCEPT });
    if (!res.ok) return;
    const data = await res.json();
    if (data.resources?.core) limits.core = data.resources.core;
    if (data.resources?.search) limits.search = data.resources.search;
    emitLimits();
  } catch (e) {
    paintChip();
  }
}

export function isRateLimited(resource = 'core') {
  return limits[resource]?.remaining === 0;
}

export async function githubFetch(url, resource = 'core') {
  if (isRateLimited(resource)) {
    const err = new Error('GitHub API limit reached.');
    err.rateLimited = true;
    err.reset = limits[resource].reset;
    throw err;
  }

  const res = await fetch(url, { headers: ACCEPT });
  applyHeaders(res);
  emitLimits();

  if (res.status === 403 || res.status === 429) {
    let message = 'GitHub API limit reached.';
    try {
      const body = await res.json();
      if (body && body.message) message = body.message;
    } catch (e) {}
    if (/rate limit/i.test(message) || res.status === 429) {
      limits[resource].remaining = 0;
      emitLimits();
      const err = new Error(message);
      err.rateLimited = true;
      err.reset = limits[resource].reset;
      throw err;
    }
    throw new Error(message);
  }

  if (!res.ok) throw new Error('GitHub API ' + res.status);
  return res.json();
}

export function readCache(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    if (!parsed || parsed.data == null) return null;
    return parsed;
  } catch (e) {
    return null;
  }
}

export function writeCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ data, cachedAt: Date.now() }));
  } catch (e) {}
}

export function cacheFresh(entry, ttl) {
  return !!(entry && typeof entry.cachedAt === 'number' && Date.now() - entry.cachedAt < ttl);
}

export function quotaMessage(err) {
  const when = formatReset(err && err.reset);
  return when
    ? 'GitHub API limit reached. Resets at ' + when + '.'
    : 'GitHub API limit reached. Try again after the reset.';
}

export function pagesUrl(name) {
  return 'https://' + OWNER.toLowerCase() + '.github.io/' + name + '/';
}

export function toProject(repo) {
  return {
    name: repo.name,
    url: pagesUrl(repo.name),
    githubUrl: repo.html_url,
    path: '/' + repo.name + '/',
    createdAt: repo.created_at,
    pushedAt: repo.pushed_at,
    description: repo.description || '',
    language: repo.language || '',
    stars: repo.stargazers_count || 0,
  };
}

export function isPagesProject(repo) {
  return !!(repo.has_pages && !repo.fork && !SKIP[repo.name]);
}

export async function fetchAllRepos() {
  const acc = [];
  let page = 1;
  while (true) {
    if (isRateLimited('core')) break;
    const url = 'https://api.github.com/users/' + OWNER + '/repos?per_page=100&page=' + page + '&sort=updated&type=public';
    const batch = await githubFetch(url, 'core');
    acc.push.apply(acc, batch);
    if (!Array.isArray(batch) || batch.length < 100) break;
    page += 1;
  }
  return acc;
}

export async function loadProfileAndRepos() {
  const profileEntry = readCache(PROFILE_CACHE_KEY);
  const reposEntry = readCache(REPOS_CACHE_KEY);
  const result = {
    profile: profileEntry ? profileEntry.data : null,
    repos: reposEntry ? reposEntry.data : [],
    fromCache: !!(profileEntry && reposEntry),
    stale: !(cacheFresh(profileEntry, CORE_TTL_MS) && cacheFresh(reposEntry, CORE_TTL_MS)),
  };

  if (!result.stale) return result;
  if (isRateLimited('core')) return result;

  try {
    const [profile, repos] = await Promise.all([
      githubFetch('https://api.github.com/users/' + OWNER, 'core'),
      fetchAllRepos(),
    ]);
    writeCache(PROFILE_CACHE_KEY, profile);
    writeCache(REPOS_CACHE_KEY, repos);
    return { profile, repos, fromCache: false, stale: false };
  } catch (err) {
    err.cached = result;
    throw err;
  }
}

export function languageCounts(repos) {
  const counts = {};
  repos.forEach((repo) => {
    if (!repo.language) return;
    counts[repo.language] = (counts[repo.language] || 0) + 1;
  });
  return Object.keys(counts)
    .map((name) => ({ name, count: counts[name] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

export function totalStars(repos) {
  return repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
}

export function starsByLanguage(repos) {
  const counts = {};
  repos.forEach((repo) => {
    if (!repo.language) return;
    counts[repo.language] = (counts[repo.language] || 0) + (repo.stargazers_count || 0);
  });
  return Object.keys(counts)
    .map((name) => ({ name, count: counts[name] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

export function topStarredRepos(repos, limit) {
  return repos
    .slice()
    .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
    .slice(0, limit || 6)
    .map((repo) => ({ name: repo.name, count: repo.stargazers_count || 0 }));
}
