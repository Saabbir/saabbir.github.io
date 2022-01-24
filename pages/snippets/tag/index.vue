<template>
  <div class="l-main">
    <div class="l-wrap">
      <h1 class="c-page-title">Browse snippets by tags:</h1>
    </div>
  </div>
</template>

<script>
  import driftBot from '@/utils/driftBot';
  import vhHack from '@/utils/vhHack';
  
  export default {
    name: 'TagIndex',
    head() {
      return {
        title: 'Snippet Tags - Saabbir Hossain',
      }
    },
    middleware({ redirect }) {
      return redirect('/')
    },
    mounted() {
      // Load drift widget after window finished loading
      window.onload = driftBot;

      // Set --vh CSS custom property
      vhHack();
    },
  }
</script>

<style lang="scss" scoped>

</style>