<template>
	<div>
		<card-component>
			<template #header>
				<h1 class="text-2xl">Uso</h1>
				<p class="m-y-3">Você pode usar o <code>input-component</code> para renderizar um input básico.</p>
			</template>
			<input-component name="name" appearance="none" />
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">Tamanho</h1>
				<p class="m-y-3">Use o prop <code>size</code> para alterar o tamanho do texto do input.</p>
			</template>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" size="xs" />
					<code>size="xs"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" size="md" />
					<code>size="md"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" size="lg" />
					<code>size="lg"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" size="xl" />
					<code>size="xl"</code>
				</div>
			</div>
		</card-component>

		<card-component class="m-y-8 relative">
			<template #header>
				<h1 class="text-2xl">Icone</h1>
				<p class="m-y-3">
					Use qualquer icone da biblioteca
					<a href="https://icon-sets.iconify.design/" target="_blank">Iconify</a> e use o prop
					<code>icon</code> para definir.
				</p>
				<p>
					Use o prop <code>icon-position</code> para alterar a posição do icone entre <code>left</code> e
					<code>right</code>.
				</p>
				<p class="m-y-3">
					O prop <code>label</code> ou o slot é opcional, então se quiser utilizar o botão apenas como ícone,
					basta remove-los.
				</p>
			</template>
			<div class="m-t-8 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						icon="material-symbols:search"
						placeholder="digite seu nome aqui..."
						appearance="none"
						icon-position="left"
					/>
					<code>icon-position="left"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						icon="material-symbols:search"
						placeholder="digite seu nome aqui..."
						appearance="none"
						icon-position="right"
					/>
					<code>icon-position="right"</code>
				</div>
			</div>
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">Loading</h1>
				<p class="m-y-3">
					Use o prop <code>loading</code> para exibir o icone de loading, é possível usar a posição do ícone
					para alterar onde exibir.
				</p>
			</template>
			<div class="m-t-8 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						loading
						placeholder="digite seu nome aqui..."
						appearance="none"
						icon-position="left"
					/>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						loading
						placeholder="digite seu nome aqui..."
						appearance="none"
						icon-position="right"
					/>
				</div>
			</div>
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">Placeholder</h1>
				<p class="m-y-4">Use o prop <code>placeholder</code> para definir um placeholder para o input.</p>
			</template>
			<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" />
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">Aparência</h1>
				<p class="m-y-3">Use o prop <code>appearance</code> para alterar o estilo do input.</p>
			</template>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="white" />
					<code>appearance="white"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="gray" />
					<code>appearance="gray"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" />
					<code>appearance="none"</code>
				</div>
			</div>
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">Desativado</h1>
				<p class="m-y-3">Use o prop <code>disabled</code> para desativar o input.</p>
			</template>
			<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" disabled />
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">Border radius</h1>
				<p class="m-y-3">Use o prop <code>radius</code> para adicionar curva ao input.</p>
			</template>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						placeholder="digite seu nome aqui..."
						appearance="none"
						radius="none"
					/>
					<code>radius="none"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" radius="sm" />
					<code>radius="sm"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" radius="md" />
					<code>radius="md"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" radius="lg" />
					<code>radius="lg"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component name="name" placeholder="digite seu nome aqui..." appearance="none" radius="xl" />
					<code>radius="xl"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						placeholder="digite seu nome aqui..."
						appearance="none"
						radius="full"
					/>
					<code>radius="full"</code>
				</div>
			</div>
		</card-component>
	</div>
</template>
