<script setup>
	const mode = ref(false)
</script>

<template>
	<div>
		<card-component>
			<switch-component
				v-model="mode"
				on-icon="material-symbols:dark-mode-outline"
				off-icon="material-symbols:light-mode-outline"
			/>
			mode: {{ mode }}
		</card-component>
	</div>
</template>
