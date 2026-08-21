import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

const axiosInstance = axios.create({ baseURL })

axiosInstance.defaults.timeout = 20_000

axiosInstance.defaults.headers.common['Authorization'] =
  `Bearer ${sessionStorage.getItem('access_token')}`

export default axiosInstance
