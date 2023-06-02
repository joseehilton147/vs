<script setup>
	const sizings = ref(['xs', 'sm', 'md', 'lg', 'xl'])
	const selectedSizing = ref('md')

	const iconPositions = ref(['left', 'right'])
	const selectedIconPosition = ref('left')
	const selectedIconPositionLoading = ref('left')

	const radius = ref(['none', 'sm', 'md', 'lg', 'xl', 'full'])
	const selectedRadius = ref('md')
</script>

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
			<template #footer>
				<code-block-component source="<input-component />"></code-block-component>
			</template>
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
			<template #default>
				<div class="m-b-4 flex items-center gap-4">
					<div v-for="(sizing, index) of sizings" :key="index">
						<radio-component
							v-model="selectedSizing"
							:label="sizing"
							:value="sizing"
							name="input-sizing"
							class="flex"
						/>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-4">
						<input-component
							name="name"
							:placeholder="$t('input.examples.placeholder')"
							appearance="none"
							:size="selectedSizing"
						/>
					</div>
				</div>
			</template>
			<template #footer>
				<code-block-component :source="`<input-component size='${selectedSizing}' />`"></code-block-component>
			</template>
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
			<template #default>
				<div class="m-b-4 flex items-center gap-4">
					<div v-for="(position, index) of iconPositions" :key="index">
						<radio-component
							v-model="selectedIconPosition"
							:label="position"
							:value="position"
							name="input-sizing"
							class="flex"
						/>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						icon="material-symbols:search"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						:icon-position="selectedIconPosition"
					/>
				</div>
			</template>
			<template #footer>
				<code-block-component
					:source="`<input-component icon-position='${selectedIconPosition}' />`"
				></code-block-component>
			</template>
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
			<template #default>
				<div class="m-b-4 flex items-center gap-4">
					<div v-for="(position, index) of iconPositions" :key="index">
						<radio-component
							v-model="selectedIconPositionLoading"
							:label="position"
							:value="position"
							name="input-loading"
							class="flex"
						/>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						loading
						:placeholder="$t('input.examples.placeholder')"
						:icon-position="selectedIconPositionLoading"
					/>
				</div>
			</template>
			<template #footer>
				<code-block-component
					:source="`<input-component icon-position='${selectedIconPositionLoading}' loading />`"
				></code-block-component>
			</template>
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
			<template #default>
				<input-component name="name" :placeholder="$t('input.examples.placeholder')" appearance="none" />
			</template>
			<template #footer>
				<code-block-component
					:source="`<input-component placeholder='${$t('input.examples.placeholder')}' />`"
				></code-block-component>
			</template>
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
			<template #default>
				<input-component
					name="name"
					:placeholder="$t('input.examples.placeholder')"
					appearance="none"
					disabled
				/>
			</template>
			<template #footer>
				<code-block-component :source="`<input-component disabled />`"></code-block-component>
			</template>
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
			<template #default>
				<div class="m-b-4 flex items-center gap-4">
					<div v-for="(radio, index) of radius" :key="index">
						<radio-component
							v-model="selectedRadius"
							:label="radio"
							:value="radio"
							name="input-sizing"
							class="flex"
						/>
					</div>
				</div>
				<div class="flex items-center gap-4">
					<input-component
						name="name"
						:placeholder="$t('input.examples.placeholder')"
						appearance="none"
						:radius="selectedRadius"
					/>
				</div>
			</template>
			<template #footer>
				<code-block-component :source="`<input-component radius=${selectedRadius} />`"></code-block-component>
			</template>
		</card-component>
	</div>
</template>
