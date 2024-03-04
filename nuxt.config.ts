// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@dargmuesli/nuxt-cookie-control'],
  cookieControl: {
    colors: {
      checkboxActiveBackground: '#00A34A', // text-green-600
    },
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [
        {
          description: {
            de: 'Dieser Cookie tut etwas.',
            en: 'This cookie does something very very very very very very very long.',
          },
          name: {
            de: 'Notwendiger Cookie',
            en: 'Necessary Cookie',
          },
          targetCookieIds: ['NEC'],
        },
      ],
      optional: [
        {
          id: 'op',
          name: 'Optional Cookie',
          links: {
            'https://example.com': 'Privacy Policy',
            'https://example.cop': null,
          },
          targetCookieIds: ['_o', '_p', '_t'],
        },
      ],
    },
    isCookieIdVisible: true,
    isIframeBlocked: true,
    locales: ['en', 'de'],
    localeTexts: {
      de: {
        iframeBlocked: 'Bitte funktionale Cookies aktivieren:',
      },
    },
  },
})
