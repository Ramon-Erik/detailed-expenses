<script setup lang="ts">
import TransactionItem from '@/shared/components/TransactionItem.vue';

</script>

<template>
  <v-card variant="flat">
    <v-card-text>
      <p class="text-uppercase">Lançamentos recentes</p>
      <div class="d-flex flex-column ga-4">
        <TransactionItem v-for="t in [1,2,3,4]" />
      </div>
    </v-card-text>
  </v-card>
</template>
