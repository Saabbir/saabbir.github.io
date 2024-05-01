<template>
  <div class="l-main">
    <div class="section-portfolio u-py-32">
      <div class="l-wrap">
        <div class="u-mb-32">
          <h1 class="t-display-1">Featured works</h1>
          <p class="u-mt-16 t-18">Selected projects.</p>
        </div>
        <div :class="{ 'l-works': true, 'l-works--1': works.length === 1 }">
          <div v-for="work of works" :key="work.slug" class="c-portfolio-card">
            <nuxt-link
              :to="{ name: 'work-slug', params: { slug: work.slug } }"
              class="c-portfolio-card__link"
            ></nuxt-link>
            <figure class="c-portfolio-card__figure">
              <picture>
                <source
                  :srcset="
                    require(`~/assets/images/work/${work.coverImg}-sm.jpg?webp`)
                  "
                  type="image/webp"
                />
                <img
                  :src="require(`~/assets/images/work/${work.coverImg}-sm.jpg`)"
                  :alt="`${work.title}-cover`"
                  width="414"
                  height="311"
                />
              </picture>
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
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";

export default {
  name: "WorkIndex",
  head() {
    return {
      title: "Work - Saabbir Hossain",
    };
  },
  mounted() {
    // Load drift widget after window finished loading
    window.onload = driftBot;

    // Set --vh CSS custom property
    vhHack();
  },
  async asyncData({ params, $content }) {
    const works = await $content("work")
      .where({ category: { $contains: "ab-testing" } })
      .limit(6)
      .sortBy("createdAt", "desc")
      .fetch();

    console.log("Saabbir:", "works", works);

    return { works };
  },
};
</script>

<style lang="scss" scoped>
$max-card-width: 414px;

.section-portfolio {
  background-color: $body-bg-alt;
}

.l-works {
  display: grid;
  gap: rem(32px);
  grid-template-columns: repeat(auto-fit, minmax(rem(250px), 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(100% / 3 - #{32px}), 1fr)
    );
  }

  // &--1 .c-portfolio-card {
  //   width: max-content;
  // }
}

.c-portfolio-card {
  background-color: #fff;
  position: relative;
  box-shadow: 0 0 0 rem(1px) $border-color;
  transition: 0.3s;
  max-width: $max-card-width;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 rem(32px) rem(1px) rgba(black, 0.1);
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
    font-size: rem(16px);
  }

  &__title {
    margin-bottom: rem(10px);
  }
}
</style>
