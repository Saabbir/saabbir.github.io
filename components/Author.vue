<template>
  <div class="author">
    <div class="author__img-container">
      <img :src="require(`~/assets/images/${author.img}`)" :alt="author.imgAlt" class="author__img">
    </div>
    <div class="author__info">
      <h4 class="author__name">{{ author.name }}</h4>
      <p class="author__bio">{{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .author {
    display: flex;
    align-items: center;

    &__img-container {
      width: 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(255,255,255,.5), 0 2px 4px rgba(0,0,0,.5);
      margin-right: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__img {
      max-width: 100%;
      display: block;
    }

    &__name {
      font-size: 1.2rem;
      font-weight: bold;
    }

    &__bio {
      color: #999;
      margin-top: 3px;
    }
  }
</style>