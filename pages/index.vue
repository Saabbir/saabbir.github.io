<template>
  <div class="l-main l-main--home">
    <div class="l-container">
      <Intro />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    head() {
      return {
        title: 'Home - Saabbir Hossain',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Saabbir Hossain is a professional front-end developer from Bangladesh.'
          }
        ]
      }
    },
    methods: {
      driftBot() {
        var t = (window.driftt = window.drift = window.driftt || []);
        if (!t.init) {
          if (t.invoked)
            return void (
              window.console &&
              console.error &&
              console.error("Drift snippet included twice.")
            );
          (t.invoked = !0),
            (t.methods = [
              "identify",
              "config",
              "track",
              "reset",
              "debug",
              "show",
              "ping",
              "page",
              "hide",
              "off",
              "on"
            ]),
            (t.factory = function(e) {
              return function() {
                var n = Array.prototype.slice.call(arguments);
                return n.unshift(e), t.push(n), t;
              };
            }),
            t.methods.forEach(function(e) {
              t[e] = t.factory(e);
            }),
            (t.load = function(t) {
              var e = 3e5,
                n = Math.ceil(new Date() / e) * e,
                o = document.createElement("script");
              (o.type = "text/javascript"),
                (o.async = !0),
                (o.crossorigin = "anonymous"),
                (o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js");
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(o, i);
            });
        }

        drift.SNIPPET_VERSION = "0.3.1";
        drift.load("am3ztba424by");      
      },
    },
    mounted() {
      window.onload = this.driftBot;
    },    
  }
</script>

<style lang="scss" scoped>
  .l-main--home {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>