import axios from 'axios'
import {useApiStore} from '@/services/api-service'

const api = axios.create({
	baseUrl: '',
})

api.interceptors.request.use(
	config => {
		const apiStore = useApiStore()

		const payload = apiStore.getPayload

		if (payload) config.headers.Authorization = `Bearer ${apiStore.getToken}`

		return config
	},
	error => {
		return Promise.reject(error)
	},
)

api.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.reject(error)
	},
)

export default api
