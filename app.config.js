// @unocss-include

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
		input: {
			wrapper: 'relative',
			base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
			placeholder: 'placeholder:color-neutral-400',
			rounded: 'rounded-md',
			variant: {
				solid: 'bg-gray-100  disabled:bg-gray-400 dark:disabled:bg-neutral-600 dark:bg-neutral-800',
				outline: 'bg-transparent border disabled:bg-gray-400 dark:border-gray-100 dark:disabled:bg-neutral-600',
			},
			size: {
				'2xs': 'text-xs',
				xs: 'text-xs',
				sm: 'text-sm',
				md: 'text-sm',
				lg: 'text-base',
				xl: 'text-base',
			},
			gap: {
				'2xs': 'gap-x-4',
				xs: 'gap-x-6',
				sm: 'gap-x-8',
				md: 'gap-x-8',
				lg: 'gap-x-8',
				xl: 'gap-x-8',
			},
			padding: {
				'2xs': 'px-8 py-4',
				xs: 'px-10 py-6',
				sm: 'px-12 py-6',
				md: 'px-12 py-8',
				lg: 'px-12 py-8',
				xl: 'px-16 py-12',
			},
			custom: '',
		},
	},
})
