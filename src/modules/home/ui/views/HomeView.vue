<script setup lang="ts">
import CashBalance from '../components/CashBalance.vue'
import LatestTransactions from '../components/LatestTransactions.vue'
import MonthlyStatment from '../components/MonthlyStatment.vue'
</script>

<template>
  <v-container>
    <CashBalance />
    <MonthlyStatment />
    <LatestTransactions />
  </v-container>
</template>
