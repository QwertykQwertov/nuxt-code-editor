import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'Code Editor',
    },
  },

  modules: ['@nuxtjs/google-fonts', '@nuxt/icon'],
  googleFonts: {
    display: 'swap',
    families: {
      'Open Sans': {
        wght: '300..800',
        ital: '300..800',
      },
    },
  },
  icon: {
    mode: 'svg',
    aliases: {
      code: 'heroicons:code-bracket-square-solid',
      puzzle: 'heroicons:puzzle-piece-solid',
      fire: 'heroicons:fire-solid',
      cog: 'heroicons:cog-6-tooth-solid',
      plane: 'heroicons:paper-airplane-solid',
      bars: 'heroicons:bars-3-solid',
      xMark: 'heroicons:x-mark-solid',
    },
  },
})
