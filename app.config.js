export default defineAppConfig({
	ui: {
		button: {
			colors: ['primary', 'secondary', 'red', 'green', 'yellow', 'gray', 'cyan', 'blue'],
			variants: ['solid', 'outline', 'soft', 'ghost', 'link', 'icon'],
		},
		toggle: {
			base: 'relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
			active: 'bg-primary-500 dark:bg-primary-400',
			inactive: 'bg-gray-200 dark:bg-gray-700',
			container: {
				base: 'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200',
				active: 'translate-x-4',
				inactive: 'translate-x-0',
			},
			icon: {
				base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
				active: 'opacity-100 ease-in duration-200',
				inactive: 'opacity-0 ease-out duration-100',
				on: 'h-3 w-3 text-primary-500 dark:text-primary-400',
				off: 'h-3 w-3 text-gray-400 dark:text-gray-500',
			},
			default: {
				iconOn: null,
				iconOff: null,
			},
		},
	},
})
