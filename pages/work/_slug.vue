<template>
  <div class="page-content">
    <div class="c-breadcrumb">
      <div class="l-container l-container--fluid">
        <nuxt-link to="/work" class="c-breadcrumb__link">&laquo; back to portfolio</nuxt-link>
      </div>      
    </div>
    <div class="u-py-40">     
      <div class="l-container">
        <div class="c-portfolio">
          <div class="c-portfolio__header">
            <h2>{{ work.title }}</h2>
            <a 
              v-if="work.url"
              :href="work.url"
              class="c-button"
              target="_blank">&#128065; Live Preview</a>
          </div>
          <div class="u-mb-40">
            <img 
              :src="require(`~/assets/images/work/${work.coverImg}`)" 
              :alt="`${work.title}-cover`">
          </div>
          <div class="u-mt-20">
            <nuxt-content :document="work"></nuxt-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const work = await $content('work', params.slug).fetch()

      const [prev, next] = await $content('work')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'desc')
        .surround(params.slug)
        .fetch()

      return {
        work,
        prev,
        next
      }
    },    
  }
</script>

<style lang="scss" scoped>
  .c-portfolio__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media (max-width: 767px) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr;
    }
  }

  .c-portfolio__header h2 {
    @media (min-width: 768px) {
      margin-right: 1rem;
    }
  }
</style>