// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
	css: ['~/assets/style/main.css', '~/assets/style/code-block.css', '@unocss/reset/tailwind.css'],

	modules: ['@unocss/nuxt', 'nuxt-icon', '@nuxtjs/color-mode', '@nuxtjs/i18n'],

	i18n: {
		defaultLocale: 'br',
		locales: [
			{
				name: 'English',
				code: 'en',
				iso: 'en-US',
				file: 'en-us.js',
			},

			{
				name: 'Português (Brasil)',
				code: 'br',
				iso: 'pt-BR',
				file: 'pt-br.js',
			},
		],
		langDir: 'locales/',
		strategy: 'prefix',
	},

	colorMode: {
		classSuffix: '',
		preference: 'light',
	},

	imports: {
		dirs: ['composables/**'],
	},

	build: {
		transpile: ['vue-toastification'],
	},

	experimental: {
		viewTransition: true,
	},
})
