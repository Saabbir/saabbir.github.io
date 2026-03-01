<template>
  <div>
    <section
      class="section c-blog-post-banner"
      :style="{ backgroundImage: `url(${articleImg})` }"
    >
      <div class="l-wrap">
        <p class="c-blog-post-banner__date">{{ formatDate(article.createdAt) }}</p>
        <h1 class="c-page-title u-text-center u-text-uppercase u-mt-20 u-mb-40">
          {{ article.title }}
        </h1>
        <div v-if="article.tags" class="c-tags">
          <NuxtLink
            v-for="(tag, index) in article.tags"
            :key="index"
            class="c-tag"
            :to="`/blog/tag/${tag}`"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="section section--breadcrumb c-breadcrumb">
      <div class="l-wrap">
        <nav class="c-breadcrumb__nav">
          <NuxtLink to="/" class="c-breadcrumb__link">&#127968; home</NuxtLink>
          <NuxtLink to="/blog" class="c-breadcrumb__link">blog</NuxtLink>
          <NuxtLink
            :to="`/blog/${article.slug}`"
            class="c-breadcrumb__link c-breadcrumb__link--disabled u-text-capitalize"
          >
            {{ article.slug.replace(/-/gi, " ") }}
          </NuxtLink>
        </nav>
      </div>
    </section>
    <section class="section c-article-container">
      <div class="l-article">
        <article class="c-article">
          <div class="c-article__body">
            <ContentRenderer v-if="article" :value="article" />
          </div>
        </article>
      </div>
      <div class="u-my-48">
        <hr />
      </div>
      <div class="l-wrap l-wrap--700">
        <div class="u-my-48">
          <Pagination base-path="/blog" type="Post" :prev="prev" :next="next" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";

const route = useRoute();
const slug = route.params.slug as string;

const { data: articleData } = await useAsyncData(`blog-${slug}`, () =>
  queryContent("articles", slug).findOne()
);
const article = articleData;
if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: "Article not found" });
}

const { data: surroundData } = await useAsyncData(`blog-surround-${slug}`, () =>
  queryContent("articles")
    .only(["title", "slug"])
    .sort({ createdAt: -1 })
    .where({ publish: true })
    .findSurround(`/articles/${slug}`)
);
const [prev, next] = surroundData.value ?? [null, null];

useHead({
  title: article.value?.title,
  meta: article.value?.description
    ? [{ name: "description", content: article.value.description }]
    : [],
});

const articleImg = computed(() => {
  const f = article.value?.featuredImg;
  return `/images/article-featured-images/${f || "default.png"}`;
});

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

onMounted(() => {
  window.onload = driftBot;
  vhHack();
});
</script>
