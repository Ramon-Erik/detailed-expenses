import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account } from '../dtos/accounts_dtos'

export const useCredentialStore = defineStore('credentials', () => {
  const accounts = ref<Account[]>([])
  const loading = ref(false)

  return { accounts, loading }
})
