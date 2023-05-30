import {defineStore} from 'pinia'
import {useToast} from 'vue-toastification'
import api from '@/services/api'
import {route} from '@/services/routes-dictionary'
import {useApiUrl} from '@/composables/useApiUrl'

const toast = useToast()

export const useApiStore = defineStore('api', {
	persist: true,
	state() {
		return {
			accessToken: null,
			payload: {},
		}
	},
	actions: {
		async doPostAuthLogin(data) {
			try {
				const API_URL = useApiUrl()
				const router = useRouter()

				const result = await api.post(`${API_URL}/${route.authLogin}`, data).then(res => res.data)

				if (result) {
					this.payload = result
					this.accessToken = result.token

					toast.success('Autenticado com sucesso.')
				}

				router.push('/')
			} catch (error) {
				toast.error('Erro ao fazer login!')

				console.error('doPostAuthLogin => ', error)
			}
		},
		doLogout() {
			try {
				this.accessToken = null
				this.payload = {}

				toast.success('Deslogado com sucesso.')

				const router = useRouter()
				router.push('/login')
			} catch (error) {
				toast.error('Erro ao fazer o logout!')

				console.error('doLogout => ', error)
			}
		},
	},
	getters: {
		getToken() {
			return this.accessToken
		},
		getPayload() {
			return this.payload
		},
		getUserId() {
			return this.payload?.id
		},
	},
})
