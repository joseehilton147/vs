<script setup>
	useHead({
		title: 'Página Inicial',
	})
</script>

<template>
	<div class="dark:bg-global-dark-100 rounded-md border bg-white p-4 dark:border-none">
		<h1>{{ $t('introduction.text') }}</h1>
	</div>
</template>
