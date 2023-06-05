<script setup>
	const colorMode = useColorMode()

	const currentItem = ref(0)
	const isDarkMode = ref(false)

	const {t} = useI18n()

	const menuItems = reactive([
		{
			title: t('introduction.title'),
			link: '/',
		},
		{
			title: t('input.title'),
			link: '/docs/input-component',
		},
		{
			title: 'Select',
			link: '/docs/select-component',
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

	const {locale} = useI18n()

	const languages = ref([
		{
			value: 'en',
			text: 'English',
		},
		{
			value: 'br',
			text: 'Português',
		},
	])

	onMounted(() => {
		if (colorMode.preference === 'dark') {
			isDarkMode.value = true
		}
	})
</script>

<template>
	<header class="p-y-4 border-b bg-white dark:border-zinc-900 dark:bg-neutral-900">
		<div class="m-y-2 container flex items-center justify-between">
			<div class="bg-primary rounded-md p-2">
				<h1 class="animate-pulse text-4xl text-white">VS</h1>
			</div>
			<div class="flex items-center justify-center gap-6">
				<select-component v-model="locale" name="select" :options="languages" />
				<button-component
					icon="mdi:github"
					to="https://github.com/joseehilton147/vs"
					target="_blank"
					variant="icon"
				/>
				<button-component
					:icon="isDarkMode ? 'material-symbols:dark-mode-outline' : 'material-symbols:light-mode-outline'"
					variant="icon"
					@click="toggleDark"
				/>
			</div>
		</div>
	</header>
	<div class="m-y-8 container">
		<div class="grid grid-cols-12 gap-4">
			<aside class="col-start-1 col-end-4 h-fit rounded-md bg-white shadow-sm dark:bg-neutral-900">
				<nuxt-link
					v-for="(item, index) of menuItems"
					:key="item.title"
					:to="item.link"
					:class="`m-b-2 hover:bg-primary-500 hover:dark:bg-primary-500 block cursor-pointer rounded-sm p-4 text-lg ${
						index === currentItem ? 'bg-primary-600 text-white' : 'bg-white dark:bg-neutral-900'
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
