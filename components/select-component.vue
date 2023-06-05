<script setup>
	import {defu} from 'defu'
	import appConfig from '#build/app.config'

	const emit = defineEmits(['update:modelValue'])

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
		iconOpen: {
			type: String,
			default: appConfig.ui.select.icons.open,
		},
		iconClosed: {
			type: String,
			default: appConfig.ui.select.icons.closed,
		},
		search: {
			type: Boolean,
			default: false,
		},
		options: {
			type: Array,
			required: true,
			default: () => [],
		},
		variant: {
			type: String,
			default: 'solid',
			validator: value => ['outline', 'solid'].includes(value),
		},
		ui: {
			type: Object,
			default: () => appConfig.ui.select,
		},
	})

	const ui = computed(() => defu({}, props.ui, appConfig.ui.select))

	const isOpen = ref(false)
	const formattedOptions = ref([])
	const searchedValue = ref('')

	const selectClass = computed(() => {
		const classes = [ui.value.base, ui.value.variants[props.variant]]

		if (props.disabled) {
			classes.push(ui.value.disabled)
		}

		return classes.join(' ')
	})

	const selectedOptionText = computed(() => {
		const selectedOption = formattedOptions.value.find(option => option.value === props.modelValue)

		return selectedOption ? selectedOption.text : props.placeholder
	})

	const filteredOptions = computed(() => {
		if (!props.search) {
			return formattedOptions.value
		}

		return formattedOptions.value.filter(option => {
			const regex = new RegExp(searchedValue.value, 'i')
			return regex.test(option.text)
		})
	})

	function handleClick(option) {
		emit('update:modelValue', option)

		isOpen.value = false
		searchedValue.value = ''
	}

	function handleClickOutside(e) {
		if (!e.target.closest('.relative')) {
			isOpen.value = false
			searchedValue.value = ''
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
	<div :class="ui.wrapper">
		<div :class="selectClass" @click="isOpen = !isOpen">
			<p :class="[{'color-neutral-400': disabled}]">{{ selectedOptionText }}</p>
			<Icon :name="isOpen ? iconOpen : iconClosed" class="h-6 w-6" />
		</div>
		<transition name="fade">
			<div v-if="isOpen" :class="ui.options.base">
				<div v-if="search" class="p-x-2 p-y-3 flex items-center bg-gray-200">
					<Icon name="bx:search" :class="ui.options.search.icon" />
					<input
						v-model="searchedValue"
						:name="`${name}-search`"
						:class="ui.options.search.input"
						:placeholder="$t('select.search.placeholder')"
					/>
				</div>
				<div v-if="filteredOptions.length === 0" :class="ui.options.search.empty">No items to display.</div>
				<div v-else>
					<div
						v-for="(option, index) in filteredOptions"
						:key="`${name}-${index}`"
						:class="ui.options.item"
						@click="handleClick(option.value)"
					>
						<h2 class="w-full" v-text="option.text" />
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
