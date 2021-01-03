<template>
  <div class="c-navbar">
    <div class="l-container">
      <div class="c-navbar__content">
        <nuxt-link to="/" class="c-navbar__brand">Saabbir Hossain</nuxt-link>
        <nav class="c-navbar__nav">
          <ul class="c-navbar__menu">
            <li class="c-navbar__menu-item">
              <nuxt-link to="/" exact class="c-navbar__menu-link">Home</nuxt-link>
            </li>
            <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/blog" 
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('tag') }"
              >Blog</nuxt-link>
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
.c-navbar {
  padding: rem(16px) 0;
  background-color: $accent-color-1;
  background-image: linear-gradient(45deg, $accent-color-2, $accent-color-1);

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__brand {
    font-size: rem(16px);
    font-weight: bold;
    color: #fff;
    text-shadow: 0 rem(2px) rem(3px) rgba(0,0,0,.5);

    @media (min-width: 360px) {
      font-size: rem(18px);
    }

    @media (min-width: 500px) {
      font-size: rem(20px);
    }
    
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
      margin-right: rem(8px);
    }
  }

  &__menu-link {
    padding: rem(8px) rem(16px);
    color: #fff;
    display: block;
    border-radius: rem(4px);

    &:hover,
    &:focus {
      text-decoration: none;

      &:not(.nuxt-link-active) {
        color: #fff;
        background-color: rgba($accent-color-2, .3);
      }
    }

    &.nuxt-link-active {
      background: $accent-color-2;
      background-image: radial-gradient($accent-color-1, $accent-color-2);
      color: #fff;
      font-weight: bold;
      text-shadow: 0 rem(2px) rem(3px) rgba(0,0,0,.5);
    }
  }
}
</style>