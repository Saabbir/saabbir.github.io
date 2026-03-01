<template>
  <section class="section section--portfolio-item">
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
              <a :href="work.url" class="c-button" target="_blank">View Live</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div v-if="work.imgFolderName" class="l-wrap l-wrap--1200">
      <div class="c-portfolio__cover-image">
        <picture>
          <img
            :src="`/images/work/${work.imgFolderName}/cover.jpg`"
            :alt="`${work.title}-cover`"
            width="1600"
            height="1200"
          />
        </picture>
      </div>
    </div>
    <div class="nuxt-content-wrapper">
      <ContentRenderer v-if="work" :value="work" />
    </div>
    <div v-if="work.pagination" class="u-my-32">
      <hr />
    </div>
    <div v-if="work.pagination" class="">
      <div class="l-wrap">
        <Pagination
          base-path="/work"
          type="Work"
          :prev="prev"
          :next="next"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";

const route = useRoute();
const slug = route.params.slug as string;

const { data: workData } = await useAsyncData(`work-${slug}`, () =>
  queryContent("work", slug).findOne()
);
const work = workData;
if (!work.value) {
  throw createError({ statusCode: 404, statusMessage: "Work not found" });
}

const { data: surroundData } = await useAsyncData(`work-surround-${slug}`, () =>
  queryContent("work")
    .only(["title", "slug"])
    .sort({ createdAt: 1 })
    .findSurround(`/work/${slug}`)
);
const [prev, next] = surroundData.value ?? [null, null];

useHead({
  title: work.value ? `${work.value.title} - Case Study` : "Work",
});

onMounted(() => {
  window.onload = driftBot;
  vhHack();
});
</script>

<style lang="scss" scoped></style>
