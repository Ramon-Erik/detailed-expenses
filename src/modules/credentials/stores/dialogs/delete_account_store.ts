import { loggerService } from '@/shared/services/logger_service'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account, RawAccount } from '../../dtos/accounts_dtos'

export const useDeleteAccountDialogStore = defineStore('DeleteAccountDialog', () => {
  const isOpen = ref(false)
  const hasCompleted = ref(false)

  const selectedItem = ref<Account>({} as Account)

  const itemName = ref('')

  const openDialog = (initialData?: Account) => {
    if (initialData) {
      selectedItem.value = { ...initialData }
      isOpen.value = true
    }
  }

  const closeDialog = () => {
    isOpen.value = false
  }

  const resetForm = () => {
    hasCompleted.value = false
  }

  return {
    isOpen,
    selectedItem,
    itemName,
    hasCompleted,
    openDialog,
    closeDialog,
    resetForm,
  }
})
