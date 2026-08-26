import type { LoginResponse } from '@/shared/dtos/auth_dto'
import BaseRepository from '@/shared/repositories/base_repository'

export class AuthRepository extends BaseRepository {
  async login(email: string, password: string) {
    return await this.post<LoginResponse>('/auth/login', {
      email,
      password,
    })
  }
}

export const auth = new AuthRepository()
