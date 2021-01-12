<template>
  <div class="c-pagination">
    <div class="c-pagination__prev">
      <div v-if="prev" class="c-pagination__link-label">Previous</div>
      <NuxtLink
        v-if="prev"
        :to="{ name: routeName, params: { slug: prev.slug } }"
        class="c-button c-button--lg"
      >
        &laquo; {{ prev.title }}
      </NuxtLink>      
    </div>
    <div class="c-pagination__next">
      <div v-if="next" class="c-pagination__link-label">Next</div>
      <NuxtLink
        v-if="next"
        :to="{ name: routeName, params: { slug: next.slug } }"
        class="c-button c-button--lg"
      >
        {{ next.title }} &raquo;
      </NuxtLink>
    </div>
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
    grid-gap: rem(32px);
    justify-content: space-between;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(rem(264px), 1fr));
    }

    &__link-label {
      font-weight: bold;
      color: $text-color-dark;
      text-transform: uppercase;
      letter-spacing: rem(1px);
      margin-bottom: rem(16px);
    }

    &__next {
      text-align: right;
    }
  }
</style>