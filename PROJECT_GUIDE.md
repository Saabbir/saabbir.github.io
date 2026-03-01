<!-- =============================== -->
<div align="center">
	<h1>📖 Project Guide: Nuxt 3 Portfolio & Blog</h1>
	<p><em>Structure and maintenance guide for this personal website</em></p>
</div>
<!-- =============================== -->

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Breakdown](#directory-breakdown)
3. [How It Works](#how-it-works)
4. [Creating Content](#creating-content)
5. [Code Highlighting & Custom Components](#code-highlighting--custom-components)
6. [Tips for Maintenance](#tips-for-maintenance)

---

## Project Overview

This project is a static portfolio and blog built with **Nuxt 3** and **@nuxt/content v2**. Content (articles, snippets, work) lives as Markdown in the `content/` directory. The site is generated as static files for GitHub Pages.

---

## Directory Breakdown

### Root files

- **`nuxt.config.ts`** – Nuxt config: app head, static preset, Content module, Google Fonts, SCSS, Prism theme CSS.
- **`package.json`** – Dependencies (Nuxt 3, Vue 3, @nuxt/content, prismjs, prism-themes, etc.) and scripts.
- **`app.vue`** – Root component with `<NuxtLayout>` and `<NuxtPage>`.
- **`app.html`** – Custom HTML template (meta, GA, Statcounter).
- **`error.vue`** – Root error page (Nuxt 3 convention).

### assets/

- **images/** – Source images; copied to `public/images` by `npm run copy:assets` (or during `generate`).
- **scss/** – SCSS source: `01-config` (variables, functions, mixins), `02-base`, `03-components`, `04-utilities`. Content typography lives in `_nuxt-content.scss` and targets the `.nuxt-content` class.

### components/

- **content/** – Components used inside markdown rendered by Content:
  - **MarkdownImage.vue** – Renders images with `src` under `/images/`. In content use `<MarkdownImg>` or `<MarkdownImage>` (both mapped in `useContentComponents()`).
  - **ProseCode.vue** – Custom code blocks using **Prism.js** (replaces default Shiki). Wraps in `.nuxt-content-highlight`.
- **Pagination.vue** – Prev/next links; receives `basePath`, `prev`, `next`, `type`.
- Other UI components (e.g. NavBar, Intro, ContactCopy) are auto-imported.

### content/

- **articles/** – Blog posts (Markdown + frontmatter).
- **snippets/** – Code snippets / short tips.
- **work/** – Portfolio / case studies.

Slugs are derived from the **filename** (Nuxt Content v2 uses `_path`; the app normalizes with `utils/contentSlug.ts`). Tags with special characters (e.g. `A/B Testing`) are **encoded** in URLs and **decoded** on the tag pages.

### layouts/

- **default.vue** – Main layout with `<slot />`.

### pages/

- File-based routing. Dynamic routes use **bracket** syntax: `[slug].vue`, `[tag].vue`.
- **blog/** – Index, `[slug]`, `tag/[tag]`.
- **snippets/** – Index, `[slug]`, `tag/[tag]`.
- **work/** – Index, `[slug]`.
- Other pages: index, about, contact.

### plugins/

- **drift.client.js** – Client-only (e.g. chat widget). Registered with `defineNuxtPlugin`.

### public/

- Static assets served as-is: `favicon.ico`, `js/`, **images/** (populated from `assets/images` via `copy:assets`).

### utils/

- **contentSlug.ts** – `getContentSlug()`, `withSlug()`, `withSlugOne()` to derive `slug` from Content’s `_path`.
- **composables/useContentComponents.ts** – Maps `MarkdownImg` / `MarkdownImage` for `<ContentRenderer :components="...">`.
- Other helpers (e.g. driftBot, vhHack, copyToClipboard).

---

## How It Works

- **Content:** Markdown in `content/` is queried with **`queryContent()`** inside **`useAsyncData`**. List pages use `.find()`; detail pages use `.findOne(slug)` and `.findSurround(path)` for prev/next.
- **Rendering:** **`<ContentRenderer :value="document" :components="contentComponents" />`** renders the body. The wrapper div must have class **`nuxt-content`** so `_nuxt-content.scss` applies (blog, snippets, and work pages add this class).
- **Slug:** Coming from the file path, slug is normalized via `withSlug` / `withSlugOne` so links and routes use a single slug value.
- **Tags:** Tag links use **`encodeURIComponent(tag)`**; tag pages use **`decodeURIComponent(route.params.tag)`** so tags like `A/B Testing` work.

---

## Creating Content

1. Add a Markdown file under **`content/articles/`**, **`content/snippets/`**, or **`content/work/`** (e.g. `my-post.md`).
2. Add **frontmatter** (YAML at the top): `title`, `description`, `createdAt`, `publish`, `tags`, etc. See existing files for examples.
3. Write the body in Markdown. Use **`<MarkdownImg src="path/under/images" alt="..." />`** for images (resolved as `/images/...`).
4. The **URL slug** is the filename without extension. The post appears in the listing and at `/blog/my-post` (or `/snippets/...`, `/work/...`).

---

## Code Highlighting & Custom Components

- **Prism:** Built-in Content highlighting is **disabled** (`content.highlight: false`). A custom **`ProseCode`** component in `components/content/ProseCode.vue` uses **Prism.js** and the **prism-material-oceanic** theme (in `nuxt.config.ts` `css`).
- **Custom components in markdown:** Pass **`contentComponents`** from **`useContentComponents()`** to **`ContentRenderer`** so tags like **`<MarkdownImg>`** resolve. See `composables/useContentComponents.ts`.

---

## Tips for Maintenance

- Keep content in the correct folder (articles, snippets, work) and use consistent frontmatter.
- Add new Prism languages in **`components/content/ProseCode.vue`** if you need more than the default set (js, ts, css, html, bash, json, yaml).
- After adding images under **`assets/images`**, run **`npm run copy:assets`** (or **`npm run generate`**) so they appear in **`public/images`**.
- Use **Node 18+** (see README). For migration history, see **MIGRATION.md**.

---

<div align="center">
	<strong>Happy tinkering! 🚀</strong>
</div>
