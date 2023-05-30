<script setup>
	const display = reactive({
		modalExample: false,
	})
</script>

<template>
	<div>
		<card-component>
			<template #header>
				<h1 class="text-2xl">Propriedades</h1>
				<div class="m-y-32">
					<ol>
						<li><code>show</code>: booleano para exibição do modal.</li>
						<li class="m-t-16"><code>title</code>: string para ser o titulo do modal, header.</li>
						<li class="m-t-16"><code>can-close</code>: booleano para deixar o modal fechar.</li>
						<li class="m-t-16">
							<code>wrapper-class</code>: personalizar div que está envolta do modal por completo.
						</li>
						<li class="m-t-16"><code>header-class</code>: personalizar div do header do modal.</li>
						<li class="m-t-16"><code>title-class</code>: personalizar titulo do header do modal.</li>
						<li class="m-t-16">
							<code>close-button-class</code>: personalizar botão fechar do header do modal.
						</li>
						<li class="m-t-16">
							<code>close-button-icon</code>: personalizar icone do botão fechar do header do modal, pode
							ser substituido por qualquer icone do
							<a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a>.
						</li>
						<li class="m-t-16">
							<code>close-button-icon-class</code>: personalizar o icone do botão fechar do header do
							modal.
						</li>
						<li class="m-t-16"><code>main-class</code>: personalizar o corpo do modal.</li>
						<li class="m-t-16"><code>footer-class</code>: personalizar o rodapé do modal.</li>
						<li class="m-t-16"><code>overlay-class</code>: personalizar o overlay do modal.</li>
					</ol>
				</div>
			</template>
			<button-component label="Abrir modal de exemplo" @click="display.modalExample = !display.modalExample" />
		</card-component>
		<modal-component
			v-if="display.modalExample"
			:show="display.modalExample"
			title="Pagamento realizado com sucesso"
			@close="value => (display.modalExample = value)"
		>
			<template #default>
				<p>Seu pagamento foi enviado com sucesso. Enviamos um e-mail com todos os detalhes do seu pedido.</p>
			</template>
			<template #footer>
				<div class="flex items-center justify-end gap-16">
					<button-component
						color="red"
						label="Fechar"
						@click="display.modalExample = !display.modalExample"
					/>
					<button-component
						color="gray"
						label="Ok, entendi!"
						@click="display.modalExample = !display.modalExample"
					/>
				</div>
			</template>
		</modal-component>
	</div>
</template>
