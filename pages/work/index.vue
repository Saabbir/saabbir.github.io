<template>
  <div class="l-main">
    <div class="section-portfolio u-py-40">
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
                <h5 class="c-work__title">{{ work.title }}</h5>
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
    name: 'Work Index',
    head() {
      return {
        title: 'Work - Saabbir Hossain',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Saabbir Hossain is a professional front-end developer based in Barisal, Bangladesh.'
          }
        ]
      }
    },    
    async asyncData({ params, $content }) {
      const works = await $content('work').fetch()
      
      return { works }
    },
  }
</script>

<style lang="scss" scoped>
  .section-portfolio {
    background-color: $body-bg-alt;
  }

  .l-works {
    display: grid;
    grid-gap: rem(32px);
    grid-template-columns: repeat(auto-fit, minmax(rem(250px), 1fr));

    @media (min-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(rem(350px), 1fr));
    }
  }

  .c-work {
    background-color: #fff;
    position: relative;
    border: 1px solid $border-color;

    &__link {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &__figcaption {
      padding: rem(32px);
      color: $text-color-gray;
    }

    &__title {
      margin-bottom: rem(10px);
    }
  }
</style>