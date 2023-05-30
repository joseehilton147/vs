<script setup>
	const props = defineProps({
		modelValue: {
			type: [String, Number],
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		name: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: null,
		},
		required: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		autofocus: {
			type: Boolean,
			default: false,
		},
		autocomplete: {
			type: String,
			default: null,
		},
		spellcheck: {
			type: Boolean,
			default: null,
		},
		icon: {
			type: String,
			default: null,
		},
		loadingIcon: {
			type: String,
			default: 'line-md:loading-twotone-loop',
		},
		iconPosition: {
			type: String,
			default: 'left',
			validator: value => ['left', 'right'].includes(value),
		},
		iconSize: {
			type: String,
			default: 'wh-20',
		},
		loading: {
			type: Boolean,
			default: false,
		},
		textSize: {
			type: String,
			default: 'md',
			validator: value => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value),
		},
		appearance: {
			type: String,
			default: 'white',
			validator: value => ['white', 'gray', 'none'].includes(value),
		},
		radius: {
			type: String,
			default: 'xs',
			validator: value => ['disabled', 'xs', 'sm', 'md', 'lg', 'xl', 'full'].includes(value),
		},
	})

	const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

	const input = ref(null)

	const autoFocus = () => {
		if (props.autofocus) {
			input.value?.focus()
		}
	}

	const inputClass = computed(() => {
		const defaultInput = `relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none`

		const padding =
			props.icon || props.loading
				? `p-${props.iconPosition === 'left' ? 'l' : 'r'}-32 p-y-8 p-${
						props.iconPosition === 'left' ? 'r' : 'l'
				  }-8`
				: `p-8`

		const appearance = inputAppearance[props.appearance]

		const textSize = textSizes[props.textSize]

		const radius = props.radius !== 'disabled' ? radiusSizes[props.radius] : ''

		return `${defaultInput} ${appearance} ${textSize} ${radius} ${padding}`
	})

	const inputAppearance = {
		white: 'text-gray-900 bg-white border border-primary placeholder:text-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
		gray: 'bg-zinc-800 border border-primary placeholder:text-zinc-600 focus:ring-2 focus:ring-primary focus:border-primary',
		none: 'border-0 border-primary bg-transparent focus:ring-0 focus:shadow-none placeholder:text-gray-400',
	}

	const radiusSizes = {
		xs: 'rounded-2',
		sm: 'rounded-4',
		md: 'rounded-8',
		lg: 'rounded-12',
		xl: 'rounded-16',
		full: 'rounded-full',
	}

	const textSizes = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
	}

	const displayIcon = computed(() => {
		const shouldDisplayLeftIcon = props.iconPosition === 'left' && (props.loading || props.icon)
		const shouldDisplayRightIcon = props.iconPosition === 'right' && (props.loading || props.icon)

		return {left: shouldDisplayLeftIcon, right: shouldDisplayRightIcon}
	})

	const onInput = event => {
		emit('update:modelValue', event.target.value)
	}

	onMounted(() => {
		setTimeout(() => {
			autoFocus()
		}, 100)
	})
</script>

<template>
	<div class="relative">
		<input
			:id="name"
			ref="input"
			:name="name"
			:value="modelValue"
			:type="type"
			:required="required"
			:placeholder="placeholder"
			:disabled="disabled || loading"
			:readonly="readonly"
			:autocomplete="autocomplete"
			:spellcheck="spellcheck"
			:class="inputClass"
			@input="onInput"
			@focus="$emit('focus', $event)"
			@blur="$emit('blur', $event)"
		/>
		<Icon
			v-if="displayIcon.left"
			:name="loading ? loadingIcon : icon"
			:class="['transform-translate-y--1/2 pointer-events-none absolute left-8 top-1/2', iconSize]"
			aria-hidden="true"
		/>
		<Icon
			v-if="displayIcon.right"
			:name="loading ? loadingIcon : icon"
			:class="['transform-translate-y--1/2 pointer-events-none absolute right-8 top-1/2', iconSize]"
			aria-hidden="true"
		/>
	</div>
</template>
