<template>
  <div>
    <img :src="require(`~/assets/images/${this.src}`)" :alt="alt">
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