<!--
  Read more about how to create components and use in markdown file in here -> https://jamesdonnelly.dev/blog/adding-images-with-nuxt-content/
-->

<template>
  <div class="c-article-img-container">
    <img class="c-article-img" :src="require(`~/assets/images/${this.src}`)" :alt="alt">
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>