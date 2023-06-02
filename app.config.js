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
				onIcon: null,
				offIcon: null,
			},
		},
		input: {
			wrapper: 'relative',
			base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none bg-transparent',
			placeholder: 'placeholder:color-neutral-500',
			variant: {
				solid: 'border border-gray-300  disabled:bg-gray-200 dark:border-neutral-800 dark:disabled:bg-neutral-800/80',
				outline: 'bg-transparent border disabled:bg-gray-400 dark:border-gray-100 dark:disabled:bg-neutral-600',
			},
			radius: {
				none: 'rounded-none',
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg',
				xl: 'rounded-xl',
				full: 'rounded-full',
			},
			size: {
				xs: 'text-xs',
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg',
				xl: 'text-xl',
			},
			gap: {
				xs: 'gap-x-1',
				sm: 'gap-x-1.5',
				md: 'gap-x-2',
				lg: 'gap-x-2.5',
				xl: 'gap-x-3',
			},
			padding: {
				xs: 'p-x-2 p-y-1',
				sm: 'p-x-2.5 p-y-1.5',
				md: 'p-x-3 p-y-2',
				lg: 'p-x-3.5 p-y-2.5',
				xl: 'p-x-4 p-y-3',
			},
			icon: {
				base: 'transform-translate-y--1/2 pointer-events-none absolute top-1/2',
				size: {
					xs: 'h-3.5 w-3.5',
					sm: 'h-4 w-4',
					md: 'h-5 w-5',
					lg: 'h-6 w-6',
					xl: 'h-7 w-7',
				},
			},
			custom: '',
		},
		select: {
			wrapper: 'relative',
			base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
			rounded: 'rounded-md',
			placeholder: 'text-gray-900 dark:text-white',
			custom: '',
			size: {
				'2xs': 'text-xs',
				xs: 'text-xs',
				sm: 'text-sm',
				md: 'text-sm',
				lg: 'text-base',
				xl: 'text-base',
			},
			gap: {
				'2xs': 'gap-x-1',
				xs: 'gap-x-1.5',
				sm: 'gap-x-2',
				md: 'gap-x-2',
				lg: 'gap-x-2',
				xl: 'gap-x-2',
			},
			padding: {
				'2xs': 'px-2 py-1',
				xs: 'px-2.5 py-1.5',
				sm: 'px-3 py-1.5',
				md: 'px-3 py-2',
				lg: 'px-4 py-2',
				xl: 'px-4 py-3',
			},
			leading: {
				padding: {
					'2xs': 'pl-[26px]',
					xs: 'pl-8',
					sm: 'pl-9',
					md: 'pl-10',
					lg: 'pl-11',
					xl: 'pl-12',
				},
			},
			trailing: {
				padding: {
					'2xs': 'pr-[26px]',
					xs: 'pr-8',
					sm: 'pr-9',
					md: 'pr-10',
					lg: 'pr-11',
					xl: 'pr-12',
				},
			},
			color: {
				white: {
					outline:
						'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
				},
				gray: {
					outline:
						'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
				},
			},
			variant: {
				outline:
					'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-primary-500 dark:ring-primary-400 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
				none: 'bg-transparent focus:ring-0 focus:shadow-none',
			},
			icon: {
				base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
				color: 'text-primary-500 dark:text-primary-400',
				size: {
					'2xs': 'h-3.5 w-3.5',
					xs: 'h-4 w-4',
					sm: 'h-4 w-4',
					md: 'h-5 w-5',
					lg: 'h-5 w-5',
					xl: 'h-6 w-6',
				},
				leading: {
					wrapper: 'absolute inset-y-0 left-0 flex items-center',
					pointer: 'pointer-events-none',
					padding: {
						'2xs': 'pl-2',
						xs: 'pl-2.5',
						sm: 'pl-3',
						md: 'pl-3',
						lg: 'pl-4',
						xl: 'pl-4',
					},
				},
				trailing: {
					wrapper: 'absolute inset-y-0 right-0 flex items-center',
					pointer: 'pointer-events-none',
					padding: {
						'2xs': 'pr-2',
						xs: 'pr-2.5',
						sm: 'pr-3',
						md: 'pr-3',
						lg: 'pr-4',
						xl: 'pr-4',
					},
				},
			},
			default: {
				size: 'sm',
				color: 'white',
				variant: 'outline',
				loadingIcon: 'line-md:loading-twotone-loop',
				trailingIcon: 'mdi:chevron-down',
			},
		},
	},
})
