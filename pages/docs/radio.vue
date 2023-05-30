<script setup>
	const options = ref([
		{
			label: 'Opção 1',
			value: 'opcao1',
			help: 'Texto de ajuda para a opção 1',
		},
		{
			label: 'Opção 2',
			value: 'opcao2',
			help: 'Texto de ajuda para a opção 2',
		},
		{
			label: 'Opção 3',
			value: 'opcao3',
			help: 'Texto de ajuda para a opção 3',
		},
	])

	const selectedOption = ref(null)
</script>

<template>
	<div>
		<card-component>
			<template #header>
				<h1 class="text-2xl">Propriedades</h1>
				<div class="m-y-24">
					<ol>
						<li><code>value</code>: valor a ser passado, deve ser unico.</li>
						<li class="m-y-12">
							<code>name</code>: nome do input, será vinculado ao id concatenado ao value, deve ser unico.
						</li>
						<li><code>disabled</code>: booleano para desativar um input.</li>
						<li class="m-y-12"><code>help</code>: para adicionar um texto reduzido depois do input.</li>
						<li class="m-y-12"><code>label</code>: texto a ser adicionado ao lado do input.</li>
						<li class="m-y-12"><code>required</code>: para definir se é obrigatório.</li>
						<li class="m-y-12"><code>input-class</code>: para personalizar a classe do input.</li>
						<li class="m-y-12">
							<code>class-checked</code>: para alterar a classe de quando o input for selecionado.
						</li>
						<li class="m-y-12">
							<code>class-unchecked</code>: para alterar a classe de quando o input não estiver
							selecionado.
						</li>
					</ol>
				</div>
			</template>
			<div v-for="(option, index) of options" :key="index" class="m-y-4">
				<radio-component
					v-model="selectedOption"
					:label="option.label"
					:value="option.value"
					:required="true"
					:help="option.help"
					name="option"
					:disabled="index === 1"
				/>
			</div>
			<small class="m-t-12">Opção selecionada: {{ selectedOption }} </small>
		</card-component>
	</div>
</template>
