<template>
  <v-app>
    <v-main>
      <div class="main-layout h-100 d-flex flex-column">
        <header-layout />
        <div class="flex-grow-1">
          <v-container pa-0>
            <router-view />
          </v-container>
          <temporary-components />
        </div>
        <div class="position-sticky bottom-0 left-0 w-100 d-flex justify-center align-center">
          <bottom-menu-layout />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import BottomMenuLayout from './shared/layout/BottomMenuLayout.vue'
import HeaderLayout from './shared/layout/HeaderLayout.vue'
import TemporaryComponents from './shared/layout/TemporaryComponents.vue';
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
