import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account } from '../dtos/accounts_dto'

export const useCredentialStore = defineStore('credentials', () => {
  const accounts = ref<Account[]>([])
  const templates = ref([])
  const loading = ref(false)

  return { accounts, templates, loading }
})
