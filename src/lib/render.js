import { formatReset } from './github.js';

const GH_MARK =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';

const LIVE_MARK =
  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>';

export function escapeHtml(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, (c) => {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

export function formatDate(iso) {
  if (!iso) return 'unknown date';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return 'unknown date';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function formatJoin(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return 'Joined ' + d.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
}

export function stateCard(title, body) {
  return (
    '<div class="state-card"><span class="glyph">' +
    escapeHtml(title) +
    '</span><p>' +
    escapeHtml(body) +
    '</p></div>'
  );
}

export function quotaCard(err) {
  const when = formatReset(err && err.reset);
  const body = when
    ? 'GitHub API limit reached. Resets at ' + when + '.'
    : 'GitHub API limit reached. Cached data is shown when we have it.';
  return stateCard('Limit reached', body);
}

export function projectCardHTML(p, instant) {
  const liveUrl = p.url;
  const repoUrl = p.githubUrl;
  const meta = [];
  if (p.language) meta.push(p.language);
  if (p.stars) meta.push(p.stars + '★');
  const created = p.createdAt ? 'Created ' + formatDate(p.createdAt) : '';
  const extra = meta.length ? meta.join(' · ') : created;
  return (
    '<article class="project' + (instant ? ' instant' : '') + '">' +
    '<a class="project-main" href="' + escapeHtml(liveUrl) + '" target="_blank" rel="noopener noreferrer">' +
    '<div class="thumb"><span class="placeholder">' + escapeHtml(p.name) + '</span></div>' +
    '<div class="body">' +
    '<span class="name">' + escapeHtml(p.name) + '</span>' +
    '<span class="url">' + escapeHtml(p.path || '') + '</span>' +
    '<span class="created">' + escapeHtml(extra) + '</span>' +
    '</div></a>' +
    '<div class="actions">' +
    '<a class="cta cta-live" href="' + escapeHtml(liveUrl) + '" target="_blank" rel="noopener noreferrer">View live ' + LIVE_MARK + '</a>' +
    '<a class="cta cta-github" href="' + escapeHtml(repoUrl) + '" target="_blank" rel="noopener noreferrer">' + GH_MARK + ' GitHub</a>' +
    '</div></article>'
  );
}

export function renderProjectGrid(el, projects, instant) {
  if (!projects.length) {
    el.innerHTML = stateCard(
      'Nothing here yet',
      'No projects matched. Enable GitHub Pages on a public repo and it will show up here.'
    );
    return;
  }
  el.innerHTML = projects.map((p) => projectCardHTML(p, instant)).join('');
}

const SUN =
  '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const MOON = '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>';

export function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  if (!toggle || !icon) return;

  function apply(mode) {
    root.classList.toggle('dark', mode === 'dark');
    icon.innerHTML = mode === 'dark' ? SUN : MOON;
    toggle.setAttribute('aria-label', mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    toggle.setAttribute('title', mode === 'dark' ? 'Light theme' : 'Dark theme');
  }

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(stored || (prefersDark ? 'dark' : 'light'));

  toggle.addEventListener('click', () => {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('theme', next);
  });
}

export function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}
