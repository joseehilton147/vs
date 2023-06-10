<script setup>
	const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger']

	const selectedColor = ref('primary')

	const variants = ['solid', 'outline', 'soft', 'ghost', 'link', 'icon']

	const selectedVariant = ref('solid')
	const selectedVariantColor = ref('primary')

	const iconPositions = ['left', 'right']
	const iconRotations = ['rotate-0', 'rotate-45', 'rotate-90', 'rotate-180', 'rotate-270', 'rotate-360']

	const icon = ref('material-symbols:favorite')
	const selectedIconPosition = ref('left')
	const selectedIconRotation = ref('rotate-0')

	const isBlock = ref(false)

	const radius = ['none', 'sm', 'md', 'lg', 'xl', 'full']
	const selectedRadius = ref('sm')

	const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
	const selectedSize = ref('md')

	const paddings = ['none', 'xs', 'sm', 'md', 'lg', 'xl']
	const selectedPadding = ref('md')

	const loadingOrDisabledSynax = ['loading', 'disabled']
	const selectedSyntax = ref('disabled')

	const isLoading = ref(false)

	const isDisabled = ref(false)

	const isLink = ref(false)
</script>

<template>
	<div>
		<!-- COLORS -->
		<docs-card title="Colors">
			<template #header>
				<p class="m-b-4">Use <code>color</code> prop to change the button color.</p>
				<small
					>Only the colors below is pre-defined, to insert new colors read the
					<code>customization</code> section.</small
				>
			</template>
			<template #footer>
				<docs-code-block :source="`<VSButton color='${selectedColor}' />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- VARIANTS -->
		<docs-card title="Variants" class="m-y-8">
			<template #header>
				<p class="m-b-4">You can use the prop <code>variant</code> to change the variant.</p>
				<small><code>solid</code> is default variant.</small>
			</template>
			<template #footer>
				<docs-code-block :source="`<VSButton variant='${selectedVariant}' />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- ICONS -->
		<docs-card title="Icons">
			<template #header>
				<p>
					You can use the prop <code>icon</code> to display a icon, use any icon from
					<a href="https://icones.js.org/" target="_blank">icônes</a> or
					<a href="https://icon-sets.iconify.design/" target="_blank">iconify</a>.
				</p>
				<p class="m-y-4">If necessary you can change the direction or rotate the icon.</p>
				<small
					>To change the position use the prop <code>icon-position</code> and to change the rotation use
					<code>icon-rotation</code>.</small
				>
			</template>
			<template #footer>
				<docs-code-block
					:source="`<VSButton icon='${icon}' icon-position='${selectedIconPosition}' icon-rotation='${selectedIconRotation}' />`"
				></docs-code-block>
			</template>
		</docs-card>
		<!-- BLOCK -->
		<docs-card title="Block" class="m-y-8">
			<template #header>
				<p>You can use the prop <code>block</code> to make the button fill the div width.</p>
			</template>
			<template #footer>
				<docs-code-block :source="`<VSButton block />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- RADIUS -->
		<docs-card title="Roundness">
			<template #header>
				<p class="m-b-4">You can use the prop <code>radius</code> to adjust the roundness of the button.</p>
				<small><code>sm</code> is default roundness.</small>
			</template>
			<template #footer>
				<docs-code-block :source="`<VSButton radius='${selectedRadius}' />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- SIZE -->
		<docs-card title="Sizing" class="m-y-8">
			<template #header>
				<p class="m-b-4">You can use the prop <code>size</code> to adjust the sizing of the text.</p>
				<small><code>md</code> is default size.</small>
			</template>
			<template #footer>
				<docs-code-block :source="`<VSButton size='${selectedSize}' />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- PADDING -->
		<docs-card title="Padding">
			<template #header>
				<p class="m-b-4">You can use the prop <code>padding</code> to adjust the padding button.</p>
				<small><code>md</code> is default padding.</small>
			</template>
			<template #footer>
				<docs-code-block :source="`<VSButton padding='${selectedPadding}' />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- LOADING / DISABLE -->
		<docs-card title="Loading / Disable" class="m-y-8">
			<template #header>
				<p>
					You can disable the button in two ways, using a loader to wait some action or simple passing a
					disable prop.
				</p>
				<p class="m-y-4">
					By using a loader you can use the prop <code>loading</code> or for a fully disable use the prop
					<code>disabled</code>.
				</p>
				<small
					><b>Tip:</b> You can change the loading position by using the prop
					<code>icon-position</code>.</small
				>
			</template>
			<template #footer>
				<div class="m-b-4">
					<small>Choose a syntax:</small>
					<div class="flex items-center gap-4">
						<div v-for="(syntax, index) of loadingOrDisabledSynax" :key="index">
							<Radio
								v-model="selectedSyntax"
								:label="syntax"
								:value="syntax"
								name="button-loading-disabled"
								class="flex"
							/>
						</div>
					</div>
				</div>
				<docs-code-block :source="`<VSButton ${selectedSyntax} />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- LINK -->
		<docs-card title="Link">
			<template #header>
				<p>Use the prop <code>to</code> for convert the Button into a nuxt-link.</p>
			</template>
			<template #footer>
				<docs-code-block :source="`<VSButton to='https://www.google.com' target='_blank' />`"></docs-code-block>
			</template>
		</docs-card>
		<!-- PLAYGROUND -->
		<docs-card title="Playground" class="m-y-8">
			<template #header>
				<p class="m-b-4">Play with all possible button props combinations below.</p>
				<small>The combinations will reflect in the code examples above.</small>
			</template>
			<template #default>
				<!-- COLORS -->
				<div class="m-b-4">
					<small>Choose a color:</small>
					<div class="flex items-center gap-4">
						<div v-for="(color, index) of colors" :key="index">
							<Radio
								v-model="selectedVariantColor"
								:label="color"
								:value="color"
								name="button-variant-color"
								class="flex"
							/>
						</div>
					</div>
				</div>
				<!-- VARIANTS -->
				<div class="m-b-4">
					<small>Choose a variant:</small>
					<div class="flex items-center gap-4">
						<div v-for="(variant, index) of variants" :key="index">
							<Radio
								v-model="selectedVariant"
								:label="variant"
								:value="variant"
								name="button-variant"
								class="flex"
							/>
						</div>
					</div>
				</div>
				<!-- ICON -->
				<div class="m-b-4">
					<small>Icon name:</small>
					<Input v-model="icon" name="button-icon-name" placeholder="Type a icon name..." />
				</div>
				<!-- ICON POSITION -->
				<div class="m-b-4">
					<small>Choose a icon position:</small>
					<div class="flex items-center gap-4">
						<div v-for="(position, index) of iconPositions" :key="index">
							<Radio
								v-model="selectedIconPosition"
								:label="position"
								:value="position"
								name="button-icon-position"
								class="flex"
							/>
						</div>
					</div>
				</div>
				<!-- ICON ROTATION -->
				<div class="m-b-4">
					<small>Choose a icon rotation:</small>
					<div class="flex items-center gap-4">
						<div v-for="(rotation, index) of iconRotations" :key="index">
							<Radio
								v-model="selectedIconRotation"
								:label="rotation"
								:value="rotation"
								name="button-icon-rotation"
								class="flex"
							/>
						</div>
					</div>
				</div>
				<!-- BLOCK -->
				<div class="m-b-4">
					<small>Block:</small>
					<Checkbox v-model="isBlock" name="button-block" />
				</div>
				<!-- RADIUS -->
				<div class="m-b-4">
					<small>Choose a radius:</small>
					<div class="flex items-center gap-4">
						<div v-for="(radio, index) of radius" :key="index">
							<Radio
								v-model="selectedRadius"
								:label="radio"
								:value="radio"
								name="button-radius"
								class="flex"
							/>
						</div>
					</div>
				</div>
				<!-- SIZE -->
				<div class="m-b-4">
					<small>Choose a size:</small>
					<div class="flex items-center gap-4">
						<div v-for="(size, index) of sizes" :key="index">
							<Radio v-model="selectedSize" :label="size" :value="size" name="button-size" class="flex" />
						</div>
					</div>
				</div>
				<!-- PADDING -->
				<div class="m-b-4">
					<small>Choose a padding:</small>
					<div class="flex items-center gap-4">
						<div v-for="(padding, index) of paddings" :key="index">
							<Radio
								v-model="selectedPadding"
								:label="padding"
								:value="padding"
								name="button-padding"
								class="flex"
							/>
						</div>
					</div>
				</div>
				<!-- LOADING -->
				<div class="m-b-4">
					<small>Loading:</small>
					<Checkbox v-model="isLoading" name="button-loading" />
				</div>
				<!-- DISABLED -->
				<div class="m-b-4">
					<small>Disabled:</small>
					<Checkbox v-model="isDisabled" name="button-disabled" />
				</div>
				<!-- LINK -->
				<div>
					<small>Link:</small>
					<Checkbox v-model="isLink" name="button-link" />
				</div>
			</template>
			<template #footer>
				<Button
					:name="`${isLink ? 'link' : 'button'}-playground`"
					:variant="selectedVariant"
					:color="selectedVariantColor"
					:icon="icon"
					:icon-position="selectedIconPosition"
					:icon-rotation="selectedIconRotation"
					:block="isBlock"
					:radius="selectedRadius"
					:size="selectedSize"
					:padding="selectedPadding"
					:loading="isLoading"
					:disabled="isDisabled"
					:to="isLink ? 'https://github.com/joseehilton147/vs' : null"
					:target="isLink ? '_blank' : null"
					:label="`${isLink ? 'Link' : 'Button'} playground`"
				/>
			</template>
		</docs-card>
		<!-- PRESET -->
		<docs-card title="Preset">
			<template #default>
				<docs-code-block
					source="{
	base: 'focus:outline-none focus-visible:outline-0 disabled:opacity-50 disabled:pointer-events-none flex-shrink-0 transition duration-400 ease-in-out',
	block: 'w-full flex justify-center items-center',
	variants: {
		solid: 'bg-{color}-500 color-white hover:bg-{color}-700',
		outline: 'color-{color}-500 border border-{color}-700 hover:bg-{color}-700 hover:color-white',
		soft: 'color-{color}-500 bg-{color}-700 bg-opacity-20  hover:bg-opacity-40',
		ghost: 'color-{color}-500 hover:bg-{color}-700 hover:bg-opacity-20',
		link: 'color-{color}-500 hover:underline',
		icon: 'hover:color-{color}-500',
	},
	custom: '',
	default: {
		variant: 'solid',
		size: 'md',
		radius: 'md',
		color: 'primary',
		padding: 'md',
		icon: {
			position: 'left',
			rotation: 'rotate-0',
			loading: {
				icon: 'line-md:loading-twotone-loop',
			},
		},
	},
}"
				></docs-code-block>
			</template>
		</docs-card>
	</div>
</template>
