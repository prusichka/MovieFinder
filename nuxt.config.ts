// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
  pages: true,
	runtimeConfig: {
    public: {
      apiBase: 'https://www.omdbapi.com/',
			apiKey: '47d81a02'
    }
  },
  css: ['~/assets/css/main.css'],
	modules: ['@pinia/nuxt','@nuxtjs/tailwindcss','@element-plus/nuxt'],
})
