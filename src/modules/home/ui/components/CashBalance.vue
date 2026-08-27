<script setup lang="ts">
import { formatCurrencyBR } from '@/shared/helpers/masks'
import { computed, onMounted } from 'vue'
import HomeService from '../../services/home_service'
import { useHomeStore } from '../../stores/home_store'

const homeService = new HomeService()
const store = useHomeStore()

onMounted(() => {
  homeService.loadInfo()
})
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <p class="text-uppercase">Saldo disponível</p>
      <p class="text-display-medium font-mono text-primary my-2">
        {{ formatCurrencyBR(store.usableBalance) }}
      </p>
      <p>
        de <strong class="font-mono">{{ formatCurrencyBR(store.income) }}</strong> recebidos
      </p>
      <v-progress-linear v-model="store.avalible" color="primary" height="6"></v-progress-linear>
      <p>{{ store.avalible.toFixed(1) }}% dispinível</p>
    </v-card-text>
  </v-card>
</template>
