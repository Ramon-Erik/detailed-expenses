import BaseRepository from '@/shared/repositories/base_repository'
import type { DashboardResponse } from '../dtos/home_dtos'

export class HomeRepository extends BaseRepository {
  async getDashboardInfo() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')

    const yearMonth = `${year}-${month}`
    return await this.get<DashboardResponse>('/dashboard', {
      month: yearMonth,
    })
  }
}

export const homeRepository = new HomeRepository()
