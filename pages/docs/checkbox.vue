<template>
	<div>
		<card-component>
			<template #header>
				<h1 class="text-2xl">Uso</h1>
				<p class="m-y-12">
					Você pode usar o <code>checkbox-component</code> para renderizar um checkbox básico.
				</p>
			</template>
			<checkbox-component />
		</card-component>

		<card-component class="m-y-32">
			<template #header>
				<h1 class="text-2xl">Label</h1>
				<p class="m-y-12">Use o prop <code>label</code> para exibir uma label a direita.</p>
			</template>
			<checkbox-component label="exemplo" />
		</card-component>

		<card-component class="m-y-32">
			<template #header>
				<h1 class="text-2xl">Required</h1>
				<p class="m-y-12">Use o prop <code>required</code> para torna-lo obrigatório.</p>
			</template>
			<checkbox-component label="exemplo" required />
		</card-component>

		<card-component class="m-y-32">
			<template #header>
				<h1 class="text-2xl">Disabled</h1>
				<p class="m-y-12">Use o prop <code>disabled</code> para desativar o checkbox.</p>
			</template>
			<checkbox-component label="exemplo" disabled />
		</card-component>

		<card-component class="m-y-32">
			<template #header>
				<h1 class="text-2xl">Texto complementar</h1>
				<p class="m-y-12">Use o prop <code>help</code> para exibir um texto informatico abaixo do checkbox.</p>
			</template>
			<checkbox-component label="exemplo" help="Marque a caixa por favor" />
		</card-component>
	</div>
</template>
