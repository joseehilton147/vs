<script setup>
	const props = defineProps({
		modelValue: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		options: {
			type: Array,
			required: true,
			default: () => [],
		},
	})

	const isOpen = ref(false)
	const formattedOptions = ref([])

	const emit = defineEmits(['update:modelValue'])

	const selectedOptionText = computed(() => {
		const selectedOption = formattedOptions.value.find(option => option.value === props.modelValue)
		return selectedOption ? selectedOption.text : props.placeholder
	})

	function handleClick(option) {
		emit('update:modelValue', option)
		isOpen.value = false
	}

	function handleClickOutside(e) {
		if (!e.target.closest('.relative')) {
			isOpen.value = false
		}
	}

	onMounted(() => {
		document.addEventListener('click', handleClickOutside)

		if (Array.isArray(props.options)) {
			formattedOptions.value = props.options.map(option =>
				typeof option === 'string' ? {value: option, text: option} : option,
			)
		} else {
			formattedOptions.value = Object.entries(props.options).map(([value, text]) => ({value, text}))
		}
	})

	onUnmounted(() => {
		document.removeEventListener('click', handleClickOutside)
	})
</script>

<template>
	<div class="relative">
		<div
			:class="[
				'min-w-30 flex cursor-pointer items-center justify-between bg-gray-100 p-2  dark:bg-neutral-800',
				{'pointer-events-none bg-gray-300/50 dark:bg-neutral-800/50': disabled},
			]"
			@click="isOpen = !isOpen"
		>
			<p :class="[{'color-neutral-400': disabled}]">{{ selectedOptionText }}</p>
			<Icon :name="isOpen ? 'bx:chevron-up' : 'bx:chevron-down'" class="h-6 w-6" />
		</div>
		<transition name="fade">
			<div v-if="isOpen" class="m-t-4 absolute max-h-40 w-full overflow-auto bg-white shadow dark:bg-neutral-800">
				<div
					v-for="(option, index) in formattedOptions"
					:key="index"
					class="p-x-4 p-y-2 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 dark:hover:bg-neutral-700"
					@click="handleClick(option.value)"
				>
					<h2 class="w-full" v-text="option.text" />
				</div>
			</div>
		</transition>
	</div>
</template>
