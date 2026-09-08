# saabbir.github.io

Static [Astro](https://astro.build) hub for [https://saabbir.github.io](https://saabbir.github.io): GitHub profile, published Pages, and small API tools.

The personal site is [saabbir.com](https://saabbir.com). Project sites stay on their own URLs (`/github-bd-toppers/`, `/shopify-app-handbook/`, …).

## Local

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

## Deploy

GitHub Actions builds `dist` and can publish to Pages. Live Pages still serve `main` from the repo root until that setting is switched after merge.

## API limits

Unauthenticated GitHub REST: **60 core / hour** and **10 search / minute** per IP. The header chip shows both. There is no token in this repo.
