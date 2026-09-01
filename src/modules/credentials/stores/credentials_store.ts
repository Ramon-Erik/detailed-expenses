import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account } from '../dtos/accounts_dto'
import type { Template } from '../dtos/templates_dto'

export const useCredentialStore = defineStore('credentials', () => {
  const accounts = ref<Account[]>([])
  const templates = ref<Template[]>([])
  const loading = ref(false)

  return { accounts, templates, loading }
})
