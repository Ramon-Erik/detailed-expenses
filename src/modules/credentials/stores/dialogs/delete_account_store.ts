import { loggerService } from '@/shared/services/logger_service'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account, RawAccount } from '../../dtos/accounts_dto'

export const useDeleteAccountDialogStore = defineStore('DeleteAccountDialog', () => {
  const isOpen = ref(false)
  const hasCompleted = ref(false)

  const selectedItem = ref<Account>({} as Account)

  const itemName = ref('')
  const itemId = ref('')

  const openDialog = (initialData?: Account) => {
    if (initialData) {
      selectedItem.value = { ...initialData }
      itemId.value = selectedItem.value.id
      isOpen.value = true
    }
  }

  const closeDialog = () => {
    isOpen.value = false
  }

  const resetForm = () => {
    selectedItem.value = {} as Account
    itemId.value = ''
    itemName.value = ''
    hasCompleted.value = false
  }

  return {
    isOpen,
    selectedItem,
    itemName,
    itemId,
    hasCompleted,
    openDialog,
    closeDialog,
    resetForm,
  }
})
