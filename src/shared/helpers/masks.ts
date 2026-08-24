import { loggerService } from "../services/logger_service"

export const formatCurrencyBR = (value: number | string) => {
  const numericValue = typeof value === 'string' ? Number(value) : value

  if (isNaN(numericValue)) {
    loggerService.error('Valor não é númerico.', value)
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(0)
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericValue)
}
