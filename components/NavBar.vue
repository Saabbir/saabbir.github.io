<template>
  <div class="c-navbar">
    <div class="l-wrap">
      <div class="c-navbar__content">
        <NuxtLink to="/" class="c-navbar__brand">
          <div class="c-navbar__brand-img-container">
            <img
              src="/images/profile-pic.jpeg"
              alt="Saabbir's Profile Picture"
              class="c-navbar__brand-img"
              width="60"
              height="60"
            />
          </div>
          <div class="c-navbar__brand-text">
            <span class="c-navbar__brand-text-name">Saabbir Hossain</span>
            <span class="c-navbar__brand-text-role">Front-End Developer</span>
          </div>
        </NuxtLink>
        <div class="c-navbar__trigger" @click="toggleNav" aria-label="Toggle menu">
          <!-- Hamburger (bars) or grid (stream) icon -->
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0-6h4V4h-4v4z"/>
          </svg>
        </div>
        <nav class="c-navbar__nav" ref="navbarNav" @click="hideNav">
          <ul class="c-navbar__menu c-navbar__menu--without-number">
            <li class="c-navbar__menu-item">
              <NuxtLink to="/" exact class="c-navbar__menu-link">
                <strong>01</strong>
                <span>home</span>
              </NuxtLink>
            </li>
            <li class="c-navbar__menu-item">
              <NuxtLink
                to="/work"
                exact
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('/work') }"
              >
                <strong>02</strong>
                <span>work</span>
              </NuxtLink>
            </li>
            <!-- <li class="c-navbar__menu-item">
              <NuxtLink to="/about" exact class="c-navbar__menu-link">
                <strong>03</strong>
                <span>about</span>
              </NuxtLink>
            </li> -->
            <li class="c-navbar__menu-item">
              <NuxtLink to="/contact" exact class="c-navbar__menu-link">
                <strong>04</strong>
                <span>contact</span>
              </NuxtLink>
            </li>
            <li class="c-navbar__menu-item">
              <NuxtLink
                to="/blog"
                exact
                class="c-navbar__menu-link"
                :class="{
                  'nuxt-link-active': $route.path.includes('/blog'),
                }"
              >
                <strong>05</strong>
                <span>blog</span>
              </NuxtLink>
            </li>
            <li class="c-navbar__menu-item">
              <NuxtLink
                to="/snippets"
                exact
                class="c-navbar__menu-link"
                :class="{
                  'nuxt-link-active': $route.path.includes('/snippets'),
                }"
              >
                <strong>05</strong>
                <span>snippets</span>
              </NuxtLink>
            </li>
            <li class="c-navbar__menu-item">
              <a
                href="https://saabbir-resume.netlify.app/"
                target="_blank"
                class="c-navbar__menu-link"
              >
                <strong>06</strong>
                <span>resume</span>
                <svg class="c-external-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.$refs.navbarNav.classList.toggle("is-open");
      this.isMenuOpen = !this.isMenuOpen;
    },
    hideNav() {
      this.$refs.navbarNav.classList.remove("is-open");
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
