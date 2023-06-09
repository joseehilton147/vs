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
		loading: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'md',
			validator: value => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
		},
		appearance: {
			type: String,
			default: 'white',
			validator: value => ['white', 'gray', 'none'].includes(value),
		},
		radius: {
			type: String,
			default: 'sm',
			validator: value => ['none', 'sm', 'md', 'lg', 'xl', 'full'].includes(value),
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
	})

	const ui = useAppConfig().ui.input

	const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

	const input = ref(null)

	const inputClass = computed(() => {
		let icon = ''

		if (props.icon || props.loading) {
			if (props.iconPosition === 'left') {
				icon = `p-l-8 p-r-2`
			} else {
				icon = `p-r-8 p-l-2`
			}
		}

		const padding = props.padded ? ui.padding[props.size] : ''

		return `${ui.base} ${ui.variant[props.variant]} ${ui.size[props.size]} ${
			ui.radius[props.radius]
		} ${icon} ${padding} ${ui.custom}`
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
	<div :class="ui.wrapper">
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
			:class="[inputClass]"
			@input="onInput"
			@focus="$emit('focus', $event)"
			@blur="$emit('blur', $event)"
		/>
		<Icon
			v-if="displayIcon.left"
			:name="loading ? loadingIcon : icon"
			:class="[ui.icon.base, 'left-2', ui.icon.size[props.size]]"
			aria-hidden="true"
		/>
		<Icon
			v-if="displayIcon.right"
			:name="loading ? loadingIcon : icon"
			:class="[ui.icon.base, 'right-2', ui.icon.size[props.size]]"
			aria-hidden="true"
		/>
	</div>
</template>
