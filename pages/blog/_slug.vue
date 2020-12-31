<template>
  <div class="page-content">
    <div class="c-blog-post-banner" 
      :style="{
        backgroundImage: `url(${articleImg})`
      }">
      <div class="container">
        <h1 class="c-blog-post-banner__title">{{ article.title }}</h1>
        <!-- <img :src="articleImg" :alt="article.imgAlt" class="c-blog-post-banner__featured-img" /> -->
        <!-- <p class="c-blog-post-banner__description">{{ article.description }}</p> -->
      </div>      
    </div>
    <div class="container container--lg">
      <div class="blog-post-single">
        <nav class="c-article-nav">
          <ul>
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`" :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>    
        <article class="c-article">
          <div class="c-article__body">
            <nuxt-content :document="article"></nuxt-content>
          </div>

          <div class="c-article__footer">
            <p class="c-article__updatedat mb-30">Last updated: {{ formatDate(article.updatedAt) }}</p>
          </div>        

          <div class="c-article__pagination">
            <prev-next :prev="prev" :next="next" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
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
        return require(`~/assets/images/${this.article.img}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-post-single {
    display: grid;
    grid-gap: 1rem;
    margin: 40px 0;

    @media (min-width: 768px) {
      grid-template-columns: 250px 1fr;
    }

    @media (min-width: 800px) {
      grid-template-columns: $article-nav-width 1fr;
    }
  }

  .c-article {
    width: 100%;
    overflow: hidden;
    
    @media (min-width: 768px) {
      padding-left: 1rem;
    }

    &__footer {
      margin-top: 60px;
    }

    &__pagination {
      margin-top: 30px;
    }
  }
</style>