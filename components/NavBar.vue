<template>
  <div class="c-navbar">
    <div class="container">
      <div class="c-navbar__content">
        <nuxt-link to="/" class="c-navbar__brand">Saabbir Hossain</nuxt-link>
        <nav class="c-navbar__nav">
          <ul class="c-navbar__menu">
            <li class="c-navbar__menu-item">
              <nuxt-link to="/" exact class="c-navbar__menu-link">Home</nuxt-link>
            </li>
            <li class="c-navbar__menu-item">
              <nuxt-link to="/blog" class="c-navbar__menu-link">Blog</nuxt-link>
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

<style lang="scss">
.c-navbar {
  padding: 1rem 0;
  background-color: $accent-color-1;
  background-image: linear-gradient(45deg, $accent-color-2, $accent-color-1);

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__brand {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    
    &:hover,
    &:focus {
      color: #fff;
      text-decoration: none;
    }
  }

  &__menu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__menu-item {
    &:not(:last-child) {
      margin-right: .5rem;
    }
  }

  &__menu-link {
    padding: .5rem 1rem;
    color: #fff;
    display: block;

    &:hover,
    &:focus {
      text-decoration: none;
    }    

    &.nuxt-link-active {
      background: $accent-color-2;
      color: #fff;
    }
  }
}
</style>