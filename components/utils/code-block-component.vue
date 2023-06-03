<template>
	<client-only>
		<div class="relative mt-4">
			<pre ref="preNode" class="language-javascript">
				<!-- eslint-disable vue/no-v-html -->
				<code v-html="highlightedCode"></code>
			</pre>
			<button-component
				additional-class="absolute right-2 top-2"
				variant="icon"
				icon="material-symbols:content-copy-outline"
				@click="copyCode"
			/>
		</div>
	</client-only>
</template>

<script setup>
	import Prism from 'prismjs'
	import {useToast} from 'vue-toastification'

	const toast = useToast()
	const {t} = useI18n()

	const props = defineProps({
		source: {
			type: String,
			default: '',
		},
	})

	const preNode = ref(null)

	const highlightedCode = computed(() => {
		return Prism.highlight(props.source, Prism.languages.javascript)
	})

	function copyCode() {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(props.source)
		} else {
			const textarea = document.createElement('textarea')
			document.body.appendChild(textarea)

			textarea.style.position = 'fixed'
			textarea.style.clipPath = 'circle(0)'
			textarea.style.top = '10px'

			textarea.value = props.source
			textarea.select()
			document.execCommand('copy', true)

			document.body.removeChild(textarea)
		}

		toast.success(t('global.copyCode'))
	}
</script>
