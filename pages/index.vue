<script setup>
	useHead({
		title: 'Introduction',
	})
</script>

<template>
	<docs-card title="Introduction">
		<template #header>
			<p>
				First of all, we have to say thank you to <a href="https://nuxt.com" target="_blank">Nuxt</a> devs, who
				create this beatiful library called <a href="https://ui.nuxtlabs.com/" target="_blank">Nuxt UI</a>,
				making easier to structure and understand some key points on making a component library to Nuxt
				framework.
			</p>
			<p class="m-t-4">
				While Nuxt UI use <a href="https://tailwindcss.com/" target="_blank">tailwind</a> we choose to use
				<a href="https://unocss.dev/" target="_blank">UnoCSS</a>, check the docs to know more and understand
				differences between them.
			</p>
		</template>

		<template #footer>
			<small>
				All classes are defined in the default <code>app.config</code> file, you can override them using your
				own file, but keeping the same structure.
			</small>
		</template>
	</docs-card>
	<docs-card title="Dark Mode" class="m-y-8">
		<template #default>
			<p>
				All components are dark mode friendly, you only need to configure on your side, i recommend to check the
				<a href="https://github.com/nuxt-modules/color-mode" target="_blank">@nuxtjs/color-mode </a>.
			</p>
		</template>
	</docs-card>
	<docs-card title="Components" class="m-y-8">
		<template #header>
			<p>
				Each component has a <code>ui</code> prop to allow you to customize each component individually, you can
				change any value of the default preset.
			</p>
		</template>
		<template #default>
			<docs-code-block source="<VSButton ui='{ icon: { size: { xs: 'h-2 w-2' } } }' />"></docs-code-block>
		</template>
		<template #footer>
			<p>You can find the default preset for each component under the Preset section.</p>
		</template>
	</docs-card>
	<docs-card title="Global Presets">
		<template #header>
			<p>
				To avoid repeat same syntax accross the <code>app.config.js</code> we share some values multiple times,
				they are:
			</p>
			<ol class="m-t-4">
				<li>- Radius</li>
				<li>- Size</li>
				<li>- Padding</li>
				<li>- Icon</li>
			</ol>
		</template>
		<template #default>
			<docs-code-block
				source="
const radius = {
	none: 'rounded-none',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full',
}

const size = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
}

const padding = {
	none: 'p-x-0 p-y-0',
	xs: 'p-x-1 p-y-0.5',
	sm: 'p-x-2 p-y-1',
	md: 'p-x-3 p-y-2',
	lg: 'p-x-4 p-y-3',
	xl: 'p-x-5 p-y-4',
}

const icon = {
	base: 'flex-shrink-0',
	size: {
		xs: 'h-3.5 w-3.5',
		sm: 'h-4 w-4',
		md: 'h-4.5 w-4.5',
		lg: 'h-5 w-5',
		xl: 'h-6 w-6',
	},
	rotation: ['rotate-0', 'rotate-45', 'rotate-90', 'rotate-180', 'rotate-270', 'rotate-360'],
	position: ['left', 'right'],
}"
			></docs-code-block>
		</template>
	</docs-card>
</template>
