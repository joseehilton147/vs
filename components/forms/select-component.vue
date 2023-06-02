<script setup>
	import {defu} from 'defu'

	const props = defineProps({
		modelValue: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			required: true,
		},
		required: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: null,
		},
		options: {
			type: [Array, Object],
			required: true,
		},
		size: {
			type: String,
			default: 'md',
			validator: value => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
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
		ui: {
			type: Object,
			default: () => useAppConfig().ui.select,
		},
	})

	const ui = computed(() => defu({}, props.ui, useAppConfig().ui.select))

	const emit = defineEmits(['update:modelValue'])

	const formattedOptions = ref([])

	const selectClass = computed(() => {
		const classes = [
			ui.value.base,
			ui.value.variant[props.variant],
			ui.value.size[props.size],
			ui.value.radius[props.radius],
			ui.value.custom,
		]

		if (props.padded) {
			classes.push(ui.value.padding[props.size])
		}

		return classes.join(' ')
	})

	onMounted(() => {
		if (Array.isArray(props.options)) {
			formattedOptions.value = props.options.map(option =>
				typeof option === 'string' ? {value: option, text: option} : option,
			)
		} else {
			formattedOptions.value = Object.entries(props.options).map(([value, text]) => ({value, text}))
		}
	})

	function onInput(event) {
		emit('update:modelValue', event.target.value)
	}
</script>

<template>
	<div :class="ui.wrapper">
		<select
			:id="name"
			:name="name"
			:title="name"
			:value="modelValue"
			:required="required"
			:disabled="disabled || loading"
			:class="selectClass"
			@input="onInput"
		>
			<option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
			<option
				v-for="(option, index) in formattedOptions"
				:key="`${option.value}-${index}`"
				:value="option.value"
				v-text="option.text"
			/>
		</select>
	</div>
</template>

<style>
	select {
		-o-appearance: none;
		-ms-appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
</style>
