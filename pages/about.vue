<template>
  <div class="c-copy u-py-40">
    <div class="l-container l-container--sm">
      <h1 class="display-1 u-text-serif u-mb-32">Hi, I'm Saabbir.</h1>
      <p>
        A <strong>front-end web developer</strong> based in Barisal, Bangladesh, currently working as an independent contractor at <a class="c-link" href="https://www.upwork.com/o/profiles/users/_~0125f9d541d9412fba/" target="_blank">Upwork</a>. I build static sites and apps using <strong>Vuejs</strong> and <strong>Nuxtjs</strong>.
      </p>
      <p>
        I've passion building awesome things on the web. I love everything about design and development but my skills place me at the intersection of both.
      </p>
      <p>I'm <strong>open to work</strong> for a <strong>full-time position</strong> where I can work as a creative front-end developer.</p>
    </div>
    <div class="l-container l-container--lg">
      <figure class="u-my-40">
        <picture>
          <source srcset="~/assets/images/remarki-fall.jpg?webp">
          <img src="~/assets/images/remarki-fall.jpg" alt="Saabbir on Remarki Fall, Thanchi, Bandarban." class="u-mx-auto">
        </picture>
        <figcaption class="u-mt-16 u-text-center">
          At Remarki Fall, Thanchi, Bandarban.
        </figcaption>
      </figure>
    </div>
    <div class="l-container u-mt-48">
      <h2>Contact</h2>
      <p>If you want to get in touch, <a href="mailto:thesaabbir@gmail.com" class="c-link">send me an email</a> or find me elsewhere on the web:</p>
      <div class="c-social-media-grid u-mt-32">
        <a href="https://www.facebook.com/thesaabbir" class="c-social-media" target="_blank">
          <div class="c-social-media__icon">
            <div class="c-social-media__icon-facebook" v-html="require('~/assets/images/svg/facebook.svg?include')"></div>
          </div>
          <div class="c-social-media__info">
            <div class="c-social-media__name">Facebook</div>
            <div class="c-social-media__handle">@thesaabbir</div>
          </div>
        </a>
        <a href="https://twitter.com/thesaabbir" class="c-social-media" target="_blank">
          <div class="c-social-media__icon">
            <div class="c-social-media__icon-twitter" v-html="require('~/assets/images/svg/twitter.svg?include')"></div>
          </div>
          <div class="c-social-media__info">
            <div class="c-social-media__name">Twitter</div>
            <div class="c-social-media__handle">@thesaabbir</div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/thesaabbir" class="c-social-media" target="_blank">
          <div class="c-social-media__icon">
            <div class="c-social-media__icon-linkedin" v-html="require('~/assets/images/svg/linkedin.svg?include')"></div>
          </div>
          <div class="c-social-media__info">
            <div class="c-social-media__name">Linkedin</div>
            <div class="c-social-media__handle">@thesaabbir</div>
          </div>
        </a>
        <a href="https://github.com/Saabbir" class="c-social-media" target="_blank">
          <div class="c-social-media__icon">
            <div class="c-social-media__icon-github" v-html="require('~/assets/images/svg/github.svg?include')"></div>
          </div>
          <div class="c-social-media__info">
            <div class="c-social-media__name">Github</div>
            <div class="c-social-media__handle">@saabbir</div>
          </div>
        </a>
        <a href="https://codepen.io/Saabbir" class="c-social-media" target="_blank">
          <div class="c-social-media__icon">
            <div class="c-social-media__icon-codepen" v-html="require('~/assets/images/svg/codepen.svg?include')"></div>
          </div>
          <div class="c-social-media__info">
            <div class="c-social-media__name">Codepen</div>
            <div class="c-social-media__handle">@saabbir</div>
          </div>
        </a>
        <a href="https://stackoverflow.com/users/5527156/saabbir" class="c-social-media" target="_blank">
          <div class="c-social-media__icon">
            <div class="c-social-media__icon-stackoverflow" v-html="require('~/assets/images/svg/stackoverflow.svg?include')"></div>
          </div>
          <div class="c-social-media__info">
            <div class="c-social-media__name">Stackoverflow</div>
            <div class="c-social-media__handle">@saabbir</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="scss" scoped>

</style>