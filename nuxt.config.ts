// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'pt-BR',
			},
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			script: [],
			link: [],
			style: [],
			noscript: [],
		},
	},

	css: ['~/assets/style/main.css', '@unocss/reset/tailwind.css'],

	modules: ['@unocss/nuxt', 'nuxt-icon', '@nuxtjs/color-mode'],

	colorMode: {
		classSuffix: '',
	},

	build: {
		transpile: ['vue-toastification'],
	},

	ssr: false,

	experimental: {
		viewTransition: true,
	},

	imports: {
		dirs: ['composables/**'],
	},
})
