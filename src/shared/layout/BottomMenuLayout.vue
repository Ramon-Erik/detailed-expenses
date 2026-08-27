<script setup lang="ts">
import type { NavItem } from './dtos/nav_item_dto'
import NavLink from './components/NavLink.vue'

const navigationList: NavItem[] = [
  { icon: 'mdi-plus', color: 'primary', label: 'Nova Movimentação', action: () => {} },
]
</script>

<template>
  <nav class="w-100">
    <div class="links bg-surface pa-2 elevation-2 d-flex justify-center align-space-between">
      <nav-link v-for="link in navigationList" :key="link.label" :item="link" />
    </div>
  </nav>
</template>
