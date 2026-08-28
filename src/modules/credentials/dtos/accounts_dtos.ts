import type { ApiResponse } from '@/shared/dtos/api_response_dto'

export interface Account {
  id: string
  user_id: string
  name: string
  color: string
  kind: "bank" | "wallet" | "credit_card"
  closing_day: string | null
  due_day: string |null
  initial_balance: number
  archived_at: string | null
}

export type AccountsResponse = ApiResponse<Account[]>
