// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google' }
    ]
  },

  app: {
    head: {
      title: 'Centro Cultural de Capoeira Abolição',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Centro Cultural de Capoeira Abolição - Transformando vidas através da capoeira' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap'
        }
      ]
    }
  }
})