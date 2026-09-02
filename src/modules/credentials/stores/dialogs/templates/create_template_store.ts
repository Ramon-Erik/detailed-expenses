import type { RawTemplate } from '@/modules/credentials/dtos/templates_dto'
import { loggerService } from '@/shared/services/logger_service'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCreateTemplateDialogStore = defineStore('accountDialog', () => {
  const isOpen = ref(false)
  const hasCompleted = ref(false)

  const paymentMethods = [
    { title: 'Pix', value: 'pix' },
    { title: 'Cartão de Crédito', value: 'credit_card' },
    { title: 'Cartão de Débito', value: 'debit_card' },
    { title: 'Transporte', value: 'benefit' },
    { title: 'Dinheiro', value: 'cash' },
  ]

  const defaultForm: RawTemplate = {
    color: '#2ea043',
    name: '',
    defaultAmount: 0,
    direction: 'expense',
    paymentMethod: paymentMethods[0].value,
  }

  const formData = ref<RawTemplate>({ ...defaultForm })

  const openDialog = () => {
    formData.value = { ...defaultForm }
    isOpen.value = true
  }

  const closeDialog = () => {
    isOpen.value = false
  }

  const resetForm = () => {
    formData.value = { ...defaultForm }
    hasCompleted.value = false
  }

  return {
    isOpen,
    hasCompleted,
    formData,
    paymentMethods,
    openDialog,
    closeDialog,
    resetForm,
  }
})
