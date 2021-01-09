<template>
  <div class="page-content">
    <div class="u-py-40">
      <div class="l-container">
        <div class="u-mb-20">
          <h2>Portfolio</h2>
        </div>
        <div class="l-works">
          <div 
            v-for="work of works" 
            :key="work.slug"
            class="c-work">
            <nuxt-link
              :to="{ name: 'work-slug', params: { slug: work.slug } }"
              class="c-work__link"
            ></nuxt-link>
            <figure class="c-work__figure">
              <img 
                :src="require(`~/assets/images/work/${work.coverImg}`)" 
                :alt="`${work.title}-cover`">
              <figcaption class="c-work__figcaption">
                <h3 class="c-work__title">{{ work.title }}</h3>
                <p>{{ work.category.join(', ') }}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $content }) {
      const works = await $content('work').fetch()
      
      return { works }
    },
  }
</script>

<style lang="scss" scoped>
.l-works {
  display: grid;
  grid-gap: rem(20px);
  grid-template-columns: repeat(auto-fit, minmax(rem(250px), 1fr));
}

.c-work {
  background-color: #fff;
  position: relative;
  border: 1px solid #ddd;

  &__link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__figcaption {
    padding: rem(20px);
    color: #999;
  }

  &__title {
    color: #333;
  }
}
</style>