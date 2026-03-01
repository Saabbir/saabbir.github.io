<template>
  <div>
    <section class="section section--about">
      <div class="l-wrap l-wrap--600">
        <div class="c-copy">
          <h1 class="t-display-1">Hi, I'm Saabbir.</h1>
          <p>
            A front-end developer and
            <strong>A/B testing expert</strong> based in Bangladesh, currently
            working as a <strong>Sr. Software Engineer</strong> at EchoLogyx
            Ltd.
          </p>
          <p>
            Digital marketing and development are my interests, but I often find
            myself doing design work as well!
          </p>
          <div class="u-mt-48">
            <NuxtLink to="/contact" class="c-button c-button--lg">Get in touch</NuxtLink>
          </div>
        </div>
      </div>
      <div class="l-wrap l-wrap--1200">
        <figure class="u-mt-64">
          <picture>
            <img
              src="/images/remarki-fall.jpg"
              alt="Saabbir on Remarki Fall, Thanchi, Bandarban."
              class="u-mx-auto"
              width="1200"
              height="901"
            />
          </picture>
          <figcaption class="u-text-caption u-mt-16 u-text-center">
            At Remarki Fall, Thanchi, Bandarban.
          </figcaption>
        </figure>
      </div>
    </section>
    <section class="section section--contact-copy">
      <div class="l-wrap l-wrap--700">
        <header class="section__header u-text-center">
          <h2 class="t-display-2 u-text-center">Get in touch</h2>
        </header>
        <ContactCopy />
      </div>
    </section>
    <section class="section section--contact-form">
      <div class="l-wrap l-wrap--700">
        <header class="section__header u-text-center">
          <h2 class="t-display-2">Send a message</h2>
        </header>
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";

useHead({ title: "About - Saabbir Hossain" });

onMounted(() => {
  window.onload = driftBot;
  vhHack();
});
</script>
