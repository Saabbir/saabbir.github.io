<template>
  <div class="sections">
    <section
      class="section c-blog-post-banner"
      :style="{
        backgroundImage: `url(${articleImg})`,
      }"
    >
      <div class="l-wrap">
        <p class="c-blog-post-banner__date">
          {{ formatDate(snippet.createdAt) }}
        </p>
        <h1 class="c-page-title u-text-center u-text-uppercase u-mt-20 u-mb-40">
          {{ snippet.title }}
        </h1>
        <div v-if="snippet.tags" class="c-tags">
          <nuxt-link
            v-for="(tag, index) in snippet.tags"
            :key="index"
            class="c-tag"
            :to="`/snippets/tag/${tag}`"
          >
            {{ tag }}
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section c-breadcrumb">
      <div class="l-wrap">
        <nav class="c-breadcrumb__nav">
          <nuxt-link to="/" class="c-breadcrumb__link"
            >&#127968; home</nuxt-link
          >
          <nuxt-link to="/snippets" class="c-breadcrumb__link"
            >snippets</nuxt-link
          >
          <nuxt-link
            :to="{ name: 'snippets-slug', params: { slug: snippet.slug } }"
            class="c-breadcrumb__link c-breadcrumb__link--disabled u-text-capitalize"
            >{{ snippet.slug.split("-").join(" ") }}</nuxt-link
          >
        </nav>
      </div>
    </section>
    <section class="section c-article-container">
      <div class="l-wrap">
        <div class="l-snippet">
          <article class="c-article">
            <div class="c-article__body" @click="handleArticleBodyClick">
              <nuxt-content :document="snippet"></nuxt-content>
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
            routeName="snippets-slug"
            :prev="prev"
            :next="next"
            type="Snippet"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";
import copyToClipboard from "@/utils/copyToClipboard";

export default {
  name: "SingleSnippet",
  head() {
    return {
      title: this.snippet.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.snippet.description,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const snippet = await $content("snippets", params.slug).fetch();

    const [prev, next] = await $content("snippets")
      .only(["title", "slug"])
      .sortBy("createdAt", "desc")
      .surround(params.slug)
      .fetch();

    return {
      snippet,
      prev,
      next,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    handleArticleBodyClick(clickEvent) {
      if (clickEvent.target.closest(".c-code-wrapper__copy")) {
        // console.log("Saabbir:", "copy clicked");

        const copyEl = clickEvent.target.closest(".c-code-wrapper__copy");
        const codeWrapperEl = copyEl.closest(".c-code-wrapper");
        const code = codeWrapperEl.querySelector("pre").textContent;

        copyToClipboard(code);

        copyEl.textContent = "Copied";

        setTimeout(function () {
          copyEl.textContent = "Copy";
        }, 1000);
      }
    },
  },
  computed: {
    articleImg() {
      if (this.snippet.featuredImg) {
        return require(`~/assets/images/article-featured-images/${this.snippet.featuredImg}`);
      }
      return require(`~/assets/images/article-featured-images/default.png`);
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
