<script setup>
	const props = defineProps({
		show: {
			type: Boolean,
			required: true,
			default: false,
		},
		title: {
			type: String,
			default: '',
		},
		canClose: {
			type: Boolean,
			default: true,
		},
		wrapperClass: {
			type: String,
			default: 'bg-white',
		},
		headerClass: {
			type: String,
			default: 'p-x-16 p-y-8',
		},
		titleClass: {
			type: String,
			default: 'color-gray-900 text-base font-semibold',
		},
		closeButtonClass: {
			type: String,
			default: 'rounded-full bg-transparent p-8 color-gray-400 hover:bg-gray-200 hover:color-gray-900',
		},
		closeButtonIcon: {
			type: String,
			default: 'ic:sharp-close',
		},
		closeButtonIconClass: {
			type: String,
			default: 'wh-24',
		},
		mainClass: {
			type: String,
			default: 'max-h-50vh p-x-24 p-y-16 overflow-y-auto overflow-x-hidden color-gray-900',
		},
		footerClass: {
			type: String,
			default: 'p-x-24 p-y-16 border-gray-200',
		},
		overlayClass: {
			type: String,
			default: 'bg-black/60',
		},
	})

	const emit = defineEmits(['close'])

	const modal = reactive({
		title: '',
		show: false,
	})

	function toggleModal() {
		if (props.canClose) {
			// document.body.classList.remove('overflow-hidden')

			modal.show = !modal.show
			emit('close', modal.show)
		}
	}

	onMounted(() => {
		// document.body.classList.add('overflow-hidden')

		modal.show = props.show
		modal.title = props.title
	})
</script>

<template>
	<div v-if="modal.show" class="right-50% top-50% translate-x-50% translate-y--50% z-9999 fixed">
		<div :class="['b-rd-8 relative', wrapperClass]">
			<header :class="['b-rd-t-8 flex items-center justify-between border-b', headerClass]">
				<h3 :class="titleClass">
					{{ modal.title }}
				</h3>
				<button v-if="canClose" type="button" :class="['m-l-auto', closeButtonClass]" @click="toggleModal">
					<Icon :name="closeButtonIcon" :class="closeButtonIconClass" />
				</button>
			</header>
			<main :class="mainClass">
				<slot />
			</main>
			<footer :class="['b-rd-b-8 border-t', footerClass]">
				<slot name="footer" />
			</footer>
		</div>
	</div>
	<div v-if="modal.show" :class="['z-9998 fixed inset-0 h-full w-full', overlayClass]" @click="toggleModal" />
</template>
