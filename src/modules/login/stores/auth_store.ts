import type { User } from "@/shared/dtos/auth_dto";
import { defineStore } from "pinia";
import { ref } from "vue";

export  const useLoginStore = defineStore('auth', () => {
  const user = ref<User>()

  const setUser = (response: User) => {
    user.value = response
  }

  return {
    setUser
  }
})
