import axios from 'axios'

const baseURL = import.meta.env.VITE_API_BASE_URL

const axiosInstance = axios.create({
  baseURL,
  timeout: 20_000,
})

function isTokenExpired(): boolean {
  const expiresAt = sessionStorage.getItem('expires_at')
  if (!expiresAt) return true

  const expiresAtMs = Number(expiresAt) * 1000
  const bufferMs = 30 * 1000

  return Date.now() > expiresAtMs - bufferMs
}

axiosInstance.interceptors.request.use(async (config) => {
  let token = sessionStorage.getItem('access_token')
  const refreshToken = sessionStorage.getItem('refresh_token')

  if (isTokenExpired() && refreshToken) {
    try {
      const response = await axios.post(`${baseURL}/auth/refresh`, {
        refreshToken,
      })

      const data = response.data.data
      token = data.access_token

      sessionStorage.setItem('access_token', data.access_token)
      sessionStorage.setItem('refresh_token', data.refresh_token)
      sessionStorage.setItem('expires_at', data.expires_at.toString())
    } catch {
      sessionStorage.clear()
      window.location.href = '/login'
      return Promise.reject(new Error('Sessão expirada'))
    }
  }

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default axiosInstance
