<template>
  <div class="l-main">
    <div class="c-breadcrumb">
      <div class="l-container">
        <nav class="c-breadcrumb__nav">
          <nuxt-link to="/" class="c-breadcrumb__link">&#127968; home</nuxt-link>
          <nuxt-link to="/work" class="c-breadcrumb__link">work</nuxt-link>
          <nuxt-link 
            :to="{ name: 'work-slug', params: { slug: work.slug } }" class="c-breadcrumb__link c-breadcrumb__link--disabled">{{ work.slug }}</nuxt-link>
        </nav>
      </div>      
    </div>
    <div class="u-py-32">     
      <div class="l-container">
        <div class="c-portfolio">
          <div class="c-portfolio__header">
            <h2 class="c-portfolio__header-title">{{ work.title }}</h2>
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
    name: 'Work',
    head() {
      return {
        title: this.work.title + ' - Case Study',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Saabbir Hossain is a professional front-end developer based in Barisal, Bangladesh.'
          }
        ]
      }
    },
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

</style>