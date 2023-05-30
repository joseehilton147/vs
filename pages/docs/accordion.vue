<script setup>
	const items = [
		{
			title: 'item 1',
			description: 'descrição 1',
		},
		{
			title: 'item 2',
			icon: 'bx:bx-home',
			description: 'descrição 2',
		},
	]

	useHead({
		title: 'Acordeão',
	})
</script>

<template>
	<div>
		<card-component>
			<template #header>
				<p>Existem as seguintes personalizações:</p>
				<ol class="m-y-24 m-l-12">
					<li>
						<utils-highlight-text-component>title-value</utils-highlight-text-component> Titulo a ser
						exibido.
					</li>
					<li class="m-y-12">
						<utils-highlight-text-component>icon-value</utils-highlight-text-component> Caso opte por usar
						ícone junto ao título.
					</li>
					<li class="m-y-12">
						<utils-highlight-text-component>accordion-class</utils-highlight-text-component> Para
						personalizar como achar melhor.
					</li>
					<li class="m-y-12">
						<utils-highlight-text-component>title-class</utils-highlight-text-component> Para personalizar o
						estilo do titulo, irá sobrescrever o valor padrão.
					</li>
					<li class="m-y-12">
						<utils-highlight-text-component>icon-class</utils-highlight-text-component> Para personalizar o
						estilo do ícone, irá sobrescrever o valor padrão.
					</li>
					<li class="m-y-12">
						<utils-highlight-text-component>arrow-up-icon</utils-highlight-text-component> Para alterar o
						ícone de quando estiver aberto, irá sobrescrever o valor padrão.
					</li>
					<li class="m-y-12">
						<utils-highlight-text-component>arrow-up-down</utils-highlight-text-component> Para alterar o
						ícone de quando estiver fechado, irá sobrescrever o valor padrão.
					</li>
					<li class="m-y-12">
						<utils-highlight-text-component>arrow-class</utils-highlight-text-component> Para personalizar o
						estilo da seta, irá sobrescrever o valor padrão.
					</li>
				</ol>
				<p>Todos os valores são <utils-highlight-text-component>string</utils-highlight-text-component>.</p>
			</template>
			<div class="m-t-32">
				<accordion-component
					v-for="(item, index) of items"
					:key="index"
					:title-value="item.title"
					:icon-value="item.icon"
					accordion-class="m-b-12 b-rd-4 border-1 border-gray-800"
				>
					<p>{{ item.description }}</p>
				</accordion-component>
			</div>
		</card-component>
	</div>
</template>
