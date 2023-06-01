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

	watch(isDarkMode, value => {
		if (value) {
			colorMode.preference = 'dark'
		} else {
			colorMode.preference = 'light'
		}
	})

	function setCurrentItem(index) {
		currentItem.value = index
	}

	/**
	 * Credit to [@hooray](https://github.com/hooray)
	 * @see https://github.com/vuejs/vitepress/pull/2347
	 */
	function toggleDark(event) {
		const isAppearanceTransition =
			document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (!isAppearanceTransition) {
			isDarkMode.value = !isDarkMode.value
			return
		}

		const {clientX: x, clientY: y} = event
		const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

		const transition = document.startViewTransition(async () => {
			isDarkMode.value = !isDarkMode.value
			await nextTick()
		})

		transition.ready.then(() => {
			const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
			document.documentElement.animate(
				{
					clipPath: isDarkMode.value ? [...clipPath].reverse() : clipPath,
				},
				{
					duration: 400,
					easing: 'ease-out',
					pseudoElement: isDarkMode.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
				},
			)
		})
	}

	onMounted(() => {
		if (colorMode.preference === 'dark') {
			isDarkMode.value = true
		}
	})
</script>

<template>
	<header class="p-y-4 border-b dark:border-zinc-900">
		<div class="m-y-2 container flex items-center justify-between">
			<div class="bg-primary rounded-md p-2">
				<h1 class="animate-pulse text-4xl text-white">VS</h1>
			</div>
			<div class="flex items-center justify-center">
				<Icon
					:name="isDarkMode ? 'material-symbols:dark-mode-outline' : 'material-symbols:light-mode-outline'"
					class="h-6 w-6 cursor-pointer"
					@click="toggleDark"
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
					:class="`m-b-4 hover:bg-primary-500 block cursor-pointer rounded-sm p-4 text-lg ${
						index === currentItem ? 'bg-primary-600 text-white' : 'dark:bg-global-dark-100 bg-global'
					}`"
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
