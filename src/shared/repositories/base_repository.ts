import type { RefreshResponse } from '@/modules/login/dtos/token_dto'
import axiosInstance from '../plugins/axios_instance'
import { loggerService } from '../services/logger_service'

export default class BaseRepository {
  private readonly baseUrl = axiosInstance.defaults.baseURL

  private isRefreshable() {
    const actualDateTime = sessionStorage.getItem('refresh_token_expiration')
    if (!actualDateTime) return
    const targetDate = new Date(actualDateTime)

    const givenDateTime = new Date()
    const expirationDateTime = new Date(targetDate.getTime() + 7 * 60000)

    if (givenDateTime === expirationDateTime) true
    return false
  }

  private async refreshAccessToken(token: string) {
    const response = await axiosInstance.post('/auth/refresh', { refreshToken: token })

    return response.data.data as RefreshResponse
  }

  private async prepareRequest() {
    const refreshToken = sessionStorage.getItem('refresh_token')
    if (!refreshToken) return

    if (this.isRefreshable()) {
      const response = await this.refreshAccessToken(refreshToken)
      const accessToken = response.access_token
      const newRefreshToken = response.refresh_token
      const accessTokenExpirationTime = response.expires_at.toString()

      sessionStorage.setItem('access_token', accessToken)
      sessionStorage.setItem('refresh_token', newRefreshToken)
      sessionStorage.setItem('refresh_token_expiration', accessTokenExpirationTime)
    }
  }

  protected async get<T>(path: string, params: object) {
    try {
      await this.prepareRequest();

      const url = this.baseUrl + path
      const response = axiosInstance.get<T>(url, params)
      return (await response).data
    } catch (error) {
      loggerService.axiosError('GET', error)
    }
  }

  protected async post<T>(path: string, params: object) {
    try {
      await this.prepareRequest();

      const url = this.baseUrl + path
      const response = axiosInstance.get<T>(url, params)
      return (await response).data
    } catch (error) {
      loggerService.axiosError('GET', error)
    }
  }
}
