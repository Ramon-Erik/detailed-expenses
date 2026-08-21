import type { RefreshResponse } from '@/modules/login/dtos/token_dto'
import axiosInstance from '../plugins/axios_instance'
import { loggerService } from '../services/logger_service'

export default class BaseRepository {
  private readonly baseUrl = axiosInstance.defaults.baseURL

  protected async get<T>(path: string, params: object) {
    try {
      const url = this.baseUrl + path
      const response = axiosInstance.get<T>(url, params)
      return (await response).data
    } catch (error) {
      loggerService.axiosError('GET', error)
    }
  }

  protected async post<T, K>(path: string, params: K) {
    try {
      const url = this.baseUrl + path
      const response = axiosInstance.post<T>(url, params)
      return (await response).data
    } catch (error) {
      loggerService.axiosError('GET', error)
    }
  }
}
