<template>
  <div class="c-intro">
    <div class="c-intro__img-container">
      <img src="~/assets/images/saabbir.png" alt="Saabbir Hossain">
    </div>
    <div class="c-intro__content">
      <h1>Hi, I'm Saabbir.</h1>
      <p>
        A <strong>front-end web developer</strong> from Bangladesh, currently working as a independent contractor at <a class="link" href="https://www.upwork.com/o/profiles/users/_~0125f9d541d9412fba/" target="_blank">Upwork</a>. I build static sites and apps using <strong>Vuejs</strong> and <strong>Nuxtjs</strong>.
      </p>
      <p>
        I've passion building awesome things on the web. I love everything about design and development but my skills place me at the intersection of both.
      </p>
      <div class="c-buttons">
        <a 
          href="https://www.upwork.com/o/profiles/users/~0125f9d541d9412fba/" 
          class="c-button c-button--lg" 
          target="_blank">Checkout my Upwork profile</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.c-intro {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  margin: 40px 0;
  max-width: 500px;

  &__img-container {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.4);
    // order: 2;
  }

  &__img-container img {
    max-width: 100%;
  }

  &__content {
    font-size: 1.1rem;
    line-height: 1.5;

    h1 {
      margin: 0 0 1rem;
    }

    p + p {
      margin-top: 1rem;
    }
  }
}
</style>