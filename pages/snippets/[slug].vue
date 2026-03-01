<template>
  <div class="sections">
    <section
      class="section c-blog-post-banner"
      :style="{ backgroundImage: `url(${articleImg})` }"
    >
      <div class="l-wrap">
        <p class="c-blog-post-banner__date">{{ formatDate(snippet.createdAt) }}</p>
        <h1 class="c-page-title u-text-center u-text-uppercase u-mt-20 u-mb-40">
          {{ snippet.title }}
        </h1>
        <div v-if="snippet.tags" class="c-tags">
          <NuxtLink
            v-for="(tag, index) in snippet.tags"
            :key="index"
            class="c-tag"
            :to="`/snippets/tag/${tag}`"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="section c-breadcrumb">
      <div class="l-wrap">
        <nav class="c-breadcrumb__nav">
          <NuxtLink to="/" class="c-breadcrumb__link">&#127968; home</NuxtLink>
          <NuxtLink to="/snippets" class="c-breadcrumb__link">snippets</NuxtLink>
          <NuxtLink
            :to="`/snippets/${snippet.slug}`"
            class="c-breadcrumb__link c-breadcrumb__link--disabled u-text-capitalize"
          >
            {{ (snippet.slug || "").replace(/-/g, " ") }}
          </NuxtLink>
        </nav>
      </div>
    </section>
    <section class="section c-article-container">
      <div class="l-wrap">
        <div class="l-snippet">
          <article class="c-article">
            <div class="c-article__body" @click="handleArticleBodyClick">
              <ContentRenderer v-if="snippet" :value="snippet" :components="contentComponents" />
            </div>
            <div class="c-article__footer u-mt-64">
              <p class="c-article__updatedat u-text-right">
                Last updated: {{ formatDate(snippet.updatedAt) }}
              </p>
            </div>
          </article>
        </div>
        <div class="u-my-48">
          <hr />
        </div>
        <div class="u-my-48">
          <Pagination
            base-path="/snippets"
            type="Snippet"
            :prev="prev"
            :next="next"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";
import copyToClipboard from "@/utils/copyToClipboard";

const route = useRoute();
const slug = route.params.slug as string;
const contentComponents = useContentComponents();

const { data: snippetData } = await useAsyncData(`snippet-${slug}`, () =>
  queryContent("snippets", slug).findOne()
);
if (!snippetData.value) {
  throw createError({ statusCode: 404, statusMessage: "Snippet not found" });
}
const snippet = computed(() => withSlugOne(snippetData.value, slug));

const { data: surroundData } = await useAsyncData(`snippets-surround-${slug}`, () =>
  queryContent("snippets")
    .only(["title", "slug", "_path"])
    .sort({ createdAt: -1 })
    .findSurround(`/snippets/${slug}`)
);
const prev = computed(() => {
  const s = surroundData.value;
  const p = s?.[0];
  return p ? withSlugOne(p, "") : null;
});
const next = computed(() => {
  const s = surroundData.value;
  const n = s?.[1];
  return n ? withSlugOne(n, "") : null;
});

useHead({
  title: snippet.value?.title,
  meta: snippet.value?.description
    ? [{ name: "description", content: snippet.value.description }]
    : [],
});

const articleImg = computed(() => {
  const sn = snippet.value;
  const f = sn?.featuredImg;
  return `/images/article-featured-images/${f || "default.png"}`;
});

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function handleArticleBodyClick(clickEvent: MouseEvent) {
  const target = clickEvent.target as HTMLElement;
  const copyEl = target.closest(".c-code-wrapper__copy");
  if (!copyEl) return;
  const codeWrapperEl = copyEl.closest(".c-code-wrapper");
  const pre = codeWrapperEl?.querySelector("pre");
  if (pre) {
    copyToClipboard(pre.textContent ?? "");
    copyEl.textContent = "Copied";
    setTimeout(() => { copyEl.textContent = "Copy"; }, 1000);
  }
}

onMounted(() => {
  window.onload = driftBot;
  vhHack();
});
</script>
