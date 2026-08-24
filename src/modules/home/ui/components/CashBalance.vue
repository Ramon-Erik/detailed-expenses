<script setup lang="ts">
import { formatCurrencyBR } from '@/shared/helpers/masks'
import { computed } from 'vue'

const total = 1211
const inWallet = 600

const percentUsed = computed(() => (100 * inWallet) / total)
</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <p class="text-uppercase">Saldo disponível</p>
      <p class="text-display-medium font-mono text-primary my-2">
        {{ formatCurrencyBR(inWallet) }}
      </p>
      <p>
        de <strong class="font-mono">{{ formatCurrencyBR(total) }}</strong> recebidos
      </p>
      <v-progress-linear v-model="percentUsed" color="primary" height="6"></v-progress-linear>
      <p>{{ percentUsed.toFixed(1) }}% dispinível</p>
    </v-card-text>
  </v-card>
</template>
