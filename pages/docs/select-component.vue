<script setup>
	const fruits = ref([
		{
			value: 'banana',
			text: 'Banana',
		},
		{
			value: 'apple',
			text: 'Apple',
		},
		{
			value: 'orange',
			text: 'Orange',
		},
		{
			value: 'grape',
			text: 'Grape',
		},
		{
			value: 'pear',
			text: 'Pear',
		},
	])

	const selectedFruit = ref(null)
	const selectedSearchedFruit = ref(null)
</script>

<template>
	<div>
		<utils-card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">{{ $t('select.introduction.title') }}</h1>
				<i18n-t keypath="select.introduction.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('select.introduction.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<template #default>
				<select-component
					v-model="selectedFruit"
					name="select-introduction"
					:options="fruits"
					:placeholder="$t('select.defaultPlaceholder')"
				/>
			</template>
			<template #footer>
				<utils-code-block-component
					source="<select-component :options=['banana', 'apple', 'orange', 'grape', 'pear'] />"
				></utils-code-block-component>
			</template>
		</utils-card-component>

		<utils-card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">{{ $t('select.search.title') }}</h1>
				<i18n-t keypath="select.search.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('select.search.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<template #default>
				<select-component
					v-model="selectedSearchedFruit"
					name="select-search"
					search
					:options="fruits"
					:placeholder="$t('select.defaultPlaceholder')"
				/>
			</template>
			<template #footer>
				<utils-code-block-component source="<select-component search />"></utils-code-block-component>
			</template>
		</utils-card-component>
	</div>
</template>
