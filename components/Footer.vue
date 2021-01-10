<template>
  <footer class="c-footer">
    <div class="l-container ">
      <div class="copyright-text">
        <p>© Copyright {{ new Date().getUTCFullYear() }} <strong>Saabbir Hossain</strong></p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.c-footer {
  margin-top: auto;
  border-top: rem(1px) solid $border-color;

  .copyright-text {
    display: flex;
    align-items: center;
    height: rem(70px);
    justify-content: center;
    position: relative;
    overflow: hidden;
    text-align: center;

    @media (min-width: 768px) {
      height: rem(100px);
    }

    p {
      margin: 0;
      color: #abacbf;
    }

    &::after {
      content: "Saabbir Hossain";
      position: absolute;
      bottom: rem(-13px);
      font-size: rem(73px);
      line-height: 1;
      color: #f7f7f7;
      font-weight: 900;
      overflow: hidden;
      z-index: -1;
      text-transform: uppercase;
      white-space: nowrap;
      display: none;

      @media (min-width: 768px) {
        display: block;
      }

      @media (min-width: 1200px) {
        font-size: rem(83px);
      }
    }
  }
}
</style>
