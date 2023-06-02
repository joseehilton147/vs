<script setup>
	const slots = useSlots()
</script>

<template>
	<div class="rounded-md bg-white shadow-sm dark:bg-neutral-900">
		<header v-if="slots?.header" class="p-x-4 p-t-4 border-b">
			<slot name="header" />
		</header>
		<main class="p-4">
			<slot />
		</main>
		<footer v-if="slots?.footer" class="p-x-4 p-b-4 border-t">
			<slot name="footer" />
		</footer>
	</div>
</template>
