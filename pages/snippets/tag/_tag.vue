<template>
  <div class="l-main">
    <div class="l-wrap l-wrap--sm">
      <div class="c-banner u-mt-32 u-br-4">
        <h1 class="c-page-title u-text-uppercase u-text-center">
          <small class="c-page-title__small">Snippets tagged</small>
          <span class="c-page-title__text">{{ tag }}</span>
        </h1>
      </div>
      <div class="u-my-32">
        <ul class="c-articles-list">
          <li v-for="snippet of snippets" :key="snippet.slug" class="c-blog-post">
            <div>
              <NuxtLink 
                :to="{ name: 'snippets-slug', params: { slug: snippet.slug } }" class="c-blog-post__link">
              </NuxtLink>
              <NuxtLink :to="{ name: 'snippets-slug', params: { slug: snippet.slug } }" class="c-blog-post__title-link">
                <h2 class="c-blog-post__title">{{ snippet.title }}</h2>
              </NuxtLink>
              <p class="c-blog-post__text">{{ snippet.description }}</p>
            </div>
            <div class="c-blog-post__date">
              {{ formatDate(snippet.createdAt) }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import driftBot from '@/utils/driftBot';
  import vhHack from '@/utils/vhHack';
  
  export default {
    name: 'SingleTag',
    head() {
      return {
        title: 'Snippets tagged: ' + this.tag,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'All snippets tagged in: ' + this.tag
          }
        ]
      }
    },        
    async asyncData({ params, $content }) {
      const snippets = await $content('snippets')
        .where({ 'tags': { $contains: params.tag } })
        .sortBy('createdAt', 'desc')
        .fetch()

      return { 
        snippets, 
        tag: params.tag 
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
  }
</script>

<style lang="scss" scoped>

</style>