import { loggerService } from '@/shared/services/logger_service'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account, RawAccount } from '../../dtos/accounts_dtos'

export const useCreateAccountDialogStore = defineStore('accountDialog', () => {
  const isOpen = ref(false)
  const hasCompleted = ref(false)

  const defaultForm: RawAccount = {
    name: '',
    color: '#2ea043',
    kind: 'wallet',
    closingDay: null,
    dueDay: null,
  }

  const formData = ref<RawAccount>({ ...defaultForm })

  const openDialog = (initialData?: Partial<RawAccount>) => {
    formData.value = { ...defaultForm, ...initialData }
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
    openDialog,
    closeDialog,
    resetForm,
  }
})
