<script setup>
	defineProps({
		title: {
			type: String,
			default: '',
		},
	})

	const slots = useSlots()
</script>

<template>
	<div class="rounded-md bg-white shadow-sm dark:bg-neutral-900">
		<header v-if="slots?.header" class="p-x-4 p-y-4 dark:border-color-neutral-800 border-b">
			<h1 class="m-b-4 fw-600 color-gray-600 dark:color-slate-200 text-2xl">{{ title }}</h1>
			<slot name="header" />
		</header>
		<main class="p-4">
			<slot />
		</main>
		<footer v-if="slots?.footer" class="p-x-4 p-y-4 dark:border-color-neutral-800 border-t">
			<slot name="footer" />
		</footer>
	</div>
</template>
