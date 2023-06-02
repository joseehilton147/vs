<script setup>
	const props = defineProps({
		modelValue: {
			type: [String, Number, Object],
			default: '',
		},
		name: {
			type: String,
			default: null,
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
		icon: {
			type: String,
			default: null,
		},
		loadingIcon: {
			type: String,
			default: 'line-md:loading-twotone-loop',
		},
		leadingIcon: {
			type: String,
			default: null,
		},
		trailingIcon: {
			type: String,
			default: () => useAppConfig().ui.select.default.trailingIcon,
		},
		trailing: {
			type: Boolean,
			default: false,
		},
		leading: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		padded: {
			type: Boolean,
			default: true,
		},
		options: {
			type: Array,
			default: () => [],
		},
		size: {
			type: String,
			default: () => useAppConfig().ui.select.default.size,
			validator(value) {
				return Object.keys(useAppConfig().ui.select.size).includes(value)
			},
		},
		color: {
			type: String,
			default: () => useAppConfig().ui.select.default.color,
			validator(value) {
				return [...Object.keys(useAppConfig().ui.select.color)].includes(value)
			},
		},
		variant: {
			type: String,
			default: () => useAppConfig().ui.select.default.variant,
			validator(value) {
				return [
					...Object.keys(useAppConfig().ui.select.variant),
					...Object.values(useAppConfig().ui.select.color).flatMap(value => Object.keys(value)),
				].includes(value)
			},
		},
		textAttribute: {
			type: String,
			default: 'text',
		},
		valueAttribute: {
			type: String,
			default: 'value',
		},
	})

	const ui = ref(useAppConfig().ui.select)
	const slots = useSlots()

	const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

	const onInput = event => {
		emit('update:modelValue', event.target.value)
	}

	const guessOptionValue = option => {
		return get(option, props.valueAttribute, get(option, props.textAttribute))
	}

	const guessOptionText = option => {
		return get(option, props.textAttribute, get(option, props.valueAttribute))
	}

	const normalizeOption = option => {
		if (['string', 'number', 'boolean'].includes(typeof option)) {
			return {
				[props.valueAttribute]: option,
				[props.textAttribute]: option,
			}
		}

		return {
			...option,
			[props.valueAttribute]: guessOptionValue(option),
			[props.textAttribute]: guessOptionText(option),
		}
	}

	const normalizedOptions = computed(() => {
		return props.options.map(option => normalizeOption(option))
	})

	const normalizedOptionsWithPlaceholder = computed(() => {
		if (!props.placeholder) {
			return normalizedOptions.value
		}

		return [
			{
				[props.valueAttribute]: '',
				[props.textAttribute]: props.placeholder,
				disabled: true,
			},
			...normalizedOptions.value,
		]
	})

	const normalizedValue = computed(() => {
		const normalizeModelValue = normalizeOption(props.modelValue)
		const foundOption = normalizedOptionsWithPlaceholder.value.find(
			option => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute],
		)
		if (!foundOption) {
			return ''
		}

		return foundOption[props.valueAttribute]
	})

	const selectClass = computed(() => {
		const classes = [
			ui.value.base,
			ui.value.rounded,
			ui.value.size[props.size],
			ui.value.custom,
			ui.value.variant[props.variant],
		]
		if (props.padded) {
			classes.push(ui.value.padding[props.size])
		}
		if (isLeading.value || slots.leading) {
			classes.push(ui.value.leading.padding[props.size])
		}
		if (isTrailing.value || slots.trailing) {
			classes.push(ui.value.trailing.padding[props.size])
		}
		return classes.join(' ')
	})

	const isLeading = computed(() => {
		return (
			(props.icon && props.leading) ||
			(props.icon && !props.trailing) ||
			(props.loading && !props.trailing) ||
			props.leadingIcon
		)
	})

	const isTrailing = computed(() => {
		return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
	})

	const leadingIconName = computed(() => {
		if (props.loading) {
			return props.loadingIcon
		}
		return props.leadingIcon || props.icon
	})

	const trailingIconName = computed(() => {
		if (props.loading && !isLeading.value) {
			return props.loadingIcon
		}
		return props.trailingIcon || props.icon
	})

	const leadingWrapperIconClass = computed(() => {
		const classes = [
			ui.value.icon.leading.wrapper,
			ui.value.icon.leading.pointer,
			ui.value.icon.leading.padding[props.size],
		]
		return classes.join(' ')
	})

	const leadingIconClass = computed(() => {
		const classes = [ui.value.icon.base, ui.value.icon.size[props.size]]

		if (props.loading) {
			classes.push('animate-spin')
		}

		return classes.join(' ')
	})

	const trailingWrapperIconClass = computed(() => {
		const classes = [
			ui.value.icon.trailing.wrapper,
			ui.value.icon.trailing.pointer,
			ui.value.icon.trailing.padding[props.size],
		]

		return classes.join(' ')
	})

	const trailingIconClass = computed(() => {
		const classes = [ui.value.icon.base, props.loading && !isLeading.value && 'animate-spin']

		classes.push(ui.value.icon.size[props.size])

		return classes.join(' ')
	})
</script>

<template>
	<div :class="ui.wrapper">
		<select
			:id="name"
			:name="name"
			:value="modelValue"
			:required="required"
			:disabled="disabled || loading"
			:class="selectClass"
			@input="onInput"
		>
			<template v-for="(option, index) in normalizedOptionsWithPlaceholder">
				<optgroup
					v-if="option.children"
					:key="`${option[valueAttribute]}-optgroup-${index}`"
					:value="option[valueAttribute]"
					:label="option[textAttribute]"
				>
					<option
						v-for="(childOption, index2) in option.children"
						:key="`${childOption[valueAttribute]}-${index}-${index2}`"
						:value="childOption[valueAttribute]"
						:selected="childOption[valueAttribute] === normalizedValue"
						:disabled="childOption.disabled"
						v-text="childOption[textAttribute]"
					/>
				</optgroup>
				<option
					v-else
					:key="`${option[valueAttribute]}-${index}`"
					:value="option[valueAttribute]"
					:selected="option[valueAttribute] === normalizedValue"
					:disabled="option.disabled"
					v-text="option[textAttribute]"
				/>
			</template>
		</select>

		<span v-if="(isLeading && leadingIconName) || $slots.leading" :class="leadingWrapperIconClass">
			<slot name="leading" :disabled="disabled" :loading="loading">
				<Icon :name="leadingIconName" :class="leadingIconClass" />
			</slot>
		</span>

		<span v-if="(isTrailing && trailingIconName) || $slots.trailing" :class="trailingWrapperIconClass">
			<slot name="trailing" :disabled="disabled" :loading="loading">
				<Icon :name="trailingIconName" :class="trailingIconClass" aria-hidden="true" />
			</slot>
		</span>
	</div>
</template>
