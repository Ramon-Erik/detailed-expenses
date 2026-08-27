import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useHomeStore = defineStore('home', () => {
  const usableBalance = ref(0)
  const income = ref(0)
  const avalible = computed(() => (usableBalance.value / income.value) * 100 || 0)

  const monthName = ref(new Date().toLocaleDateString('pt-BR', { month: 'long' }))
  const currentInvoice = ref(0)

  return {
    usableBalance,
    income,
    avalible,

    monthName,
    currentInvoice
  }
})
