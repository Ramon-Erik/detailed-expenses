import BaseRepository from '@/shared/repositories/base_repository'

export class AuthRepository extends BaseRepository {

  async login(email: string, password: string) {
    return await this.post('/auth/login', { email, password })
  }
}

export const auth = new AuthRepository()
