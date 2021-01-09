<template>
  <div class="c-pagination">
    <NuxtLink
      v-if="prev"
      :to="{ name: routeName, params: { slug: prev.slug } }"
      class="c-button"
    >
      &laquo; {{ prev.title }}
    </NuxtLink>
    <NuxtLink
      v-if="next"
      :to="{ name: routeName, params: { slug: next.slug } }"
      class="c-button"
    >
      {{ next.title }} &raquo;
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      },
      routeName: {
        type: String,
        default: () => 'blog-slug'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .c-pagination {
    display: grid;
    grid-gap: rem(16px);
    justify-content: space-between;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(rem(264px), 1fr));
    }
  }
</style>