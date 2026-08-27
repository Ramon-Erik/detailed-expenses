<script setup lang="ts">
import { formatCurrencyBR } from '@/shared/helpers/masks'
import type { Invoice } from '../../dtos/home_dtos';

defineProps<{
  invoice: Invoice
}>()
</script>

<template>
  <div class="card pa-1 pl-4 bg-on-background" :style="{borderLeft: '4px solid purple'}">
    <p class="text-capitalize text-purple">Total do mês</p>
    <p class="font-mono">{{ formatCurrencyBR(21212221) }}</p>
    <p>Fecha 01 - vence 08</p>
  </div>
</template>

<style scoped>
.card {
  width: fit-content;
  min-width: 200px;

  border-radius: 1rem;

  box-shadow:
    0px 0px 10px -2px rgba(var(--v-shadow-color), var(--v-shadow-key-opacity, 0.3)),
    0px 0px 0px 0px rgba(var(--v-shadow-color), var(--v-shadow-ambient-opacity, 0.15));
}
</style>
