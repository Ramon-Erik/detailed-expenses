<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="d-flex flex-column aling-center justify-center" style="min-height: 90vh">
          <div class="text-center">
            <h2 class="text-center my-1 font-mono">detalha<span class="text-title">aí</span></h2>
            <p class="mt-1">Sua gestão financeira em detalhes.</p>
          </div>
          <form-container>
            <v-row>
              <v-col>
                <span class="d-block my-3 font-mono">Email</span>
                <v-text-field
                  v-model="email"
                  variant="solo-filled"
                  label="Seu melhor email"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span class="d-block my-3 font-mono">Senha</span>
                <v-text-field
                  v-model="password"
                  variant="solo-filled"
                  type="password"
                  label="Uma senha forte"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-btn
                @click="login"
                text="realizar login"
                class="w-100 py-6"
                color="primary text-uppercase"
              />
            </v-row>
          </form-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FormContainer from '../components/FormContainer.vue'
import { auth } from '../../repository/auth_repository.ts'
import { loggerService } from '@/shared/services/logger_service.ts'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref<string | null>('ramonerik29a@gmail.com')
const password = ref<string | null>('67ChaoVerde!$')

const login = () => {
  const payload = {
    email: email.value ?? '',
    password: password.value ?? '',
  }

  if (payload.email == '' || payload.password == '') return

  try {
    auth.login(payload.email, payload.password)
    router.push('home')
  } catch (error) {
    loggerService.axiosError('auth', error)
  }
}
</script>
