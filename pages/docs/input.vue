<template>
	<div>
		<card-component>
			<template #header>
				<h1 class="text-2xl">{{ $t('input.default.title') }}</h1>
				<i18n-t keypath="input.default.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.default.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<input-component name="name" appearance="none" />
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">{{ $t('input.sizing.title') }}</h1>
				<i18n-t keypath="input.sizing.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.sizing.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						size="xs"
					/>
					<code>size="xs"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						size="md"
					/>
					<code>size="md"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						size="lg"
					/>
					<code>size="lg"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						size="xl"
					/>
					<code>size="xl"</code>
				</div>
			</div>
		</card-component>

		<card-component class="m-y-8 relative">
			<template #header>
				<h1 class="text-2xl">{{ $t('input.icon.title') }}</h1>
				<i18n-t keypath="input.icon.text.one.value" tag="p" class="m-y-3" scope="global">
					<template #link>
						<a href="https://icon-sets.iconify.design/" target="_blank">{{
							$t('input.icon.text.one.link')
						}}</a>
					</template>
					<template #code>
						<code>{{ $t('input.icon.text.one.code') }}</code>
					</template>
				</i18n-t>
				<i18n-t keypath="input.icon.text.two.value" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.icon.text.two.code') }}</code>
					</template>
					<template #code2>
						<code>{{ $t('input.icon.text.two.code2') }}</code>
					</template>
					<template #code3>
						<code>{{ $t('input.icon.text.two.code3') }}</code>
					</template>
				</i18n-t>
				<i18n-t keypath="input.icon.text.three.value" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.icon.text.three.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<div class="m-t-8 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						icon="material-symbols:search"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						icon-position="left"
					/>
					<code>icon-position="left"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						icon="material-symbols:search"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						icon-position="right"
					/>
					<code>icon-position="right"</code>
				</div>
			</div>
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">{{ $t('input.loading.title') }}</h1>
				<i18n-t keypath="input.loading.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.loading.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<div class="m-t-8 flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						loading
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						icon-position="left"
					/>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						loading
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						icon-position="right"
					/>
				</div>
			</div>
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">{{ $t('input.placeholder.title') }}</h1>
				<i18n-t keypath="input.placeholder.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.placeholder.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<input-component name="name" :placeholder="$t('input.examples.placeholder')" appearance="none" />
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">{{ $t('input.disabled.title') }}</h1>
				<i18n-t keypath="input.disabled.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.disabled.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<input-component name="name" :placeholder="$t('input.examples.placeholder')" appearance="none" disabled />
		</card-component>

		<card-component class="m-y-8">
			<template #header>
				<h1 class="text-2xl">{{ $t('input.radius.title') }}</h1>
				<i18n-t keypath="input.radius.text" tag="p" class="m-y-3" scope="global">
					<template #code>
						<code>{{ $t('input.radius.code') }}</code>
					</template>
				</i18n-t>
			</template>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						radius="none"
					/>
					<code>radius="none"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						radius="sm"
					/>
					<code>radius="sm"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						radius="md"
					/>
					<code>radius="md"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						radius="lg"
					/>
					<code>radius="lg"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						radius="xl"
					/>
					<code>radius="xl"</code>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						radius="full"
					/>
					<code>radius="full"</code>
				</div>
			</div>
		</card-component>
	</div>
</template>
