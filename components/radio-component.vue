<script setup>
	const props = defineProps({
		value: {
			type: [String, Number, Boolean],
			default: null,
		},
		modelValue: {
			type: [String, Number, Boolean, Object],
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
		inputClass: {
			type: String,
			default: 'wh-16 rounded-full border',
		},
		classChecked: {
			type: String,
			default: 'bg-primary-500',
		},
		classUnchecked: {
			type: String,
			default: 'border-gray-300 bg-transparent',
		},
	})

	const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

	const isChecked = computed(() => {
		return props.modelValue === props.value
	})

	function updateValue(event) {
		emit('update:modelValue', event.target.value)
	}

	function handleClick() {
		const input = document.getElementById(`${props.name}-${props.value}`)
		input.checked = true
		emit('update:modelValue', input.value)
	}
</script>

<template>
	<div
		:class="['relative flex cursor-pointer items-center', disabled ? 'pointer-events-none' : '']"
		@click="handleClick"
	>
		<div class="flex items-center">
			<input
				:id="`${name}-${value}`"
				class="display-none"
				:checked="isChecked"
				:name="name"
				:required="required"
				:value="value"
				:disabled="disabled"
				type="radio"
				@change="updateValue($event)"
			/>
			<div :class="[inputClass, isChecked ? classChecked : classUnchecked, disabled ? 'opacity-30' : '']"></div>
		</div>
		<div v-if="label || $slots.label" :class="['ml-12 text-base', disabled ? 'opacity-30' : '']">
			<label :for="`${name}-${value}`">
				<slot name="label">{{ label }}</slot>
				<span v-if="required" class="text-red-500">*</span>
			</label>
			<p v-if="help" class="text-gray-500">
				{{ help }}
			</p>
		</div>
	</div>
</template>
