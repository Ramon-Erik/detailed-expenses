<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace !important;
  font-weight: 600;
  letter-spacing: -0.5px; /* Deixa os números de dinheiro mais bonitos e alinhados */
}
</style>
