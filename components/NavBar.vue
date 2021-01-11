<template>
  <div class="c-navbar">
    <div class="l-container">
      <div class="c-navbar__content">
        <nuxt-link to="/" class="c-navbar__brand">
          <div class="c-navbar__brand-img-container">
            <img 
              src="~/assets/images/saabbir.png" 
              alt="Saabbir's Profile Picture"
              class="c-navbar__brand-img">
          </div>
          <div class="c-navbar__brand-text">
            <span class="c-navbar__brand-text-name">Saabbir Hossain</span>
            <span class="c-navbar__brand-text-role">Front-End Developer</span>
          </div>
        </nuxt-link>
        <nav class="c-navbar__nav">
          <ul class="c-navbar__menu">
            <li class="c-navbar__menu-item">
              <nuxt-link to="/" exact class="c-navbar__menu-link">
                <strong>01</strong>
                <span>home</span>
              </nuxt-link>
            </li>
            <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/work" 
                exact
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('/work') }"
              >
                <strong>02</strong>
                <span>work</span>
              </nuxt-link>
            </li>
            <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/blog"
                exact 
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('/blog') }"
              >
                <strong>03</strong>
                <span>blog</span>
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
  }
</script>

<style lang="scss" scoped>

</style>