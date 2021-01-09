<template>
  <div class="page-content">
    <div class="c-breadcrumb">
      <div class="l-container">
        <nuxt-link to="/blog" class="back-to-blog-list">&laquo; back to blog list</nuxt-link>
      </div>      
    </div>     
    <div class="c-blog-post-banner" 
      :style="{
        backgroundImage: `url(${articleImg})`
      }">     
      <div class="l-container">
        <p class="c-blog-post-banner__date">{{ formatDate(article.createdAt) }}</p>
        <h1 class="c-page-title u-mt-20 u-mb-40">{{ article.title }}</h1>
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
    <div class="l-container l-container--lg">
      <div class="blog-post-single">
        <aside>
          <nav class="c-article-nav">
            <div class="c-on-this-page">
              <strong>On this page</strong>
            </div>
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

          <div class="c-article__footer">
            <p class="c-article__updatedat u-mb-30">Last updated: {{ formatDate(article.updatedAt) }}</p>
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
  .blog-post-single {
    display: grid;
    margin: rem(40px) 0;
    background-color: #fff;
    border: rem(1px) solid #ddd;
    border-radius: rem(4px);    

    @media (min-width: 768px) {
      grid-template-columns: rem(250px) 1fr;
    }

    @media (min-width: 850px) {
      grid-template-columns: rem($article-nav-width) 1fr;
    }
  }

  aside {
    border-bottom: rem(1px) solid #ddd;

    @media (min-width: 768px) {
      border-bottom: 0;
      border-right: rem(1px) solid #ddd;
    }

    .c-on-this-page {
      padding: rem(16px);
      border-bottom: rem(1px) solid #ddd;
      color: #999;
      text-transform: uppercase;
      font-size: .9em;
      
      @media (min-width: 361px) {
        padding: rem(16px) rem(24px) rem(16px);
      }    
    }    
  }

  .c-breadcrumb {
    padding: rem(10px) 0;
    line-height: 1;
    background: $accent-color-2;
  }

  .back-to-blog-list {
    color: rgba(#fff, .75);
    display: inline-block;

    &:hover {
      color: #fff;
    }
  }

  .c-article {
    &__footer {
      margin-top: rem(60px);
    }

    &__pagination {
      margin-top: rem(30px);
    }
  }
</style>