// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
	css: ['~/assets/style/main.css', '@unocss/reset/tailwind.css'],

	modules: ['@unocss/nuxt', 'nuxt-icon', '@nuxtjs/color-mode'],

	colorMode: {
		classSuffix: '',
		preference: 'light',
	},

	imports: {
		dirs: ['composables/**'],
	},

	experimental: {
		viewTransition: true,
	},
})
