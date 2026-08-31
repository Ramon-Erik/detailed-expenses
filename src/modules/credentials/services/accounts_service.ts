import { loggerService } from '@/shared/services/logger_service'
import { useCredentialStore } from '../stores/credentials_store'
import { accountsRepository } from '../repositories/accounts_repository'
import type { RawAccount } from '../dtos/accounts_dtos'

export default class AccountsService {
  private store = useCredentialStore()

  loading = false

  async loadAccountsAndCards() {
    this.loading = true

    try {
      const response = await accountsRepository.getCardsAndAccounts()

      this.store.accounts = response.data
    } catch (error) {
      loggerService.axiosError('get accounts', error)
    } finally {
      this.loading = false
    }
  }

  async submitNewAccount(account: RawAccount) {
    this.loading = true

    try {
      await accountsRepository.createNewAccount(account)
      this.loadAccountsAndCards()
    } catch (error) {
      loggerService.axiosError('create accounts', error)
    } finally {
      this.loading = false
    }
  }

  async submitDeleteAccount(id: string) {
    this.loading = true

    try {
      await accountsRepository.deleteAccount(id)
      this.loadAccountsAndCards()
    } catch (error) {
      loggerService.axiosError('delete accounts', error)
    } finally {
      this.loading = false
    }
  }
}
