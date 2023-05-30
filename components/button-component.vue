<script setup>
	import {NuxtLink} from '#components'

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
			default: 'line-md:loading-twotone-loop',
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
			validator: value => ['left', 'right'].includes(value),
		},
		iconRotation: {
			type: String,
			default: 'rotate-0',
			validator: value =>
				['rotate-0', 'rotate-45', 'rotate-90', 'rotate-180', 'rotate-270', 'rotate-360'].includes(value),
		},
		iconSize: {
			type: String,
			default: 'wh-24',
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
		textSize: {
			type: String,
			default: 'md',
			validator: value => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(value),
		},
		btnClass: {
			type: String,
			default: null,
		},
		additionalClass: {
			type: String,
			default: '',
		},
		variant: {
			type: String,
			default: 'solid',
			validator: value => ['solid', 'outline', 'soft', 'ghost', 'link', 'icon'].includes(value),
		},
		customColor: {
			type: String,
			default: '',
		},
		radius: {
			type: String,
			default: 'xs',
			validator: value => ['disabled', 'xs', 'sm', 'md', 'lg', 'xl', 'full'].includes(value),
		},
		gap: {
			type: String,
			default: 'sm',
			validator: value => ['disabled', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value),
		},
		color: {
			type: String,
			default: 'primary',
			validator: value =>
				['primary', 'secondary', 'red', 'green', 'yellow', 'gray', 'cyan', 'blue'].includes(value),
		},
	})

	const variants = useVariants()

	const buttonClass = computed(() => {
		const defaultBtn = `focus:outline-none focus-visible:outline-0 disabled:opacity-50 disabled:pointer-events-none flex-shrink-0 transition duration-400 ease-in-out ${
			props.radius === 'full' ? 'p-x-8 p-y-8' : 'p-x-16 p-y-8'
		}`

		const isBlock = props.block
			? 'w-full flex justify-center items-center'
			: 'inline-flex items-center justify-center'

		const style = props.customColor ? props.customColor : variants[props.variant][props.color]

		const radius = props.radius !== 'disabled' ? radiusSizes[props.radius] : ''

		const gap = props.gap !== 'disabled' ? gapSizes[props.gap] : ''

		const textSize = textSizes[props.textSize]

		return `${gap} ${textSize} ${radius} ${defaultBtn} ${isBlock} ${props.btnClass} ${style}`
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

	const textSizes = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
	}

	const gapSizes = {
		xs: 'gap-x-2',
		sm: 'gap-x-4',
		md: 'gap-x-6',
		lg: 'gap-x-8',
		xl: 'gap-x-10',
	}

	const radiusSizes = {
		xs: 'rounded-2',
		sm: 'rounded-4',
		md: 'rounded-8',
		lg: 'rounded-12',
		xl: 'rounded-16',
		full: 'rounded-full',
	}
</script>

<template>
	<component
		:is="to ? NuxtLink : 'button'"
		:aria-label="ariaLabel"
		:class="[buttonClass, additionalClass]"
		v-bind="buttonProps"
	>
		<Icon
			v-if="displayIcon.left"
			:name="loading ? loadingIcon : icon"
			:class="['flex-shrink-0', iconRotation, iconSize]"
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
			:class="['flex-shrink-0', iconRotation, iconSize]"
			aria-hidden="true"
		/>
	</component>
</template>
