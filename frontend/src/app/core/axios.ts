import axios from 'axios'
import { parseCookies } from 'nookies'

axios.defaults.baseURL = 'http://localhost:7777'

axios.interceptors.request.use((config) => {
	if (typeof window !== 'undefined') {
		const { token } = parseCookies()

		config.headers.Authorization = 'Bearer ' + token
	}
})

export default axios
