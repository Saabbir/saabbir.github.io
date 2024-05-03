<template>
  <div class="l-main l-main--work-slug">
    <div class="u-py-64">
      <!-- Portfolio header and stats -->
      <div class="l-wrap">
        <div class="c-portfolio">
          <div class="c-portfolio__header u-text-center">
            <h1 class="t-display-1">{{ work.title }}</h1>
            <h3 v-if="work.highlight" class="u-mt-16 u-text-gray u-fw-500">
              {{ work.highlight }}
            </h3>
            <div class="c-copy u-mx-auto">
              <p v-if="work.description" class="u-mt-32 t-18">
                {{ work.description }}
              </p>
            </div>
          </div>
          <div class="c-portfolio__stats u-text-center">
            <dl v-if="work.type">
              <dt>Type</dt>
              <dd>{{ work.type }}</dd>
            </dl>
            <dl v-if="work.tools">
              <dt>Tools used:</dt>
              <dd v-for="tool in work.tools" :key="tool">{{ tool }}</dd>
            </dl>
            <dl v-if="work.url">
              <dt class="u-d-none">Live</dt>
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

      <!-- Portfolio cover image -->
      <div v-if="work.imgFolderName" class="l-wrap l-wrap--1200">
        <div class="c-portfolio__cover-image">
          <picture>
            <source
              :srcset="
                require(`~/assets/images/work/${work.imgFolderName}/cover.jpg?webp`)
              "
              type="image/webp"
            />
            <img
              :src="
                require(`~/assets/images/work/${work.imgFolderName}/cover.jpg`)
              "
              :alt="`${work.title}-cover`"
              width="1600"
              height="1200"
            />
          </picture>
        </div>
      </div>
      <!-- /.l-wrap--1600 -->

      <!-- Nuxt content -->
      <div class="nuxt-content-wrapper">
        <nuxt-content :document="work"></nuxt-content>
      </div>

      <!-- Horizontal line -->
      <div v-if="work.pagination" class="u-my-32">
        <hr />
      </div>

      <!-- Pagination -->
      <div v-if="work.pagination" class="">
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
