import { loggerService } from '@/shared/services/logger_service'
import { homeRepository } from '../repositories/home_repository'
import { useHomeStore } from '../stores/home_store'

export default class HomeService {
  private store = useHomeStore()

  protected loading = false

  async loadInfo() {
    this.loading = true

    const response = await homeRepository.getDashboardInfo()

    loggerService.debug('dash', response)

    this.store.income = response.data.income
    this.store.usableBalance = response.data.usableBalance
    try {
    } catch (error) {
      loggerService.axiosError('Dashboard info', error)
    }
  }
}
