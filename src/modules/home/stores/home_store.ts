import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useHomeStore = defineStore('home', () => {
  const usableBalance = ref(0)
  const income = ref(0)
  const avalible = computed(() => (usableBalance.value / income.value) * 100 || 0)




  return {
    usableBalance,
    income,
    avalible,
  }
})
