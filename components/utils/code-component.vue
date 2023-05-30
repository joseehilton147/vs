<script setup>
	const toast = useToast()
	const codeElement = ref(null)

	function doCopy() {
		navigator.clipboard.writeText(codeElement.value.innerText)

		toast.success('Copiado para a área de transferência')
	}
</script>

<template>
	<div class="color-slate-300 b-rd-4 flex items-center justify-between bg-neutral-800 p-8 transition">
		<code ref="codeElement">
			<slot />
		</code>
		<button-component btn-variant="icon" btn-class="p-r-8 text-24" @click="doCopy">
			<Icon name="bx:copy" />
		</button-component>
	</div>
</template>
