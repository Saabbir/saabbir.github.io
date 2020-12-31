<template>
  <footer class="c-footer">
    <div class="container container--lg">
      <div class="copyright-text">
        <p>Made by <strong>Saabbir Hossain</strong></p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
.c-footer {
  margin-top: auto;
  border-top: 1px solid #eee;

  .copyright-text {
    display: flex;
    align-items: center;
    height: 70px;
    justify-content: center;
    position: relative;
    overflow: hidden;

    @media (min-width: 768px) {
      height: 100px;
    }

    p {
      margin: 0;
      color: #999;
    }

    &::after {
      content: "Saabbir Hossain";
      position: absolute;
      bottom: -13px;
      font-size: 73px;
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
        font-size: 83px;
      }
    }
  }
}
</style>
