<template>
  <div class="page-content">
    <div class="l-container">
      <h1>Browse articles by tags:</h1>
    </div>
  </div>
</template>

<script>
  export default {
    middleware({ redirect }) {
      return redirect('/')
    }
  }
</script>

<style lang="scss" scoped>

</style>