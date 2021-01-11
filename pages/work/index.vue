<template>
  <div class="l-main">
    <div class="section-portfolio u-py-40">
      <div class="l-container">
        <div class="u-mb-32">
          <h2 class="c-page-title c-page-title--black u-text-serif">Recent work</h2>
          <p class="u-mt-16">Selected projects.</p>
        </div>
        <div class="l-works">
          <div 
            v-for="work of works" 
            :key="work.slug"
            class="c-portfolio-card">
            <nuxt-link
              :to="{ name: 'work-slug', params: { slug: work.slug } }"
              class="c-portfolio-card__link"
            ></nuxt-link>
            <figure class="c-portfolio-card__figure">
              <img 
                :src="require(`~/assets/images/work/${work.coverImg}`)" 
                :alt="`${work.title}-cover`">
              <figcaption class="c-portfolio-card__figcaption">
                <h5 class="c-portfolio-card__title">{{ work.title }}</h5>
                <p>{{ work.highlight }}</p>
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
      grid-template-columns: repeat(auto-fit, minmax(calc(100% / 3 - #{32px}), 1fr));
    }
  }

  .c-portfolio-card {
    background-color: #fff;
    position: relative;
    box-shadow: 0 0 0 rem(1px) $border-color;
    transition: .3s;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 rem(32px) rem(1px) rgba(black, .1);
    }

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