import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.vueApp.use(Toast, {
		position: 'top-right',
		timeout: 4000,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		draggablePercent: 0.6,
		showCloseButtonOnHover: false,
		hideProgressBar: false,
		closeButton: 'button',
		icon: true,
		rtl: false,
		transition: 'Vue-Toastification__fade',
		maxToasts: 3,
		newestOnTop: true,
	})
})
