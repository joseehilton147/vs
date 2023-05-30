<script setup>
	const props = defineProps({
		modelValue: {
			type: [String, Number],
			default: '',
		},
		type: {
			type: String,
			default: 'text',
			validation: value => ['text', 'number', 'email', 'password', 'url'].includes(value),
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
		autocomplete: {
			type: String,
			default: 'off',
			validation: value => ['off', 'on'].includes(value),
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
		size: {
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
			default: '',
		},
		variant: {
			type: String,
			default: 'solid',
			validator: value => ['outline', 'solid'].includes(value),
		},
		padded: {
			type: Boolean,
			default: true,
		},
		ui: {
			type: Object,
			default: () => useAppConfig().ui.input,
		},
	})

	const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

	const input = ref(null)

	const inputClass = computed(() => {
		const variant = props.ui.variant[props.variant]

		let icon = 'p-8'

		if (props.icon || props.loading) {
			if (props.iconPosition === 'left') {
				icon = `p-l-32 p-r-8 p-l-8 p-y-8`
			} else {
				icon = `p-r-32 p-l-8 p-r-8 p-y-8`
			}
		}

		const size = props.ui.size[props.size]

		const radius = props.radius ? props.radius : props.ui.rounded

		// let padding = props.ui.padding[props.size]

		// if (props.padded) {
		// 	padding = ''

		// 	if (props.icon || props.loading) {
		// 		if (props.iconPosition === 'left') {
		// 			padding = `p-l-32`
		// 		} else {
		// 			padding = `p-r-32`
		// 		}
		// 	}
		// }

		// const padding = props.padded ? props.ui.padding[props.size] : ''

		return `${props.ui.base} ${variant} ${size} ${radius} ${padding} ${icon} ${props.ui.custom}`
	})

	const displayIcon = computed(() => {
		const shouldDisplayLeftIcon = props.iconPosition === 'left' && (props.loading || props.icon)
		const shouldDisplayRightIcon = props.iconPosition === 'right' && (props.loading || props.icon)

		return {left: shouldDisplayLeftIcon, right: shouldDisplayRightIcon}
	})

	const onInput = event => {
		emit('update:modelValue', event.target.value)
	}
</script>

<template>
	<div :class="props.ui.wrapper">
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
