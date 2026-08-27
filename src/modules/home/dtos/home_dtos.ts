import type { ApiResponse } from '@/shared/dtos/api_response_dto'

export interface InvoiceDetail {
  invoiceMonth: string
  total: number
}

export interface InvoicesData {
  current: InvoiceDetail
  next: InvoiceDetail
  items: unknown[] // Substitua 'unknown' pela interface do item quando tiver o contrato
}

export interface DashboardData {
  month: string
  income: number
  expenses: number
  goalContributions: number
  operationalExpenses: number
  cashFlow: number
  usableBalance: number
  totalReserved: number
  consolidatedBalance: number
  invoices: InvoicesData
  recentTransactions: unknown[] // Substitua 'unknown' pela interface de transação quando tiver
}

// Exemplo de tipo utilitário pronto para uso na API
export type DashboardResponse = ApiResponse<DashboardData>

export interface Invoice {
  invoiceMonth: string
  accountId: string
  accountName: string
  total: number
  open: number
}
