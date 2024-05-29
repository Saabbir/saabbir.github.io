<template>
  <div class="c-copy u-mx-auto">
    <p>
      If you want to get in touch, send me an email at
      <a href="mailto:thesaabbir@gmail.com" class="c-custom-link"
        >thesaabbir@gmail.com</a
      >
      or call me at
      <a href="tel:+8801789243439" class="c-custom-link">+8801789243439</a>.
    </p>
    <p>
      I'm also available on social media. Feel free to connect with me there.
    </p>
    <div class="c-social-media-grid u-mt-32">
      <a
        href="https://www.facebook.com/thesaabbir"
        class="c-social-media"
        target="_blank"
      >
        <div class="c-social-media__icon">
          <div
            class="c-social-media__icon-facebook"
            v-html="require('~/assets/images/svg/facebook.svg?include')"
          ></div>
        </div>
        <div class="c-social-media__info">
          <div class="c-social-media__name">Facebook</div>
          <div class="c-social-media__handle">@thesaabbir</div>
        </div>
      </a>
      <a
        href="https://twitter.com/thesaabbir"
        class="c-social-media"
        target="_blank"
      >
        <div class="c-social-media__icon">
          <div
            class="c-social-media__icon-twitter"
            v-html="require('~/assets/images/svg/twitter.svg?include')"
          ></div>
        </div>
        <div class="c-social-media__info">
          <div class="c-social-media__name">Twitter</div>
          <div class="c-social-media__handle">@thesaabbir</div>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/thesaabbir"
        class="c-social-media"
        target="_blank"
      >
        <div class="c-social-media__icon">
          <div
            class="c-social-media__icon-linkedin"
            v-html="require('~/assets/images/svg/linkedin.svg?include')"
          ></div>
        </div>
        <div class="c-social-media__info">
          <div class="c-social-media__name">Linkedin</div>
          <div class="c-social-media__handle">@thesaabbir</div>
        </div>
      </a>
      <a
        href="https://github.com/Saabbir"
        class="c-social-media"
        target="_blank"
      >
        <div class="c-social-media__icon">
          <div
            class="c-social-media__icon-github"
            v-html="require('~/assets/images/svg/github.svg?include')"
          ></div>
        </div>
        <div class="c-social-media__info">
          <div class="c-social-media__name">Github</div>
          <div class="c-social-media__handle">@saabbir</div>
        </div>
      </a>
      <a
        href="https://codepen.io/Saabbir"
        class="c-social-media"
        target="_blank"
      >
        <div class="c-social-media__icon">
          <div
            class="c-social-media__icon-codepen"
            v-html="require('~/assets/images/svg/codepen.svg?include')"
          ></div>
        </div>
        <div class="c-social-media__info">
          <div class="c-social-media__name">Codepen</div>
          <div class="c-social-media__handle">@saabbir</div>
        </div>
      </a>
      <a
        href="https://stackoverflow.com/users/5527156/saabbir"
        class="c-social-media"
        target="_blank"
      >
        <div class="c-social-media__icon">
          <div
            class="c-social-media__icon-stackoverflow"
            v-html="require('~/assets/images/svg/stackoverflow.svg?include')"
          ></div>
        </div>
        <div class="c-social-media__info">
          <div class="c-social-media__name">Stackoverflow</div>
          <div class="c-social-media__handle">@saabbir</div>
        </div>
      </a>
      <!-- <a href="https://www.upwork.com/o/profiles/users/~0125f9d541d9412fba/" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-upwork" v-html="require('~/assets/images/svg/upwork.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Upwork</div>
              <div class="c-social-media__handle">I'm available here for freelance work</div>
            </div>
          </a> -->
    </div>
    <!-- /.c-social-media-grid -->
  </div>
</template>

<script>
export default {
  name: "contact-copy",
};
</script>

<style></style>
