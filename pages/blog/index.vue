<template>
  <div class="page-content">
    <div class="c-banner">
      <div class="container">
        <h1 class="c-banner__title">My writings</h1>
      </div>
    </div>
    <div class="container">
      <div class="my-40">
        <ul class="c-articles-list">
          <li v-for="article of articles" :key="article.slug" class="c-articles-list__item">
            <div class="c-blog-post">
              <NuxtLink 
                :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="c-blog-post__link">
              </NuxtLink>
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="c-blog-post__title-link">
                <h2 class="c-blog-post__title">{{ article.title }}</h2>
              </NuxtLink>
              <p class="c-blog-post__text">{{ article.description }}</p>
            </div> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Blog',
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-articles-list {
    margin: 0;
    padding: 0;
    list-style: none;

    &__item {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
</style>