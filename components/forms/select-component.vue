<script setup>
	const props = defineProps({
		modelValue: {
			type: [String, Number, Object],
			default: '',
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
		icon: {
			type: String,
			default: null,
		},
		options: {
			type: Array,
			default: () => [],
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
		const defaultClass = 'relative block disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none'

		const white =
			'bg-zinc-800 text-gray-400 appearance-none inline-block py-12 pl-12 pr-24 rounded-md leading-tight'

		return `${defaultClass} ${white}`
		//   return classNames(
		//     ui.value.base,
		//     ui.value.size[props.size],
		//     ui.value.padding[props.size],
		//     ui.value.appearance[props.appearance],
		//     !!props.icon && ui.value.leading.padding[props.size],
		//     ui.value.trailing.padding[props.size],
		//     ui.value.custom
		//   )
	})
</script>

<template>
	<div class="relative w-fit">
		<select
			:id="name"
			:name="name"
			:value="modelValue"
			:required="required"
			:disabled="disabled"
			:class="selectClass"
			@input="onInput"
		>
			<template
				v-for="(option, index) in normalizedOptionsWithPlaceholder"
				:key="`${option[valueAttribute]}-${index}`"
			>
				<option
					:value="option[valueAttribute]"
					:selected="option[valueAttribute] === normalizedValue"
					:disabled="option.disabled"
					v-text="option[textAttribute]"
				/>
			</template>
		</select>
		<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-8">
			<Icon name="heroicons:chevron-down" class="wh-16 text-gray-400" />
		</div>
	</div>
</template>
