
<!-- =============================== -->
<div align="center">
	<h1>📖 Project Guide: Nuxt.js v2 Portfolio & Blog</h1>
	<p><em>Comprehensive structure & maintenance guide for your personal website</em></p>
</div>
<!-- =============================== -->

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Breakdown](#directory-breakdown)
	 - [Root Files](#root-files)
	 - [assets/](#assets)
	 - [components/](#components)
	 - [content/](#content)
	 - [layouts/](#layouts)
	 - [pages/](#pages)
	 - [plugins/](#plugins)
	 - [static/](#static)
	 - [utils/](#utils)
3. [How It Works](#how-it-works)
4. [Creating Blog Posts](#creating-blog-posts)
5. [Tips for Maintenance](#tips-for-maintenance)
6. [Incremental Development](#incremental-development)
7. [Future Migration](#future-migration)

---

## Project Overview

This project is a static portfolio/blog built with Nuxt.js 2, using file-based routing and content management. It’s designed for easy, incremental updates and content creation—especially for blog posts and portfolio entries.

---

## Directory Breakdown

### Root Files
- `nuxt.config.js`: Main configuration for Nuxt (modules, plugins, routes, etc).
- `package.json`: Project dependencies, scripts, and engine requirements.
- `README.md`: Project overview and setup instructions.
- `app.html`: Custom HTML template for Nuxt.

### assets/
- **css/**: Global CSS files (e.g., fonts.css).
- **fonts/**: Custom font files used throughout the site.
- **images/**: All images (profile, articles, clients, SVGs, etc).
- **scss/**: SCSS source files, organized by config, base, components, and utilities.
- **videos/**: Video assets for posts or pages.

### components/
- Vue components for UI (e.g., `NavBar.vue`, `Footer.vue`, `Intro.vue`).
- `global/`: Shared components (e.g., `InfoBox.vue`, `MarkdownImage.vue`).

### content/
- **articles/**: Markdown files for blog posts.
- **snippets/**: Markdown for code snippets or short tips.
- **work/**: Markdown for portfolio/case study entries.

### layouts/
- Page layout templates (e.g., `default.vue`, `error.vue`).

### pages/
- Nuxt file-based routing. Each `.vue` file or folder becomes a route.
- `blog/`, `snippets/`, `work/`: Dynamic and index pages for each content type.

### plugins/
- Custom JS plugins (e.g., analytics, chat widgets).

### static/
- Files served as-is (e.g., favicon, static JS, verification files).

### utils/
- Utility JS functions (e.g., clipboard, device detection).

---

## How It Works

- **Content-Driven:** Blog posts, snippets, and portfolio items are written in Markdown and placed in the `content/` directory. The Nuxt Content module loads and renders them automatically.
- **File-Based Routing:** Add a `.vue` file to `pages/` and it becomes a route. Dynamic routes (e.g., `[slug].vue`) display individual articles/snippets.
- **Components:** Reusable Vue components keep the UI consistent and DRY.
- **Assets:** Images, fonts, and styles are organized for easy reference in content and components.
- **Build & Deploy:** Run `npm run generate` to build a static site, or `npm run deploy` to push to GitHub Pages.

---

## Creating Blog Posts

1. Add a new Markdown file to `content/articles/` (e.g., `my-new-post.md`).
2. Use frontmatter (YAML at the top) for metadata (title, date, tags, etc).
3. Write your content in Markdown. You can embed images from `assets/images/`.
4. The post will automatically appear in the blog listing and be accessible via its slug.

---

## Tips for Maintenance

- Keep content organized by type (articles, snippets, work).
- Use components for repeated UI patterns.
- Use `nvm` to manage Node.js versions for compatibility.
- Refer to this guide and the updated README for setup and troubleshooting.

---

## Incremental Development

- Add new pages by creating `.vue` files in `pages/`.
- Add new sections/components as needed in `components/`.
- Update styles in `assets/scss/`.
- No need to update dependencies unless you want new features or security fixes.

---

## Future Migration

When ready, you can migrate to Nuxt 3 and bring your content and design with you. For now, this structure will serve you well for incremental updates and easy content management.

---

<div align="center">
	<strong>Happy tinkering &mdash; and welcome back anytime! 🚀</strong>
</div>
