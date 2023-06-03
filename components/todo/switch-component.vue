<script setup>
	import {Switch} from '@headlessui/vue'

	const props = defineProps({
		name: {
			type: String,
			default: null,
		},
		modelValue: {
			type: Boolean,
			default: false,
		},
		onIcon: {
			type: String,
			default: () => useAppConfig().ui.toggle.default.onIcon,
		},
		offIcon: {
			type: String,
			default: () => useAppConfig().ui.toggle.default.offIcon,
		},
	})

	const emit = defineEmits(['update:modelValue'])

	const ui = useAppConfig().ui.toggle

	const active = computed({
		get() {
			return props.modelValue
		},
		set(value) {
			emit('update:modelValue', value)
		},
	})
</script>

<template>
	<Switch v-model="active" :name="name" :class="[active ? ui.active : ui.inactive, ui.base]">
		<span :class="[active ? ui.container.active : ui.container.inactive, ui.container.base]">
			<span v-if="onIcon" :class="[active ? ui.icon.active : ui.icon.inactive, ui.icon.base]" aria-hidden="true">
				<Icon :name="onIcon" :class="ui.icon.on" />
			</span>
			<span v-if="offIcon" :class="[active ? ui.icon.inactive : ui.icon.active, ui.icon.base]" aria-hidden="true">
				<Icon :name="offIcon" :class="ui.icon.off" />
			</span>
		</span>
	</Switch>
</template>
