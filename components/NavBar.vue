<template>
  <div class="c-navbar">
    <div class="l-wrap">
      <div class="c-navbar__content">
        <nuxt-link to="/" class="c-navbar__brand">
          <div class="c-navbar__brand-img-container">
            <picture>
              <source srcset="~/assets/images/saabbir.png?webp" type="image/webp">
              <img 
                src="~/assets/images/saabbir.png" 
                alt="Saabbir's Profile Picture"
                class="c-navbar__brand-img" width="60" height="69">              
            </picture>
          </div>
          <div class="c-navbar__brand-text">
            <span class="c-navbar__brand-text-name">Saabbir Hossain</span>
            <span class="c-navbar__brand-text-role">Front-End Developer</span>
          </div>
        </nuxt-link>
        <div class="c-navbar__trigger" @click="toggleNav">
          <font-awesome-icon icon="bars"/>
        </div>
        <nav class="c-navbar__nav" ref="navbarNav" @click="hideNav">
          <ul class="c-navbar__menu c-navbar__menu--without-number">
            <li class="c-navbar__menu-item">
              <nuxt-link to="/" exact class="c-navbar__menu-link">
                <strong>01</strong>
                <span>home</span>
              </nuxt-link>
            </li>
            <!-- <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/work" 
                exact
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('/work') }"
              >
                <strong>02</strong>
                <span>work</span>
              </nuxt-link>
            </li> -->
            <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/about"
                exact 
                class="c-navbar__menu-link"
              >
                <strong>03</strong>
                <span>about</span>
              </nuxt-link>
            </li>
            <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/contact"
                exact 
                class="c-navbar__menu-link"
              >
                <strong>04</strong>
                <span>contact</span>
              </nuxt-link>
            </li>
            <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/snippets"
                exact 
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('/snippets') }"
              >
                <strong>05</strong>
                <span>snippets</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    methods: {
      toggleNav() {
        this.$refs.navbarNav.classList.toggle('is-open');
      },
      hideNav() {
        this.$refs.navbarNav.classList.remove('is-open');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>