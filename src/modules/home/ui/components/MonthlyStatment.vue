<script setup lang="ts">
import StatementComponent from './StatementComponent.vue'
import { useHomeStore } from '../../stores/home_store.ts'

const store = useHomeStore()
</script>

<template>
  <v-card variant="flat" class="my-3">
    <v-card-text>
      <p class="text-uppercase">Faturas do mês ({{ store.monthName }})</p>
      <div class="overflow-x-scroll pa-4 pl-0 d-flex ga-5">
        <!-- <StatementComponent />
        <StatementComponent v-for="s in [1]" /> -->
      </div>
    </v-card-text>
  </v-card>
</template>
