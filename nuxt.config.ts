import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Takahiro Hatanaka',
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "takahirohatanaka,takahiro,hatanaka,畑中貴弘,畑中,貴弘,はたなかたかひろ,はたなか,たかひろ",
      },
      { "http-equiv": "x-ua-compatible", content: "ie=edge" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
        // https://fonts.google.com/icons?selected=Material+Icons
        rel: "stylesheet",
      },
    ],
  },
  css: [
    "@/assets/css/fonts.css",
    "@/assets/css/tailwind.css",
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})
