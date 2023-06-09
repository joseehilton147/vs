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
			default: () => appConfig.ui.button.default.icon.loading.icon,
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
			default: () => appConfig.ui.button.default.icon.position,
			validator: value => appConfig.common.icon.position.includes(value),
		},
		iconRotation: {
			type: String,
			default: () => appConfig.ui.button.default.icon.rotation,
			validator: value => appConfig.common.icon.rotation.includes(value),
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
		size: {
			type: String,
			default: () => appConfig.ui.button.default.size,
			validator: value => Object.keys(appConfig.common.size).includes(value),
		},
		variant: {
			type: String,
			default: () => appConfig.ui.button.default.variant,
			validator: value => Object.keys(appConfig.ui.button.variants).includes(value),
		},
		radius: {
			type: String,
			default: () => appConfig.ui.button.default.radius,
			validator: value => Object.keys(appConfig.common.radius).includes(value),
		},
		color: {
			type: String,
			default: () => appConfig.ui.button.default.color,
			validator: value => appConfig.ui.colors.includes(value),
		},
		padding: {
			type: String,
			default: () => appConfig.ui.button.default.padding,
			validator: value => Object.keys(appConfig.common.padding).includes(value),
		},
		ui: {
			type: Object,
			default: () => appConfig.ui.button,
		},
	})

	const ui = computed(() => defu({}, props.ui, appConfig.common, appConfig.ui.button))

	const buttonClass = computed(() => {
		const isBlock = props.block ? ui.value.block : ''
		const variantValue = ui.value.variants[props.variant]?.replace(/\{color\}/g, props.color) || props.variant

		const classes = [
			ui.value.base,
			isBlock,
			ui.value.size[props.size],
			ui.value.radius[props.radius],
			ui.value.padding[props.padding],
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
			<span v-if="label">
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
