<script setup>
	const selected = ref(null)
</script>

<template>
	<div>
		<card-component>
			<forms-select-component v-model="selected" name="select" :options="['United States', 'Canada', 'Mexico']" />
			selected: {{ selected }}
		</card-component>
	</div>
</template>
