<script setup>
	import {defu} from 'defu'
	import {NuxtLink} from '#components'
	import appConfig from '#build/app.config'

	const props = defineProps({
		type: {
			type: String,
			default: 'button',
		},
		label: {
			type: String,
			default: null,
		},
		ariaLabel: {
			type: String,
			default: null,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		loadingIcon: {
			type: String,
			default: () => appConfig.ui.button.icon.loading.icon,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: String,
			default: null,
		},
		iconPosition: {
			type: String,
			default: 'left',
			validator: value => appConfig.ui.button.icon.position.includes(value),
		},
		iconRotation: {
			type: String,
			default: 'rotate-0',
			validator: value => appConfig.ui.button.icon.rotation.includes(value),
		},
		block: {
			type: Boolean,
			default: false,
		},
		to: {
			type: String,
			default: null,
		},
		target: {
			type: String,
			default: null,
		},
		truncate: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: 'md',
			validator: value => Object.keys(appConfig.ui.button.size).includes(value),
		},
		variant: {
			type: String,
			default: 'solid',
			validator: value => Object.keys(appConfig.ui.button.variants).includes(value),
		},
		radius: {
			type: String,
			default: 'sm',
			validator: value => Object.keys(appConfig.ui.button.radius).includes(value),
		},
		color: {
			type: String,
			default: 'primary',
			validator: value => appConfig.ui.colors.includes(value),
		},
		padding: {
			type: String,
			default: 'md',
			validator: value => Object.keys(appConfig.ui.button.padding).includes(value),
		},
		ui: {
			type: Object,
			default: () => appConfig.ui.button,
		},
	})

	const ui = computed(() => defu({}, props.ui, appConfig.ui.button))

	const buttonClass = computed(() => {
		const isBlock = props.block ? ui.value.block : ''
		const variantValue = ui.value.variants[props.variant]?.replace(/\{color\}/g, props.color) || props.variant

		const classes = [
			ui.value.base,
			isBlock,
			ui.value.size[props.size],
			ui.value.padding[props.padding],
			ui.value.radius[props.radius],
			variantValue,
			ui.value.custom,
		]

		return classes.filter(Boolean).join(' ')
	})

	const buttonProps = computed(() => {
		if (props.to) {
			return {to: props.to, target: props.target}
		}

		return {disabled: props.disabled || props.loading, type: props.type}
	})

	const displayIcon = computed(() => {
		const shouldDisplayLeftIcon = props.iconPosition === 'left' && (props.loading || props.icon)
		const shouldDisplayRightIcon = props.iconPosition === 'right' && (props.loading || props.icon)

		return {left: shouldDisplayLeftIcon, right: shouldDisplayRightIcon}
	})
</script>

<template>
	<component :is="to ? NuxtLink : 'button'" :aria-label="ariaLabel" :class="buttonClass" v-bind="buttonProps">
		<Icon
			v-if="displayIcon.left"
			:name="loading ? loadingIcon : icon"
			:class="[ui.icon.base, iconRotation, ui.icon.size[props.size], 'm-r-1']"
			aria-hidden="true"
		/>
		<slot>
			<span v-if="label" :class="[truncate ? 'line-clamp-1 break-all text-left' : '']">
				{{ label }}
			</span>
		</slot>
		<Icon
			v-if="displayIcon.right"
			:name="loading ? loadingIcon : icon"
			:class="[ui.icon.base, iconRotation, ui.icon.size[props.size], 'm-l-1']"
			aria-hidden="true"
		/>
	</component>
</template>
