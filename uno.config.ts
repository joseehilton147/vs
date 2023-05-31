import {defineConfig, presetUno} from 'unocss'

export default defineConfig({
	presets: [presetUno()],
	theme: {
		container: {
			center: true,
		},
		breakpoints: {
			xs: '320px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
		colors: {
			global: {
				DEFAULT: '#F0F2F9', // bg-global
				dark: {
					DEFAULT: '#0C0B0F', // bg-global-dark
					100: '#19181B', // bg-global-dark-100
				},
			},
			primary: {
				DEFAULT: '#32585a', // bg-primary
				50: '#99acad', // bg-primary-50
				100: '#849b9c', // bg-primary-100
				200: '#708a8c', // bg-primary-200
				300: '#5b797b', // bg-primary-300
				400: '#47696b', // bg-primary-400
				500: '#32585a', // bg-primary-500
				600: '#2d4f51', // bg-primary-600
				700: '#284648', // bg-primary-700
				800: '#233e3f', // bg-primary-800
				900: '#1e3536', // bg-primary-900
				950: '#192c2d', // bg-primary-950
			},
			secondary: {
				DEFAULT: '#9b55fd', // bg-secondary
				50: '#cdaafe', // bg-secondary-50
				100: '#c399fe', // bg-secondary-100
				200: '#b988fe', // bg-secondary-200
				300: '#af77fd', // bg-secondary-300
				400: '#a566fd', // bg-secondary-400
				500: '#9b55fd', // bg-secondary-500
				600: '#8c4de4', // bg-secondary-600
				700: '#7c44ca', // bg-secondary-700
				800: '#6d3bb1', // bg-secondary-800
				900: '#5d3398', // bg-secondary-900
				950: '#4e2b7f', // bg-secondary-950
			},
		},
	},
})
