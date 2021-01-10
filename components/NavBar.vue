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
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('work') }"
              >
                <strong>02</strong>
                <span>work</span>
              </nuxt-link>
            </li>
            <li class="c-navbar__menu-item">
              <nuxt-link 
                to="/blog" 
                class="c-navbar__menu-link"
                :class="{ 'nuxt-link-active': $route.path.includes('tag') }"
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
  .c-navbar {
    padding: rem(32px) 0;
    background-color: #fff;
    border-bottom: rem(1px) solid $border-color;

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__brand {
      display: flex;
      align-items: center;
      color: $text-color-dark;

      &:hover,
      &:focus {
        text-decoration: none;
      }
    }

    &__brand-img-container {
      width: rem(60px);
      height: rem(60px);
      overflow: hidden;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 rem(2px) rem(4px) rgba(0,0,0,.4);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: rem(10px);    
    }

    &__brand-img {
      display: block;
      max-width: 100%;
    }

    &__brand-text {
      display: grid;
      font-size: rem(18px);
    }

    &__brand-text-name {
      font-weight: 700;
    }

    &__brand-text-role {
      font-size: .8em;
      color: $text-color-light;
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
      padding: rem(16px);
      color: $text-color-light;
      display: flex;
      align-items: center;
      position: relative;
      font-size: rem(16px);
      
      span {
        margin-left: rem(8px);
      }

      &::after {
        content: "";
        position: absolute;
        height: rem(4px);
        background-color: $text-color-gray;
        left: rem(16px);
        right: rem(16px);
        display: block;
        bottom: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: .3s;
      }

      &:hover,
      &:focus {
        text-decoration: none;

        &::after {
          transform: scaleX(1);
        }
      }

      &.nuxt-link-active {
        color: $text-color-dark;
        font-weight: bold;

        &::after {
          transform: scaleX(1);
          background: $accent-color-1 linear-gradient(45deg, $accent-color-1, $accent-color-2);
        }
      }
    }
  }
</style>