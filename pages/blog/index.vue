<template>
  <div class="sections">
    <section class="section section--banner c-banner">
      <div class="l-wrap l-wrap--700">
        <h1 class="c-page-title u-text-center u-text-uppercase">My writings</h1>
        <input
          type="text"
          placeholder="Search articles"
          v-model="searchQuery"
          class="c-search-input"
        />
        <div v-if="uniqueArticleTags.length" class="c-tags u-mt-32">
          <nuxt-link
            v-for="(tag, index) in uniqueArticleTags"
            :key="index"
            class="c-tag"
            :to="`/blog/tag/${tag}`"
          >
            {{ tag }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section section--blog u-py-0">
      <div class="l-wrap l-wrap--700">
        <div class="u-py-32">
          <ul class="c-articles-list" v-if="articles.length">
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
          <p v-else class="no-article-matched">
            No articles matched to your search query!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";

export default {
  name: "BlogIndex",
  head() {
    return {
      title: "Blog - Saabbir Hossain",
    };
  },
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .where({ publish: true })
      .fetch();

    // Get unique article tags
    const allArticleTags = [];
    articles.forEach((article) => {
      allArticleTags.push(...article.tags);
    });
    const uniqueArticleTags = [...new Set(allArticleTags)];

    return {
      articles,
      uniqueArticleTags,
    };
  },
  data() {
    return {
      searchQuery: "",
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
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = await this.$content("articles")
          .where({ publish: true })
          .sortBy("createdAt", "desc")
          .fetch();
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .where({ publish: true })
        .sortBy("createdAt", "desc")
        .fetch();
    },
  },
};
</script>

<style lang="scss" scoped>
.no-article-matched {
  margin: 0;
  text-align: center;
}
</style>
