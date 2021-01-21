<template>
  <div class="c-feature-figure">
    <div class="c-feature-figure__img-container">
      <img :src="require(`~/assets/images/${src}`)" :alt="alt">
      <!-- <div class="c-feature-figure__svg-container" v-html="require(`~/assets/images/${src}?include`)"></div> -->
    </div>
    <div class="c-feature-figure__caption">
      <slot></slot>
    </div>  
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String
      },
      alt: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>