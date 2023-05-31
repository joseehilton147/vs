<script setup>
	const slots = useSlots()
</script>

<template>
	<div class="bg-global-dark-100 rounded-md p-4">
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
