import BaseRepository from "@/shared/repositories/base_repository";
import type { AccountsResponse } from "../dtos/accounts_dtos";

export class AccountsRepository extends BaseRepository {
  async getCardsAndAccounts() {
    return await this.get<AccountsResponse>('/accounts')
  }
}

export const accountsRepository = new AccountsRepository()
