<template>
  <section class="section u-py-32 u-bg-gray-dark">
    <div class="l-wrap l-wrap--700">
      <div class="c-banner u-br-4">
        <h1 class="c-page-title u-text-uppercase u-text-center">
          <small class="c-page-title__small">Articles tagged</small>
          <span class="c-page-title__text">{{ tag }}</span>
        </h1>
      </div>
      <div class="u-mt-32">
        <ul class="c-articles-list">
          <li
            v-for="article of articles"
            :key="article.slug"
            class="c-blog-post"
          >
            <div>
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="c-blog-post__link"
              >
              </NuxtLink>
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="c-blog-post__title-link"
              >
                <h2 class="c-blog-post__title">{{ article.title }}</h2>
              </NuxtLink>
              <p class="c-blog-post__text">{{ article.description }}</p>
            </div>
            <div class="c-blog-post__date">
              {{ formatDate(article.createdAt) }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";

export default {
  name: "SingleTag",
  head() {
    return {
      title: "Articles tagged: " + this.tag,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All blog posts tagged in: " + this.tag,
        },
      ],
    };
  },
  async asyncData({ params, $content }) {
    const articles = await $content("articles")
      .where({ tags: { $contains: params.tag } })
      .where({ publish: true })
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
      tag: params.tag,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  mounted() {
    // Load drift widget after window finished loading
    window.onload = driftBot;

    // Set --vh CSS custom property
    vhHack();
  },
};
</script>

<style lang="scss" scoped></style>
