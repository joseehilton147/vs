<script setup>
	const slots = useSlots()
</script>

<template>
	<div class="rounded-md border p-4 dark:border-none dark:bg-neutral-900">
		<header v-if="slots?.header">
			<slot name="header" />
		</header>
		<main>
			<slot />
		</main>
		<footer v-if="slots?.footer">
			<slot name="footer" />
		</footer>
	</div>
</template>
