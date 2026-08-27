<script setup lang="ts">
import { onMounted } from 'vue'
import HomeService from '../../services/home_service.ts'
import CashBalance from '../components/CashBalance.vue'
import LatestTransactions from '../components/LatestTransactions.vue'
import MonthlyStatment from '../components/MonthlyStatment.vue'

const homeService = new HomeService()

onMounted(() => {
  homeService.loadInfo()
})
</script>

<template>
  <v-container>
    <CashBalance />
    <MonthlyStatment />
    <LatestTransactions />
  </v-container>
</template>
