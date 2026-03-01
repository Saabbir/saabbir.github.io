# Nuxt 2 → Nuxt 3 migration notes

This document summarizes the upgrade from Nuxt.js 2 (Node 14) to Nuxt 3 (Node 18+) so you can quickly check what changed and where to look.

---

## 1. Dependencies (`package.json`)

| Before (Nuxt 2) | After (Nuxt 3) |
|-----------------|----------------|
| `nuxt: ^2.14.6` | `nuxt: ^3.14.x` |
| `@nuxt/content: ^1.9.0` | `@nuxt/content: ^2.13.x` |
| `@nuxtjs/axios` | **Removed** (use `$fetch` / `useFetch` if needed) |
| `@nuxtjs/fontawesome` | **Removed** (add `@fortawesome/vue-fontawesome` + icons if needed) |
| `@nuxtjs/google-analytics` | **Removed** (GA script added in `app.html`) |
| `@nuxtjs/style-resources` | **Replaced** by Vite `preprocessorOptions.scss.additionalData` in `nuxt.config.ts` |
| `@aceforth/nuxt-optimized-images`, `responsive-loader`, `sharp`, etc. | **Removed** (images served from `public/images/`) |
| `tailwindcss`, `sass-loader`, `fibers`, etc. | **Removed** (only SCSS kept; add Tailwind again if desired) |
| `engines.node: ^14.21.1` | `engines.node: >=18.0.0` |

**New / updated:**

- `vue: ^3.5.x`
- `@nuxtjs/google-fonts: ^3.2.0` (with `download: false` in config)
- Scripts: `generate` runs `copy:assets` then `nuxt generate`; `deploy` uses `.output/public` and `push-dir`

---

## 2. Config and app entry

| File | Change |
|------|--------|
| **`nuxt.config.js`** | **Deleted.** Replaced by `nuxt.config.ts`. |
| **`nuxt.config.ts`** | New: `defineNuxtConfig`, `app.head`, `nitro.preset: "static"`, `modules`, `content`, `googleFonts`, `vite.css.preprocessorOptions` for SCSS. |
| **`app.vue`** | New root component: `<NuxtLayout>` + `<NuxtPage>`. |
| **`app.html`** | Kept; added GA script and kept Statcounter / verification meta. |

---

## 3. Layouts and error page

| File | Change |
|------|--------|
| **`layouts/default.vue`** | Replaced `<Nuxt />` with `<slot />`; removed explicit component imports (auto-import). |
| **`layouts/error.vue`** | **Deleted.** Nuxt 3 uses a root error page. |
| **`error.vue`** (root) | New: receives `error` prop; uses `useHead()` for title/meta. |

---

## 4. Routing (pages)

Nuxt 3 uses **bracket** dynamic params instead of underscore.

| Old (Nuxt 2) | New (Nuxt 3) |
|--------------|--------------|
| `pages/blog/_slug.vue` | `pages/blog/[slug].vue` |
| `pages/blog/tag/_tag.vue` | `pages/blog/tag/[tag].vue` |
| `pages/snippets/_slug.vue` | `pages/snippets/[slug].vue` |
| `pages/snippets/tag/_tag.vue` | `pages/snippets/tag/[tag].vue` |
| `pages/work/_slug.vue` | `pages/work/[slug].vue` |

- **Named routes** (`name: 'blog-slug'`) replaced by path strings, e.g. `to="/blog/{{ slug }}"`.
- **`asyncData`** replaced by **`useAsyncData`** + **`queryContent()`** (see Content section).

---

## 5. Content (@nuxt/content v1 → v2)

| v1 (Nuxt 2) | v2 (Nuxt 3) |
|-------------|-------------|
| `this.$content('articles').fetch()` | `queryContent('articles').find()` inside `useAsyncData` |
| `$content('articles', slug).fetch()` | `queryContent('articles', slug).findOne()` |
| `.surround(slug)` | `.findSurround('/articles/' + slug)` (path string) |
| `.sortBy('createdAt', 'desc')` | `.sort({ createdAt: -1 })` |
| `.where({ publish: true })` | Same |
| `.where({ tags: { $contains: tag } })` | Same |
| `.search(query)` | **Removed** in v2; search done client-side in blog/snippets index. |
| `<nuxt-content :document="article">` | `<ContentRenderer :value="article">` |

- All content pages now use **`<script setup>`** with **`useAsyncData`** and **`queryContent()`**.
- **404:** Missing article/snippet/work throws **`createError({ statusCode: 404 })`**.

---

## 6. Components

| File | Change |
|------|--------|
| **`components/global/MarkdownImage.vue`** | **Deleted.** Replaced by `components/content/MarkdownImage.vue` (used by Content in markdown). |
| **`components/content/MarkdownImage.vue`** | New: uses `/images/{{ src }}` (no `require()`). |
| **`components/Pagination.vue`** | Props: `routeName` replaced by **`basePath`** (e.g. `/blog`, `/snippets`, `/work`); `:to` is now `` `{{ basePath }}/{{ prev.slug }}` ``. |
| **Other components** | Unchanged; work with Vue 3 and auto-import. |

---

## 7. Images and assets

| Before | After |
|--------|--------|
| `require('~/assets/images/...')` | Not supported in Vite. |
| Images in `assets/images/` | Served from **`public/images/`**. |

- **`npm run copy:assets`** copies `assets/images` → `public/images` (run automatically before `npm run generate`).
- In templates/composables, use paths like **`/images/article-featured-images/default.png`**, **`/images/work/{{ imgFolderName }}/cover.jpg`**, etc.

---

## 8. Styles (SCSS)

- **Global SCSS** still loaded from **`assets/scss/index.scss`** in `nuxt.config.ts` (`css: ['~/assets/scss/index.scss']`).
- **Config (variables, functions, mixins)** is injected via **`vite.css.preprocessorOptions.scss.additionalData`** so every component SCSS has access.
- **Deprecation fix:** Sass is deprecating `@import` in favor of `@use` / `@forward`. To fix the “Sass @import rules are deprecated” error and warning:
  - **`assets/scss/01-config/config.scss`** – uses `@use './functions' as *`, `@use './variables' as *`, `@use './mixins' as *` instead of `@import`.
  - **`assets/scss/01-config/_variables.scss`** – top of file: `@use 'functions' as *` (so `rem()` is available).
  - **`assets/scss/index.scss`** – uses `@use "./01-config/config.scss" as *` then `@use` for base, components, utilities, dark-mode.
  - **`assets/scss/02-base/base.scss`**, **`03-components/components.scss`**, **`04-utilities/utilities.scss`** – each has `@use "../01-config/config" as *` at the top so partials loaded via `@import` still see variables/functions/mixins.
  - Remaining `@import` inside base/components/utilities will still trigger deprecation warnings until those are converted to `@use`; the main error from `config.scss` is resolved.

---

## 9. Scripts and deploy

| Script | What it does |
|--------|------------------|
| `npm run dev` | `nuxt dev` |
| `npm run build` | `nuxt build` |
| `npm run generate` | `npm run copy:assets` then `nuxt generate` → output in **`.output/public`** |
| `npm run preview` | `nuxt preview` (preview generated site) |
| `npm run deploy` | `nuxt generate` then **`push-dir --dir=.output/public --branch=gh-pages --cleanup`** |

- **`.gitignore`** updated to include `.output` and `.nuxtrc`.

---

## 10. Removed or renamed files (quick reference)

- `nuxt.config.js` → use `nuxt.config.ts`
- `layouts/error.vue` → use root `error.vue`
- `pages/blog/_slug.vue` → `pages/blog/[slug].vue`
- `pages/blog/tag/_tag.vue` → `pages/blog/tag/[tag].vue`
- `pages/snippets/_slug.vue` → `pages/snippets/[slug].vue`
- `pages/snippets/tag/_tag.vue` → `pages/snippets/tag/[tag].vue`
- `pages/work/_slug.vue` → `pages/work/[slug].vue`
- `components/global/MarkdownImage.vue` → `components/content/MarkdownImage.vue`
- `.nvmrc` (Node 14) removed; project targets Node 18+

---

## 11. Optional next steps

- Add **Tailwind** again via `@nuxtjs/tailwindcss` if you want it.
- Replace **Universal Analytics (UA-…)** in `app.html` with **GA4** and gtag when ready.
- Gradually replace remaining **`@import`** in SCSS with **`@use`** / **`@forward`** to clear deprecation warnings (see SCSS section above).
