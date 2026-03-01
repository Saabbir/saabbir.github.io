/**
 * Generates sitemap.xml from the static output after `nuxt generate`.
 * Run: node scripts/generate-sitemap.js (from project root).
 * Reads all .html files under .output/public and writes sitemap.xml there.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_BASE = "https://saabbir.github.io";
const OUT_DIR = path.join(__dirname, "..", ".output", "public");

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) walkDir(full, fileList);
    else if (f.name.endsWith(".html")) fileList.push(full);
  }
  return fileList;
}

function pathToUrl(filePath) {
  const relative = path.relative(OUT_DIR, filePath).replace(/\\/g, "/");
  let segment = relative.replace(/\/index\.html$/, "").replace(/\.html$/, "");
  if (segment === "index" || segment === "") segment = "";
  const pathPart = segment ? `/${segment}` : "";
  return `${SITE_BASE}${pathPart}`;
}

if (!fs.existsSync(OUT_DIR)) {
  console.warn("scripts/generate-sitemap.js: .output/public not found. Run nuxt generate first.");
  process.exit(0);
}

const htmlFiles = walkDir(OUT_DIR);
const exclude = new Set(["200.html", "404.html"]);
const filtered = htmlFiles.filter((f) => !exclude.has(path.basename(f)));
const urls = [...new Set(filtered.map(pathToUrl))].sort();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join("\n")}
</urlset>
`;

const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
fs.writeFileSync(sitemapPath, xml, "utf8");
console.log("Wrote sitemap.xml with", urls.length, "URLs");
