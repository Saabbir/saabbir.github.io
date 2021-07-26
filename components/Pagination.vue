<template>
  <div class="c-pagination">
    <div class="c-pagination__prev" v-if="prev">
      <div class="c-pagination__link-label">Previous {{type}}</div>
      <NuxtLink
        :to="{ name: routeName, params: { slug: prev.slug } }"
        class="c-button c-button--lg"
      >
        &laquo; {{ prev.title }}
      </NuxtLink>      
    </div>
    <div class="c-pagination__next" v-if="next">
      <div class="c-pagination__link-label">Next {{type}}</div>
      <NuxtLink
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
      },
      type: {
        type: String,
        default: () => 'Post'
      }
    }
  }
</script>