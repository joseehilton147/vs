<script setup>
	import {Switch} from '@headlessui/vue'

	defineEmits({
		name: {
			type: String,
			default: null,
		},
		modelValue: {
			type: Boolean,
			default: false,
		},
		iconOn: {
			type: String,
			default: () => useAppConfig().ui.toggle.default.iconOn,
		},
		iconOff: {
			type: String,
			default: () => useAppConfig().ui.toggle.default.iconOff,
		},
		ui: {
			type: Object,
			default: () => useAppConfig().ui.toggle,
		},
	})

	// const active = computed({
	// 	get() {
	// 		return props.modelValue
	// 	},
	// 	set(value) {
	// 		emit('update:modelValue', value)
	// 	},
	// })
</script>

<template>
	<!-- ui: {{ ui }} -->
	<!-- <Switch v-model="active" :name="name" :class="[active ? ui.active : ui.inactive, ui.base]">
		<span :class="[active ? ui.container.active : ui.container.inactive, ui.container.base]">
			<span v-if="iconOn" :class="[active ? ui.icon.active : ui.icon.inactive, ui.icon.base]" aria-hidden="true">
				<Icon :name="iconOn" :class="ui.icon.on" />
			</span>
			<span v-if="iconOff" :class="[active ? ui.icon.inactive : ui.icon.active, ui.icon.base]" aria-hidden="true">
				<Icon :name="iconOff" :class="ui.icon.off" />
			</span>
		</span>
	</Switch> -->
	<Switch
		v-model="enabled"
		:class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
		class="relative inline-flex h-24 w-44 items-center rounded-full"
	>
		<span class="sr-only">Enable notifications</span>
		<span
			:class="enabled ? 'translate-x-24' : 'translate-x-4'"
			class="wh-24 inline-block transform rounded-full bg-white transition"
		/>
	</Switch>
</template>
