<script setup>
	const colorMode = useColorMode()

	const currentItem = ref(0)
	const isDarkMode = ref(false)

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
		{
			title: 'Switch',
			link: '/docs/switch',
		},
	])

	function setCurrentItem(index) {
		currentItem.value = index
	}

	watch(isDarkMode, value => {
		if (value) {
			colorMode.preference = 'dark'
		} else {
			colorMode.preference = 'light'
		}
	})

	onMounted(() => {
		if (colorMode.preference === 'dark') {
			isDarkMode.value = true
		}
	})
</script>

<template>
	<header class="border-b dark:border-zinc-900">
		<div class="m-y-2 container flex items-center justify-between">
			<div>
				<h1 class="text-xl">VS</h1>
			</div>
			<div class="flex items-center justify-center">
				<switch-component
					v-model="isDarkMode"
					on-icon="material-symbols:dark-mode-outline"
					off-icon="material-symbols:light-mode-outline"
				/>
				<button-component
					to="https://github.com/joseehilton147/nuxt3-starter-template"
					target="_blank"
					icon="mdi:github"
					variant="icon"
				/>
			</div>
		</div>
	</header>
	<div class="m-y-8 container">
		<div class="grid grid-cols-12 gap-4">
			<aside class="col-start-1 col-end-4">
				<nuxt-link
					v-for="(item, index) of menuItems"
					:key="item.title"
					:to="item.link"
					:class="[
						'm-b-4 bg-global dark:bg-global-dark-100 hover:bg-primary-500 block cursor-pointer rounded-sm p-4 text-lg',
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
