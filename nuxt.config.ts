export default defineNuxtConfig({
  app: {
    head: {
      title: "Takahiro Hatanaka",
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {
          name: "keywords",
          content:
            "takahirohatanaka,takahiro,hatanaka,畑中貴弘,畑中,貴弘,はたなかたかひろ,はたなか,たかひろ",
        },
        {"http-equiv": "x-ua-compatible", content: "ie=edge"},
      ],
      link: [
        {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
        {
          href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
          rel: "stylesheet",
        },
      ],
    },
  },
  css: ["@/assets/css/fonts.css", "@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
