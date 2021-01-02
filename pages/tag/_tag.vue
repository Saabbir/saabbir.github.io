<template>
  <div class="page-content">
    <div class="container">
      <div class="c-banner mt-40 br-4">
        <h1 class="c-page-title">
          <small class="c-page-title__small">Articles tagged</small>
          <span class="c-page-title__text">{{ tag }}</span>
        </h1>
      </div>
      <div class="my-40">
        <ul class="c-articles-list">
          <li v-for="article of articles" :key="article.slug" class="c-articles-list__item">
            <div class="c-blog-post">
              <div>
                <NuxtLink 
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="c-blog-post__link">
                </NuxtLink>
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="c-blog-post__title-link">
                  <h2 class="c-blog-post__title">{{ article.title }}</h2>
                </NuxtLink>
                <p class="c-blog-post__text">{{ article.description }}</p>
              </div>
              <div class="c-blog-post__date">
                {{ formatDate(article.createdAt) }}
              </div>
            </div> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $content }) {
      const articles = await $content('articles')
        .where({ 'tags': { $contains: params.tag } })
        .sortBy('createdAt', 'desc')
        .fetch()

      return { 
        articles, 
        tag: params.tag 
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>