<template>
  <!-- Consult https://nuxtjs.org/docs/2.x/concepts/views#error-page for this page -->
  <div class="c-error-content">
    <div class="l-container l-container--sm">
      <div class="u-text-center">
        <h1 v-if="error.statusCode === 404" class="c-page-title c-page-title--black">Page not found</h1>
        <h1 v-else class="c-page-title c-page-title--black">An error occurred</h1>
        <div class="u-mt-20">
          <NuxtLink to="/" class="c-button">Go back to home page</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    head() {
      return {
        title: 'Error',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Error Page'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .c-error-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: rem(40px) 0;
  }
</style>