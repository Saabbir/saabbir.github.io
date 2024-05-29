<template>
  <div>
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

<script>
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";
import ContactForm from "../components/ContactForm.vue";
import ContactCopy from "../components/ContactCopy.vue";

export default {
  components: { ContactForm, ContactCopy },
  name: "Contact",
  head() {
    return {
      title: "Contact - Saabbir Hossain",
    };
  },
  mounted() {
    // Load drift widget after window finished loading
    window.onload = driftBot;

    // Set --vh CSS custom property
    vhHack();
  },
};
</script>
