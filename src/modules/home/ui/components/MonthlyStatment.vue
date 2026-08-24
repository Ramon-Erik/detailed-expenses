<script setup lang="ts">
import StatementComponent from './StatementComponent.vue';

</script>

<template>
  <p>Faturas do mês</p>
  
  <StatementComponent v-for="s in []"/>
</template>
