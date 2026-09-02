import BaseRepository from '@/shared/repositories/base_repository'
import type {
  Account,
  AccountsResponse,
  CreateAccountsResponse,
  RawAccount,
} from '../dtos/accounts_dto'

export class AccountsRepository extends BaseRepository {
  async getCardsAndAccounts() {
    return await this.get<AccountsResponse>('/accounts')
  }

  async createNewAccount(account: RawAccount) {
    console.log(account)

    return await this.post<CreateAccountsResponse>('/accounts', account)
  }

  async deleteAccount(id: string) {
    return await this.delete(`/accounts/${id}`)
  }
}

export const accountsRepository = new AccountsRepository()
