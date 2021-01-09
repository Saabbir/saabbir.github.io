<template>
  <div class="page-content">
    <div class="c-breadcrumb">
      <div class="l-container">
        <nuxt-link to="/work" class="c-breadcrumb__link">&laquo; back to portfolio</nuxt-link>
      </div>      
    </div>
    <div class="u-py-40">     
      <div class="l-container">
        <div class="u-mb-20">
          <h2>{{ work.title }}</h2>
        </div>
        <img 
          :src="require(`~/assets/images/work/${work.coverImg}`)" 
          :alt="`${work.title}-cover`">
        <div class="u-mt-20">
          <nuxt-content :document="work"></nuxt-content>
        </div>
        <div class="u-mt-20">
          <hr>
          <Pagination routeName="work-slug" :prev="prev" :next="next" />
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

</style>