<template>
  <div class="l-main l-main--home">
    <Intro />
    <IntroCover />
  </div>
</template>

<script>
import driftBot from "@/utils/driftBot";
import vhHack from "@/utils/vhHack";
import _ from "lodash";

export default {
  name: "Home",
  head() {
    return {
      title: "Home - Saabbir Hossain",
    };
  },
  mounted() {
    // Load drift widget after window finished loading
    window.onload = driftBot;

    // Set --vh CSS custom property
    vhHack();
    window.addEventListener("resize", _.throttle(vhHack, 200));
  },
};
</script>

<style lang="scss" scoped>
.l-main--home {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
