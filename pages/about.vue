<template>
  <div class="u-py-32">
    <div class="l-container">
      <div class="c-copy">
        <h1 class="t-display-1">Hi, I'm Saabbir.</h1>
        <p>
          A <strong>front-end web developer</strong> based in Barisal, Bangladesh, currently working as a Solutions Engineer (A/B Test) at EchoLogyx Ltd.
        </p>
        <p>
          I build static sites and apps using <strong>Vuejs</strong> and <strong>Nuxtjs</strong>. I'm also familiar with <strong>React</strong> ecosystem.
        </p>
        <!-- <p>
          I also work as an independent contractor at <a class="c-custom-link" href="https://www.upwork.com/o/profiles/users/~0125f9d541d9412fba/" target="_blank">Upwork</a>.
        </p> -->
        <p>
          I've passion building awesome things on the web. I love everything about design and development but my skills place me at the intersection of both.
        </p>
        <!-- <p>I'm <strong>open to work</strong> for a <strong>full-time position</strong> where I can work as a creative front-end developer.</p> -->
      </div>
    </div>
    <div class="l-container l-container--lg">
      <figure class="u-mt-40">
        <picture>
          <source srcset="~/assets/images/remarki-fall.jpg?webp">
          <img src="~/assets/images/remarki-fall.jpg" alt="Saabbir on Remarki Fall, Thanchi, Bandarban." class="u-mx-auto">
        </picture>
        <figcaption class="u-text-caption u-mt-16 u-text-center">
          At Remarki Fall, Thanchi, Bandarban.
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
  import driftBot from '@/utils/driftBot';
  import vhHack from '@/utils/vhHack';
  
  export default {
    name: 'About',
    mounted() {
      // Load drift widget after window finished loading
      window.onload = driftBot;

      // Set --vh CSS custom property
      vhHack();
    },
  }
</script>