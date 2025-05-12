// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui', 'nuxt-gtag'],
  gtag: {
    id: 'G-2898RVF3GV',
  },
  css: ['~/assets/css/main.css'],
  ssr: true,
});
