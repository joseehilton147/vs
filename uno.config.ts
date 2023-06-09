import {defineConfig, presetUno} from 'unocss'

// TODO: find a better way to do this
const colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
const types = ['bg', 'color', 'border', 'hover:bg', 'hover:color', 'hover:border']
const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

const safelistColors = types.flatMap(type =>
	colors.flatMap(color => shades.flatMap(shade => `${type}-${color}-${shade}`)),
)

export default defineConfig({
	presets: [presetUno()],
	safelist: [...safelistColors],
	theme: {
		container: {
			center: true,
		},
		colors: {
			primary: {
				DEFAULT: '#1CC1DE', // bg-primary
				50: '#E1F8FC', // bg-primary-50
				100: '#B4EDF6', // bg-primary-100
				200: '#83E1F1', // bg-primary-200
				300: '#53D4EA', // bg-primary-300
				400: '#30CAE4', // bg-primary-400
				500: '#1CC1DE', // bg-primary-500
				600: '#18B1CA', // bg-primary-600
				700: '#139CB0', // bg-primary-700
				800: '#0F8897', // bg-primary-800
				900: '#06656B', // bg-primary-900
				950: '#03323D', // bg-primary-950
			},
			secondary: {
				DEFAULT: '#9b55fd', // bg-secondary
				'50': '#f9f5ff', // bg-secondary-50
				'100': '#f1e7ff', // bg-secondary-100
				'200': '#e5d3ff', // bg-secondary-200
				'300': '#d1b1ff', // bg-secondary-300
				'400': '#b480ff', // bg-secondary-400
				'500': '#9b55fd', // bg-secondary-500
				'600': '#802cf1', // bg-secondary-600
				'700': '#6c1cd4', // bg-secondary-700
				'800': '#5d1cad', // bg-secondary-800
				'900': '#4d188b', // bg-secondary-900
				'950': '#320467', // bg-secondary-950
			},
			success: {
				DEFAULT: '#56ca00', // bg-success
				'50': '#f3ffe4', // bg-success-50
				'100': '#e4ffc5', // bg-success-100
				'200': '#c9ff92', // bg-success-200
				'300': '#a4ff53', // bg-success-300
				'400': '#81fb20', // bg-success-400
				'500': '#56ca00', // bg-success-500
				'600': '#48b500', // bg-success-600
				'700': '#378902', // bg-success-700
				'800': '#2e6c08', // bg-success-800
				'900': '#295b0c', // bg-success-900
				'950': '#113300', // bg-success-950
			},
			info: {
				DEFAULT: '#06a2f1', // bg-info
				'50': '#eff9ff', // bg-info-50
				'100': '#dff1ff', // bg-info-100
				'200': '#b8e5ff', // bg-info-200
				'300': '#78d1ff', // bg-info-300
				'400': '#16b1ff', // bg-info-400
				'500': '#06a2f1', // bg-info-500
				'600': '#0080ce', // bg-info-600
				'700': '#0066a7', // bg-info-700
				'800': '#02568a', // bg-info-800
				'900': '#084872', // bg-info-900
				'950': '#062d4b', // bg-info-950
			},
			warning: {
				DEFAULT: '#ffb400', // bg-warning
				'50': '#fffeea', // bg-warning-50
				'100': '#fff9c5', // bg-warning-100
				'200': '#fff285', // bg-warning-200
				'300': '#ffe546', // bg-warning-300
				'400': '#ffd51b', // bg-warning-400
				'500': '#ffb400', // bg-warning-500
				'600': '#e28a00', // bg-warning-600
				'700': '#bb6002', // bg-warning-700
				'800': '#984a08', // bg-warning-800
				'900': '#7c3d0b', // bg-warning-900
				'950': '#481f00', // bg-warning-950
			},
			danger: {
				DEFAULT: '#ff4c51', // bg-danger
				'50': '#fff1f1', // bg-danger-50
				'100': '#ffdfe0', // bg-danger-100
				'200': '#ffc5c7', // bg-danger-200
				'300': '#ff9da0', // bg-danger-300
				'400': '#ff6468', // bg-danger-400
				'500': '#ff4c51', // bg-danger-500
				'600': '#ed151b', // bg-danger-600
				'700': '#c80d12', // bg-danger-700
				'800': '#a50f13', // bg-danger-800
				'900': '#881417', // bg-danger-900
				'950': '#4b0406', // bg-danger-950
			},
		},
	},
})
