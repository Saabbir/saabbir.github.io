<template>
  <div class="pagination">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="c-button"
    >
      &laquo; {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="c-button"
    >
      {{ next.title }} &raquo;
    </NuxtLink>
    <span v-else>&nbsp;</span>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: grid;
    grid-gap: 1rem;
    justify-content: space-between;

    @media (min-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }
</style>