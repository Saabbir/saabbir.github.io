<template>
  <div class="l-main page-single-work">
    <div class="u-py-32">
      <div class="l-wrap">
        <div class="c-portfolio">
          <div class="c-portfolio__header">
            <h1 class="t-display-1">{{ work.title }}</h1>
            <h3 v-if="work.highlight" class="u-mt-16 u-text-gray">
              {{ work.highlight }}
            </h3>
            <div class="c-copy">
              <p v-if="work.description" class="u-mt-32 t-18">
                {{ work.description }}
              </p>
            </div>
          </div>
          <div class="c-portfolio__stats">
            <dl v-if="work.type">
              <dt>Type</dt>
              <dd>{{ work.type }}</dd>
            </dl>
            <dl v-if="work.tools">
              <dt>Tools used:</dt>
              <dd v-for="tool in work.tools" :key="tool">{{ tool }}</dd>
            </dl>
            <dl v-if="work.url">
              <dt>Live</dt>
              <dd>
                <a :href="work.url" class="c-button" target="_blank"
                  >View Live</a
                >
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <!-- /.l-wrap -->
      <div class="l-wrap l-wrap--1200 l-wrap--1600">
        <div class="c-portfolio__cover-image">
          <picture>
            <source
              :srcset="
                require(`~/assets/images/work/${work.coverImg}.jpg?webp`)
              "
              type="image/webp"
            />
            <img
              :src="require(`~/assets/images/work/${work.coverImg}.jpg`)"
              :alt="`${work.title}-cover`"
              width="1600"
              height="1200"
            />
          </picture>
        </div>
      </div>
      <!-- /.l-wrap--1600 -->
      <div class="nuxt-content-wrapper">
        <nuxt-content :document="work"></nuxt-content>
      </div>
      <div class="u-my-32">
        <hr />
      </div>
      <div class="">
        <div class="l-wrap">
          <Pagination
            routeName="work-slug"
            :prev="prev"
            :next="next"
            type="Work"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";

export default {
  name: "SingleWork",
  head() {
    return {
      title: this.work.title + " - Case Study",
    };
  },
  mounted() {
    // Load drift widget after window finished loading
    window.onload = driftBot;

    // Set --vh CSS custom property
    vhHack();
  },
  async asyncData({ $content, params }) {
    const work = await $content("work", params.slug).fetch();

    const [prev, next] = await $content("work")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      work,
      prev,
      next,
    };
  },
};
</script>

<style lang="scss" scoped></style>
