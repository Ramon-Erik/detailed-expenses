<script setup lang="ts">
import { formatCurrencyBR } from '../helpers/masks'
</script>

<template>
  <v-row class="transaction">
    <v-col cols="2">
      <v-avatar color="surface-variant"> 🍕 </v-avatar>
    </v-col>
    <v-col>
      <div class="d-flex flex-column">
        <span>nome</span>
        <span>data cartão</span>
      </div>
    </v-col>
    <v-col>
      <div class="d-flex flex-column" align="end">
        <span>{{ formatCurrencyBR(903038447) }}</span>
        <span>conciliado</span>
      </div>
    </v-col>
  </v-row>
</template>
