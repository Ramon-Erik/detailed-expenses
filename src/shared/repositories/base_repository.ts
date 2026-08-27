import axiosInstance from '../plugins/axios_instance'
import { loggerService } from '../services/logger_service'

export default class BaseRepository {
  private readonly baseUrl = axiosInstance.defaults.baseURL

  protected async get<T>(path: string, params?: object) {
    const url = this.baseUrl + path
    const response = axiosInstance.get<T>(url, params)
    return (await response).data
  }

  protected async post<T>(path: string, params: unknown) {
    const url = this.baseUrl + path
    const response = axiosInstance.post<T>(url, params)
    return (await response).data
  }
}
