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

<style lang="scss" scoped>
.c-intro {
  display: grid;
  grid-gap: rem(16px);
  grid-template-columns: 1fr;
  margin: rem(40px) 0;
  max-width: rem(500px);

  &__img-container {
    width: rem(150px);
    height: rem(150px);
    overflow: hidden;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 rem(2px) rem(4px) rgba(0,0,0,.4);
    // order: 2;
  }

  &__img-container img {
    max-width: 100%;
  }

  &__content {
    font-size: rem(18px);
    line-height: 1.5;

    h1 {
      margin: 0 0 rem(16px);
    }

    p + p {
      margin-top: rem(16px);
    }
  }
}
</style>