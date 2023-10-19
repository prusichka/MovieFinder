// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
  pages: true,
  app: {
		head: {
			meta: [
				{ name: 'description', content: 'Movie Finder' },
				{ name: 'name', content: 'Movie Finder' },
			],
			htmlAttrs: {
				lang: 'en',
			},
		},
	},
	runtimeConfig: {
    public: {
      apiBase: 'https://www.omdbapi.com/',
			apiKey: '47d81a02'
    }
  },
  nitro: {
		compressPublicAssets: true,
		preset: 'vercel-edge',
	},
  css: ['~/assets/css/main.css'],
	modules: ['@pinia/nuxt','@nuxtjs/tailwindcss','@element-plus/nuxt'],
})
