<template>
  <section class="section section--portfolio u-bg-gray-dark">
    <div class="l-wrap">
      <header class="section__header u-text-center">
        <h1 class="t-display-1">Featured works</h1>
        <p class="u-mt-16 t-18">Selected projects.</p>
      </header>
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
                  require(`~/assets/images/work/${work.imgFolderName}/thumbnail.jpg?webp`)
                "
                type="image/webp"
              />
              <img
                :src="
                  require(`~/assets/images/work/${work.imgFolderName}/thumbnail.jpg`)
                "
                :alt="`${work.title} Thumbnail`"
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
  </section>
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
      // .where({ category: { $contains: "ab-testing" } })
      // .limit(6)
      .where({ publish: true })
      .sortBy("createdAt", "desc")
      .fetch();

    // console.log("Saabbir:", "works", works);

    return { works };
  },
};
</script>

<style lang="scss" scoped></style>
