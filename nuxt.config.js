export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Saabbir Hossain",
    meta: [
      // Primary Meta Tags
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "title",
        name: "title",
        content: "Saabbir Hossain"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Saabbir Hossain is a professional front-end developer from Bangladesh."
      },
      // Open Graph / Facebook
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://saabbir.github.io/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Saabbir Hossain"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Saabbir Hossain is a professional front-end developer from Bangladesh."
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/Saabbir/saabbir.github.io/master/assets/images/saabbir.png"
      },
      // Twitter
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://saabbir.github.io/"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Saabbir Hossain"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "Saabbir Hossain is a professional front-end developer from Bangladesh."
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content:
          "https://raw.githubusercontent.com/Saabbir/saabbir.github.io/master/assets/images/saabbir.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // 'tailwindcss/dist/tailwind.min.css',
    "normalize.css/normalize.css",
    "~assets/scss/index.scss"
  ],

  /*
   ** Global style resources - https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: ["~/assets/scss/01-config/config.scss"]
  },

  loading: {
    color: "#108775"
    // height: '5px'
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // {
    //   src: "~plugins/drift.js",
    //   mode: "client"
    // }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/google-analytics",
    // Consult https://github.com/juliomrqz/nuxt-optimized-images
    "@aceforth/nuxt-optimized-images"
  ],

  // Consult https://github.com/juliomrqz/nuxt-optimized-images
  optimizedImages: {
    optimizeImages: true
  },
  optimizeImagesInDev: true,

  // Consult https://google-analytics.nuxtjs.org/setup/#configure
  googleAnalytics: {
    id: "UA-104844719-1"
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts"
  ],

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    display: "swap",
    families: {
      Merriweather: [700],
      Nunito: [400, 700, 900]
    }
    // download: true,
    // base64: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css"
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
