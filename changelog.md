# Changelog

## 2025 – Nuxt 3 migration

- **Upgraded** from Nuxt 2 (Node 14) to **Nuxt 3** (Node 18+) and **@nuxt/content v2**.
- **Slug handling:** Content v2 uses `_path`; added `utils/contentSlug.ts` and `withSlug` / `withSlugOne` so blog, snippets, and work links use correct slugs.
- **Tag encoding:** Tags with `/` (e.g. "A/B Testing") use `encodeURIComponent` in links and `decodeURIComponent` on tag pages.
- **Code highlighting:** Switched to **Prism.js** via custom `ProseCode.vue`; theme: prism-material-oceanic; `content.highlight: false`.
- **Markdown components:** `useContentComponents()` maps `<MarkdownImg>` / `<MarkdownImage>` for `ContentRenderer`.
- **Content styling:** Wrapper divs around `ContentRenderer` use class `nuxt-content` so `_nuxt-content.scss` applies.
- **Docs:** README, PROJECT_GUIDE, MIGRATION, and plugin/pages READMEs updated for Nuxt 3.

---

## 02-May-24

- Added .yarn.rc file and set it's ignore-engines field true

It was necessary in order to get rid of GitHub actions error of fetching package mime.

The error:

error mime@4.0.3: The engine "node" is incompatible with this module. Expected version ">=16". Got "14.21.3"
