<template>
  <div class="c-intro">
    <!-- <div class="c-intro__img-container">
      <img src="~/assets/images/saabbir.png" alt="Saabbir Hossain's Profile Picture">
    </div> -->
    <div class="c-intro__content">
      <h1 class="c-intro__title u-text-serif">Hi, I'm Saabbir.</h1>
      <p>
        A <strong>front-end web developer</strong> based in Barisal, Bangladesh, currently working as an independent contractor at <a class="c-custom-link" href="https://www.upwork.com/o/profiles/users/_~0125f9d541d9412fba/" target="_blank">Upwork</a>. I build static sites and apps using <strong>Vuejs</strong> and <strong>Nuxtjs</strong>.
      </p>
      <!-- <p>
        I've passion building awesome things on the web. I love everything about design and development but my skills place me at the intersection of both.
      </p> -->
      <p>I'm <strong>open to work</strong> for a <strong>full-time position</strong> where I can work as a creative front-end developer.</p>
      <div class="c-buttons u-mt-48">
        <!-- <a href="mailto:thesaabbir@gmail.com" class="c-button">Get in touch</a> -->
        <nuxt-link to="/work" class="c-button c-button--lg">View my work</nuxt-link>
        <!-- <a 
          href="https://www.upwork.com/o/profiles/users/~0125f9d541d9412fba/" 
          class="c-button c-button--lg" 
          target="_blank">Checkout my Upwork profile</a> -->
      </div>
    </div>
    <div class="c-intro__img-container">
      <picture>
        <source :srcset="require('~/assets/images/saabbir.png?webp')" type="image/webp">
        <img :src="require('~/assets/images/saabbir.png')" width="300" height="345" alt="Saabbir Hossain's Portrait">
      </picture>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>