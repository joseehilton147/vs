<script setup>
	const currentItem = ref(0)
	const menuItems = reactive([
		{
			title: 'Introdução',
			link: '/',
		},
		{
			title: 'Acordeão',
			link: '/docs/accordion',
		},
		{
			title: 'Botão',
			link: '/docs/button',
		},
		{
			title: 'Modal',
			link: '/docs/modal',
		},
		{
			title: 'Radio',
			link: '/docs/radio',
		},
		{
			title: 'Input',
			link: '/docs/input',
		},
		{
			title: 'Checkbox',
			link: '/docs/checkbox',
		},
		{
			title: 'Select',
			link: '/docs/select',
		},
	])

	function setCurrentItem(index) {
		currentItem.value = index
	}

	// const colorMode = useColorMode()

	// const selectedMode = ref(null)
</script>

<template>
	<header class="border-b border-zinc-900">
		<div class="m-y-32 container flex items-center justify-between">
			<div>
				<h1>VS</h1>
			</div>
			<div class="flex items-center justify-center">
				<!-- <switch-component v-model="selectedMode" name="color-mode" /> -->
				<!-- <forms-select-component
					v-model="colorMode.preference"
					name="color-mode"
					:options="['system', 'light', 'dark']"
				/> -->
				<button-component
					to="https://github.com/joseehilton147/nuxt3-starter-template"
					target="_blank"
					icon="mdi:github"
					variant="icon"
				/>
			</div>
		</div>
	</header>
	<div class="m-y-32 container">
		<div class="grid grid-cols-12 gap-16">
			<aside class="col-start-1 col-end-4">
				<nuxt-link
					v-for="(item, index) of menuItems"
					:key="item.title"
					:to="item.link"
					:class="[
						'm-b-16 b-rd-4 bg-global dark:bg-global-dark-100 hover:bg-primary-500 block cursor-pointer p-16 text-lg',
						{
							'bg-primary-600': index === currentItem,
						},
					]"
					@click="setCurrentItem(index)"
				>
					{{ item.title }}
				</nuxt-link>
			</aside>
			<main class="col-start-4 col-end-12">
				<slot />
			</main>
		</div>
	</div>
</template>
