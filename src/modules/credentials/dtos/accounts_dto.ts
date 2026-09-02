import type { ApiResponse } from '@/shared/dtos/api_response_dto'

export interface Account {
  id: string
  userId: string
  name: string
  color: string
  kind: "bank" | "wallet" | "credit_card"
  closingDay: string | null
  dueDay: string |null
  archivedAt: string | null
}
export interface RawAccount {
  name: string
  color: string
  kind: "bank" | "wallet" | "credit_card"
  closingDay: string | null
  dueDay: string |null
}

export type AccountsResponse = ApiResponse<Account[]>
export type CreateAccountsResponse = ApiResponse<Account>
