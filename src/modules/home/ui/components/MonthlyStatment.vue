<script setup lang="ts">
import StatementComponent from './StatementComponent.vue'
</script>

<template>
  <v-card variant="flat" class="my-3">
    <v-card-text>
      <p class="text-uppercase">Faturas do mês</p>
      <div class="overflow-x-scroll pa-4 pl-0 d-flex ga-5">
        <StatementComponent v-for="s in [1]" />
      </div>
    </v-card-text>
  </v-card>
</template>
