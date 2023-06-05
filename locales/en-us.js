export default {
	global: {
		copyCode: 'Copied to clipboard',
	},
	introduction: {
		title: 'Introduction',
		text: 'This is a project with pre builded components for Nuxt 3, it is still in development, but you can use it if you want.',
	},
	input: {
		title: 'Input',
		examples: {
			placeholder: 'Type your name here...',
		},
		default: {
			title: 'How to use',
			text: 'You can use the {code} to render a basic input.',
			code: 'input-component',
		},
		sizing: {
			title: 'Sizing',
			text: 'You can use the prop {code} to change the size of the input.',
			code: 'size',
		},
		icon: {
			title: 'Icon',
			text: {
				one: {
					value: 'Use any icon from the {link} and use the prop {code} to render an icon inside the input.',
					link: 'Iconify library',
					code: 'icon',
				},
				two: {
					value: 'Use the prop {code} to change the position of the icon between {code2} and {code3}.',
					code: 'icon-position',
					code2: 'left',
					code3: 'right',
				},
				three: {
					value: 'The prop {code} or the slot is optional, so if you want to use the button just as an icon, just remove them.',
					code: 'label',
				},
			},
		},
		loading: {
			title: 'Loading',
			text: 'Use the prop {code} to display the loading icon, it is possible to use the icon position to change where to display.',
			code: 'loading',
		},
		placeholder: {
			title: 'Placeholder',
			text: 'Use the prop {code} to set a placeholder for the input.',
			code: 'placeholder',
		},
		disabled: {
			title: 'Disabled',
			text: 'Use the prop {code} to disable the input.',
			code: 'disabled',
		},
		radius: {
			title: 'Radius',
			text: 'Use the prop {code} to change the radius of the input.',
			code: 'radius',
		},
	},
	select: {
		defaultPlaceholder: 'Select a option...',
		title: 'Select',
		introduction: {
			title: 'Introduction',
			text: 'The select component is a wrapper for the native select element, it is possible to use the {code} to render a basic select.',
			code: 'select-component',
		},
	},
}
