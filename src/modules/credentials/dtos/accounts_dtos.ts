import type { ApiResponse } from '@/shared/dtos/api_response_dto'

export interface Account {
  id: string
  user_id: string
  name: string
  color: string
  kind: "bank" | "wallet" | "credit_card"
  closing_day: string | null
  due_day: string |null
  archived_at: string | null
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
