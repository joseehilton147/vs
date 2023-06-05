<script setup>
	const props = defineProps({
		value: {
			type: [String, Number, Boolean],
			default: null,
		},
		modelValue: {
			type: [Boolean, Array],
			default: null,
		},
		name: {
			type: String,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		help: {
			type: String,
			default: null,
		},
		label: {
			type: String,
			default: null,
		},
		required: {
			type: Boolean,
			default: false,
		},
	})

	const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

	const isChecked = computed({
		get() {
			return props.modelValue
		},
		set(value) {
			emit('update:modelValue', value)
		},
	})
</script>

<template>
	<div class="relative flex items-start">
		<div class="flex h-20 items-center">
			<input
				:id="name"
				v-model="isChecked"
				:name="name"
				:required="required"
				:value="value"
				:disabled="disabled"
				type="checkbox"
				class="'text-purple-500 wh-16 rounded border-gray-300 bg-white focus:ring-0 focus:ring-transparent focus:ring-offset-transparent focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50"
				@focus="$emit('focus', $event)"
				@blur="$emit('blur', $event)"
			/>
		</div>
		<div v-if="label || $slots.label" class="ml-12 text-sm">
			<label :for="name" class="text-base">
				<slot name="label">{{ label }}</slot>
				<span v-if="required" class="text-red-500">*</span>
			</label>
			<p v-if="help" class="text-sm text-gray-500">
				{{ help }}
			</p>
		</div>
	</div>
</template>
