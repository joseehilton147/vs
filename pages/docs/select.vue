<script setup>
	const fruits = ref([
		{
			value: 'banana',
			text: 'Banana',
		},
		{
			value: 'apple',
			text: 'Maça',
		},
		{
			value: 'orange',
			text: 'Laranja',
		},
		{
			value: 'grape',
			text: 'Uva',
		},
		{
			value: 'pear',
			text: 'Pera',
		},
	])

	const selectedFruit = ref(null)
</script>

<template>
	<div>
		<utils-card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">How to use</h1>
			</template>
			<template #default>
				<select-component-two
					v-model="selectedFruit"
					name="select"
					:options="fruits"
					placeholder="Select a option..."
				/>
			</template>
		</utils-card-component>
	</div>
</template>
