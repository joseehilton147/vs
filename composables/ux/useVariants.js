// @unocss-include
const variants = {
	solid: {
		purple: 'bg-purple-800 color-white hover:bg-purple-900',
		red: 'bg-red-800 color-white hover:bg-red-900',
		green: 'bg-green-800 color-white hover:bg-green-900',
		gray: 'bg-gray-800 color-white hover:bg-gray-900',
		yellow: 'bg-yellow-500 color-white hover:bg-yellow-600',
		cyan: 'bg-cyan-800 color-white hover:bg-cyan-900',
		blue: 'bg-blue-800 color-white hover:bg-blue-900',
	},
	outline: {
		purple: 'color-purple-500 border border-purple-800 hover:bg-purple-800 hover:color-white',
		red: 'color-red-500 border border-red-800 hover:bg-red-800 hover:color-white',
		green: 'color-green-500 border border-green-800 hover:bg-green-800 hover:color-white',
		gray: 'color-gray-500 border border-gray-800 hover:bg-gray-800 hover:color-white',
		yellow: 'color-yellow-500 border border-yellow-500 hover:bg-yellow-600 hover:color-white',
		cyan: 'color-cyan-500 border border-cyan-800 hover:bg-cyan-800 hover:color-white',
		blue: 'color-blue-500 border border-blue-800 hover:bg-blue-800 hover:color-white',
	},
	soft: {
		purple: 'color-purple-500 bg-purple-800 bg-opacity-20  hover:bg-opacity-40',
		red: 'color-red-500 bg-red-800 bg-opacity-20  hover:bg-opacity-40',
		green: 'color-green-500 bg-green-800 bg-opacity-20  hover:bg-opacity-40',
		gray: 'color-gray-500 bg-gray-800 bg-opacity-20  hover:bg-opacity-40',
		yellow: 'color-yellow-500 bg-yellow-600 bg-opacity-20  hover:bg-opacity-40',
		cyan: 'color-cyan-500 bg-cyan-800 bg-opacity-20  hover:bg-opacity-40',
		blue: 'color-blue-500 bg-blue-800 bg-opacity-20  hover:bg-opacity-40',
	},
	ghost: {
		purple: 'color-purple-500 hover:bg-purple-800 hover:bg-opacity-20',
		red: 'color-red-500 hover:bg-red-800 hover:bg-opacity-20',
		green: 'color-green-500 hover:bg-green-800 hover:bg-opacity-20',
		gray: 'color-gray-500 hover:bg-gray-800 hover:bg-opacity-20',
		yellow: 'color-yellow-500 hover:bg-yellow-600 hover:bg-opacity-20',
		cyan: 'color-cyan-500 hover:bg-cyan-800 hover:bg-opacity-20',
		blue: 'color-blue-500 hover:bg-blue-800 hover:bg-opacity-20',
	},
	link: {
		purple: 'color-purple-500 hover:underline',
		red: 'color-red-500 hover:underline',
		green: 'color-green-500 hover:underline',
		gray: 'color-gray-500 hover:underline',
		yellow: 'color-yellow-500 hover:underline',
		cyan: 'color-cyan-500 hover:underline',
		blue: 'color-blue-500 hover:underline',
	},
	icon: {
		purple: 'hover:color-purple-500',
		red: 'hover:color-red-500',
		green: 'hover:color-green-500',
		gray: 'hover:color-gray-500',
		yellow: 'hover:color-yellow-500',
		cyan: 'hover:color-cyan-500',
		blue: 'hover:color-blue-500',
	},
}

export default function () {
	return variants
}
