<script setup>
	defineProps({
		titleValue: {
			type: String,
			default: '',
		},
		iconValue: {
			type: String,
			default: '',
		},
		accordionClass: {
			type: String,
			default: '',
		},
		titleClass: {
			type: String,
			default: '',
		},
		iconClass: {
			type: String,
			default: '',
		},
		arrowUpIcon: {
			type: String,
			default: 'ic:outline-keyboard-arrow-up',
		},
		arrowDownIcon: {
			type: String,
			default: 'ic:outline-keyboard-arrow-down',
		},
		arrowClass: {
			type: String,
			default: '',
		},
	})

	const slots = useSlots()

	const isOpen = ref(false)
</script>

<template>
	<div class="h-fit p-16" :class="accordionClass">
		<header>
			<div class="flex cursor-pointer items-center justify-between gap-8" @click="isOpen = !isOpen">
				<div class="flex">
					<Icon v-if="iconValue" :name="iconValue" class="m-r-8" :class="iconClass ? iconClass : 'wh-24'" />
					<h1 :class="titleClass ?? 'text-lg'">{{ titleValue }}</h1>
				</div>

				<Icon :name="isOpen ? arrowUpIcon : arrowDownIcon" :class="arrowClass ? arrowClass : 'wh-32'" />
			</div>
		</header>
		<transition v-show="isOpen" name="fade" class="m-t-16">
			<slot />
		</transition>
		<footer v-if="slots?.footer">
			<slot name="footer" />
		</footer>
	</div>
</template>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.2s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
