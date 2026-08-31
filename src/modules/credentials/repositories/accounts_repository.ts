import BaseRepository from '@/shared/repositories/base_repository'
import type {
  Account,
  AccountsResponse,
  CreateAccountsResponse,
  RawAccount,
} from '../dtos/accounts_dtos'

export class AccountsRepository extends BaseRepository {
  async getCardsAndAccounts() {
    return await this.get<AccountsResponse>('/accounts')
  }

  async createNewAccount(account: RawAccount) {
    console.log(account)

    if (account.kind == 'wallet') {
      return await this.post<CreateAccountsResponse>('/accounts', {
        name: account.name,
        kind: account.kind,
        color: account.color,
      })
    }
    return await this.post<CreateAccountsResponse>('/accounts', {
      name: account.name,
      color: account.color,
      kind: account.kind,
      closingDay: account.closingDay,
      dueDay: account.dueDay,
    })
  }

  async deleteAccount(id: string) {
    return await this.delete(`/accounts/${id}`)
  }
}

export const accountsRepository = new AccountsRepository()
