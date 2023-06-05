// @unocss-include
const select = {
	wrapper: 'relative',
	base: 'min-w-30 flex cursor-pointer items-center justify-between p-2',
	variants: {
		solid: 'bg-gray-100 dark:bg-neutral-800',
		outline: '',
	},
	disabled: 'pointer-events-none bg-gray-300/50 dark:bg-neutral-800/50',
	options: {
		base: 'm-t-4 z-1 absolute max-h-40 w-full overflow-auto bg-white shadow dark:bg-neutral-800',
		item: 'p-x-4 p-y-2 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-neutral-700',
		search: {
			base: 'p-x-2 p-y-3 flex items-center justify-center bg-gray-200 dark:bg-neutral-600',
			icon: 'color-gray-500 m-r-2 h-4 w-4 dark:color-white',
			input: 'color-gray-500 w-full bg-transparent text-base outline-none dark:color-white',
			empty: 'p-x-2 p-y-3 text-gray-500 dark:text-white',
		},
	},
	icons: {
		open: 'bx:chevron-up',
		closed: 'bx:chevron-down',
	},
	custom: '',
}

export default defineAppConfig({
	ui: {
		button: {
			colors: ['primary', 'secondary', 'red', 'green', 'yellow', 'gray', 'cyan', 'blue'],
			variants: ['solid', 'outline', 'soft', 'ghost', 'link', 'icon'],
		},
		toggle: {
			base: 'relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 dark:focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
			active: 'bg-purple-500 dark:bg-purple-400',
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
				on: 'h-3 w-3 text-purple-500 dark:text-purple-400',
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
		select,
	},
})
