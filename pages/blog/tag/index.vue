<template>
  <div class="l-main">
    <div class="l-container">
      <h1 class="c-page-title">Browse articles by tags:</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TagIndex',
    middleware({ redirect }) {
      return redirect('/')
    }
  }
</script>

<style lang="scss" scoped>

</style>