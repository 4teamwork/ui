/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  ssr: false,
  target: 'static',
  telemetry: false,
  head: {
    title: 'ftw-ui',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: [
    {
      path: '~/lib/components',
      pathPrefix: false,
    },
  ],
  buildModules: ['@nuxtjs/vuetify'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'de', iso: 'de-CH', file: 'de.js', name: 'Deutsch', dateFormat: 'dd.MM.yyyy' },
      { code: 'en', iso: 'en', file: 'en.js', name: 'English', dateFormat: 'dd/MM/yyyy' },
      { code: 'fr', iso: 'fr-CH', file: 'fr.js', name: 'Français', dateFormat: 'dd.MM.yyyy' },
    ],
    defaultLocale: 'de',
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'de',
      alwaysRedirect: true,
    },
  },
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    },
  },
}
