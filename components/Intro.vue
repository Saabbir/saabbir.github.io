<template>
  <div>
    <div class="c-intro c-intro--v1 u-d-grid">
      <!-- <div class="c-intro__img-container">
        <img src="~/assets/images/profile-pic.jpeg" alt="Saabbir Hossain's Profile Picture">
      </div> -->
      <div class="c-intro__content">
        <h1 class="t-display-1 u-mb-24">Hi, I'm Saabbir.</h1>
        <p>
          A front-end developer and
          <strong>A/B testing expert</strong> based in Bangladesh, currently
          working as a <strong>Sr. Software Engineer</strong> at EchoLogyx Ltd.
        </p>
        <!-- <p>I build static sites and apps using <strong>Vuejs</strong> and <strong>Nuxtjs</strong>.</p> -->
        <p>
          Digital marketing and development are my interests, but I often find
          myself doing design work as well!
        </p>
        <!-- <p>I'm <strong>open to work</strong> for a <strong>full-time position</strong> where I can work as a creative front-end developer.</p> -->
        <div class="c-buttons u-mt-32 u-mt-sm-48">
          <!-- <a href="mailto:thesaabbir@gmail.com" class="c-button">Get in touch</a> -->
          <nuxt-link to="/work" class="c-button c-button--lg"
            >View my work</nuxt-link
          >
          <!-- <a 
          href="https://www.upwork.com/o/profiles/users/~0125f9d541d9412fba/" 
          class="c-button c-button--lg" 
          target="_blank">Checkout my Upwork profile</a> -->
        </div>
      </div>
      <div class="c-intro__img-container">
        <picture>
          <source
            :srcset="require('~/assets/images/profile-pic.jpeg?webp')"
            type="image/webp"
          />
          <img
            :src="require('~/assets/images/profile-pic.jpeg')"
            width="300"
            height="300"
            alt="Saabbir Hossain's Portrait"
          />
        </picture>
      </div>
    </div>
    <div class="c-intro c-intro--v2 u-d-none">
      <div class="c-intro__content u-text-center u-mx-auto">
        <h1 class="t-display-1 u-mb-24">Hi, I'm Saabbir.</h1>
        <p>
          A front-end developer and
          <strong>A/B testing expert</strong> based in Bangladesh, currently
          working as a <strong>Sr. Software Engineer</strong> at EchoLogyx Ltd.
        </p>
        <!-- <p>I build static sites and apps using <strong>Vuejs</strong> and <strong>Nuxtjs</strong>.</p> -->
        <p>
          Digital marketing and development are my interests, but I often find
          myself doing design work as well!
        </p>
        <!-- <p>I'm <strong>open to work</strong> for a <strong>full-time position</strong> where I can work as a creative front-end developer.</p> -->
        <div class="c-buttons u-mt-32 u-mt-sm-48">
          <!-- <a href="mailto:thesaabbir@gmail.com" class="c-button">Get in touch</a> -->
          <nuxt-link to="/work" class="c-button c-button--lg"
            >View my work</nuxt-link
          >
          <!-- <a 
          href="https://www.upwork.com/o/profiles/users/~0125f9d541d9412fba/" 
          class="c-button c-button--lg" 
          target="_blank">Checkout my Upwork profile</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
};
</script>

<style></style>
