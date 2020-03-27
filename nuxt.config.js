export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Takahiro Hatanaka',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' },
      {
        name: 'keywords',
        content: 'takahirohatanaka,takahiro,hatanaka,畑中貴弘,畑中,貴弘,はたなかたかひろ,はたなか,たかひろ'
      },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.ts',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',

    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-PVJKJQW', pageTracking: true }],
  ],

  styleResources: {
    scss: [
      '@/assets/css/variables.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  }
}
