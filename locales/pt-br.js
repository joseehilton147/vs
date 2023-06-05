export default {
	global: {
		copyCode: 'Copiado para a área de transferência',
	},
	introduction: {
		title: 'Introdução',
		text: 'Este é um projeto com componentes pré construídos para Nuxt 3, ainda está em desenvolvimento, mas você pode usá-lo se quiser.',
	},
	input: {
		title: 'Input',
		examples: {
			placeholder: 'Digite seu nome aqui...',
		},
		default: {
			title: 'Como usar',
			text: 'Você pode usar o {code} para renderizar um input básico.',
			code: 'input-component',
		},
		sizing: {
			title: 'Tamanho',
			text: 'Você pode usar a prop {code} para mudar o tamanho do input.',
			code: 'size',
		},
		icon: {
			title: 'Ícone',
			text: {
				one: {
					value: 'Use qualquer icone da biblioteca Iconify e use o prop {code1} para renderizar um ícone dentro do input.',
					code: 'icon',
				},
				two: {
					value: 'Use o prop {code} para alterar a posição do icone entre {code2} e {code3}.',
					code: 'icon-position',
					code2: 'left',
					code3: 'right',
				},
				three: {
					value: 'O prop {code} ou o slot é opcional, então se quiser utilizar o botão apenas como ícone, basta remove-los.',
					code: 'label',
				},
			},
		},
		loading: {
			title: 'Carregando',
			text: 'Use o prop {code} para exibir o icone de loading, é possível usar a posição do ícone para alterar onde exibir.',
			code: 'loading',
		},
		placeholder: {
			title: 'Placeholder',
			text: 'Use o prop {code} para definir um placeholder para o input.',
			code: 'placeholder',
		},
		disabled: {
			title: 'Desabilitar',
			text: 'Use o prop {code} para desabilitar o input.',
			code: 'disabled',
		},
		radius: {
			title: 'Radius',
			text: 'Use o prop {code} para alterar o radius do input.',
			code: 'radius',
		},
	},
	select: {
		defaultPlaceholder: 'Escolha uma opção...',
		title: 'Select',
		introduction: {
			title: 'Como usar',
			text: 'O componente select é um wrapper para o elemento select nativo, é possível usar o {code} para renderizar um select básico.',
			code: 'select-component',
		},
		search: {
			title: 'Pesquisa',
			text: 'Use o prop {code} para habilitar a pesquisa no select.',
			code: 'search',
			placeholder: 'Pesquisar...',
			noItems: 'Nenhum item encontrado.',
		},
	},
}
