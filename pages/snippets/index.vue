<template>
  <div class="l-main">
    <div class="c-banner">
      <div class="l-wrap l-wrap--sm">
        <h1 class="c-page-title u-text-center u-text-uppercase">My snippets</h1>
        <input type="text" placeholder="Search snippets" v-model="searchQuery" class="c-search-input">
      </div>
    </div>
    <div class="l-wrap l-wrap--sm">
      <div class="u-py-32">
        <ul class="c-articles-list" v-if="snippets.length">
          <li v-for="snippet of snippets" :key="snippet.slug" class="c-blog-post">
            <div>
              <NuxtLink 
                :to="{ name: 'snippets-slug', params: { slug: snippet.slug } }" class="c-blog-post__link">
              </NuxtLink>
              <NuxtLink :to="{ name: 'snippets-slug', params: { slug: snippet.slug } }">
                <h2 class="c-blog-post__title">{{ snippet.title }}</h2>
              </NuxtLink>
              <p class="c-blog-post__text">{{ snippet.description }}</p>
            </div>
            <div class="c-blog-post__date">
              {{ formatDate(snippet.createdAt) }}
            </div>
          </li>
        </ul>
        <p v-else class="no-article-matched">No snippets matched to your search query!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import driftBot from '@/utils/driftBot';
  import vhHack from '@/utils/vhHack';
  
  export default {
    name: 'SnippetsIndex',
    head() {
      return {
        title: 'Snippets - Saabbir Hossain',
      }
    },
    async asyncData({ $content }) {
      const snippets = await $content('snippets')
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        snippets
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
    mounted() {
      // Load drift widget after window finished loading
      window.onload = driftBot;

      // Set --vh CSS custom property
      vhHack();
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.snippets = await this.$content('snippets')
            .sortBy('createdAt', 'desc')
            .fetch()
          return
        }
        this.snippets = await this.$content('snippets')
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