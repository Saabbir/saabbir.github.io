<template>
  <div class="l-main">
    <div class="c-banner">
      <div class="l-container l-container--sm">
        <h1 class="c-page-title u-text-center u-text-uppercase">My writings</h1>
        <input type="text" placeholder="Search articles" v-model="searchQuery" class="c-search-input">
      </div>
    </div>
    <div class="l-container l-container--sm">
      <div class="u-py-32">
        <ul class="c-articles-list" v-if="articles.length">
          <li v-for="article of articles" :key="article.slug" class="c-blog-post">
            <div>
              <NuxtLink 
                :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="c-blog-post__link">
              </NuxtLink>
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <h2 class="c-blog-post__title">{{ article.title }}</h2>
              </NuxtLink>
              <p class="c-blog-post__text">{{ article.description }}</p>
            </div>
            <div class="c-blog-post__date">
              {{ formatDate(article.createdAt) }}
            </div>
          </li>
        </ul>
        <p v-else class="no-article-matched">No articles matched to your search query!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogIndex',
    head() {
      return {
        title: 'Blog - Saabbir Hossain',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Saabbir Hossain is a professional front-end developer based in Barisal, Bangladesh.'
          }
        ]
      }
    },
    async asyncData({ $content }) {
      const articles = await $content('articles')
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        articles
      }
    },
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = await this.$content('articles')
            .sortBy('createdAt', 'desc')
            .fetch()
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .sortBy('createdAt', 'desc')
          .fetch()
      }
    }    
  }
</script>

<style lang="scss" scoped>
  .no-article-matched {
    margin: 0;
    text-align: center;
  }
</style>