import type { LoginRequest, LoginResponse, User } from '@/shared/dtos/auth_dto'
import { auth } from '../repository/auth_repository'
import { loggerService } from '@/shared/services/logger_service'
import { useLoginStore } from '../stores/auth_store'

export default class LoginService {
  private loginStore = useLoginStore()

  protected loading = false

  async submitLogin(payload: LoginRequest) {
    this.loading = true

    try {
      const response = await auth.login(payload.email, payload.password)
      this.loginStore.setUser(response.data)
      this.setAccessToken(response.data)
    } catch (error) {
      loggerService.error('Auth', error)
    }
  }

  async setAccessToken(info: User) {
    const { access_token, expires_at, refresh_token } = info.session

    if (access_token && expires_at && refresh_token) {
      sessionStorage.setItem('access_token', access_token)
      sessionStorage.setItem('refresh_token', refresh_token)
      sessionStorage.setItem('expires_at', expires_at.toString())
    }
  }
}
