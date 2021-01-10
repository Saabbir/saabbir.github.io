<template>
  <div class="l-main l-main--home">
    <div class="l-container">
      <Intro />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    head() {
      return {
        title: 'Home - Saabbir Hossain',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Saabbir Hossain is a professional front-end developer based in Barisal, Bangladesh.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .l-main--home {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>