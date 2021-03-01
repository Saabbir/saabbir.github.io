<template>
  <div class="l-main">
    <div class="c-breadcrumb">
      <div class="l-container">
        <nav class="c-breadcrumb__nav">
          <nuxt-link to="/" class="c-breadcrumb__link">&#127968; home</nuxt-link>
          <nuxt-link to="/blog" class="c-breadcrumb__link">blog</nuxt-link>
          <nuxt-link 
            :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="c-breadcrumb__link c-breadcrumb__link--disabled">{{ article.slug }}</nuxt-link>
        </nav>
      </div>      
    </div>
    <div class="c-blog-post-banner" 
      :style="{
        backgroundImage: `url(${articleImg})`
      }">     
      <div class="l-container">
        <p class="c-blog-post-banner__date">{{ formatDate(article.createdAt) }}</p>
        <h1 class="c-page-title u-text-center u-text-uppercase u-mt-20 u-mb-40">{{ article.title }}</h1>
        <div v-if="article.tags" class="c-tags">
          <nuxt-link 
            v-for="(tag, index) in article.tags" 
            :key="index"
            class="c-tag"
            :to="`/blog/tag/${tag}`">
            {{ tag }}
          </nuxt-link>
        </div>
      </div>      
    </div>
    <div class="l-container">
      <div class="l-article">
        <aside class="l-article__aside">
          <nav class="c-article-nav">
            <div class="c-article__toc">Table of contents</div>
            <ul>
              <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </aside>
        <article class="c-article">
          <div class="c-article__body">
            <nuxt-content :document="article"></nuxt-content>
          </div>

          <div class="c-article__footer u-mt-48">
            <p class="c-article__updatedat">Last updated: {{ formatDate(article.updatedAt) }}</p>
          </div>
        </article>
      </div>

      <div class="u-my-48">
        <Pagination :prev="prev" :next="next" />
      </div>      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Blog Post',
    head() {
      return {
        title: this.article.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          }
        ]
      }
    },        
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'desc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    },
    computed: {
      articleImg() {
        if (this.article.featuredImg) {
          return require(`~/assets/images/article-featured-images/${this.article.featuredImg}`)
        }
        return require(`~/assets/images/article-featured-images/default.png`)
      }
    }
  }
</script>

<style lang="scss">
  .l-article {
    display: grid;
    margin: rem(40px) 0;
    background-color: #fff;
    border: rem(1px) solid $border-color;
    border-radius: rem(4px);    

    // @media (min-width: 768px) {
    //   grid-template-columns: rem($article-nav-width) 1fr;
    // }
  }

  .l-article__aside {
    border-bottom: rem(1px) solid $border-color;
    background-color: #fff;
    // position: sticky;
    // top: 0;
    // z-index: 1;

    // @media (min-width: 768px) {
    //   border-bottom: 0;
    //   border-right: rem(1px) solid $border-color;
    // }

    .c-article__toc {
      border-bottom: rem(1px) solid $border-color;
      color: $text-color-dark;
      font-size: .9em;
      font-weight: bold;
      letter-spacing: rem(1px);
      padding: rem(16px);
      text-transform: uppercase;
      
      @media (min-width: 361px) {
        padding: rem(16px) rem(24px) rem(16px);
      }    
    }    
  }
</style>