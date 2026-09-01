import type { ApiResponse } from "@/shared/dtos/api_response_dto"

export interface Template {
  id: string
  name: string
  color: string
  default_amount: number
  payment_method: string
  direction: string
}

export interface RawTemplate {
  name: string
  color: string
  default_amount: number
  payment_method: string
  direction: 'expense' | 'income'
}

export type TemplatesResponse = ApiResponse<Template[]>
export type CreateTemplatesResponse = ApiResponse<Template>
