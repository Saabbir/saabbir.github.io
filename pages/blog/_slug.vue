<template>
  <div class="page-content">
    <div class="c-breadcrumb">
      <div class="container">
        <nuxt-link to="/blog" class="back-to-blog-list">&laquo; back to blog list</nuxt-link>
      </div>      
    </div>     
    <div class="c-blog-post-banner" 
      :style="{
        backgroundImage: `url(${articleImg})`
      }">     
      <div class="container">
        <p class="c-blog-post-banner__date">{{ formatDate(article.createdAt) }}</p>
        <h1 class="c-page-title mt-20 mb-40">{{ article.title }}</h1>
        <div v-if="article.tags" class="c-tags">
          <nuxt-link 
            v-for="(tag, index) in article.tags" 
            :key="index"
            class="c-tag"
            :to="`/tag/${tag}`">
            {{ tag }}
          </nuxt-link>
        </div>
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
            <Pagination :prev="prev" :next="next" />
          </div>
        </article>
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
        if (this.article.featuredImg) {
          return require(`~/assets/images/article-featured-images/${this.article.featuredImg}`)
        }
        return require(`~/assets/images/article-featured-images/default.png`)
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

  .c-breadcrumb {
    padding: 10px 0;
    line-height: 1;
    background: #108775;
  }

  .back-to-blog-list {
    color: rgba(#fff, .75);
    display: inline-block;

    &:hover {
      color: #fff;
    }
  }

  .c-article {
    width: 100%;
    overflow: hidden;
    
    @media (min-width: 768px) {
      padding-left: 1.5rem;
    }

    &__footer {
      margin-top: 60px;
    }

    &__pagination {
      margin-top: 30px;
    }
  }
</style>