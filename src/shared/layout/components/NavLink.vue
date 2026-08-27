<template>
  <v-btn
    :to="item.to"
    @click="item.action"
    icon
    variant="text"
    class="nav-btn bg-primary mx-2 d-online-block pa-2"
    height="38"
    width="38"
  >
    <v-icon size="24">{{ item.icon }}</v-icon>

    <v-tooltip activator="parent" location="top">
      <span class="text-text">{{ item.label }}</span>
    </v-tooltip>
  </v-btn>
</template>

<script setup lang="ts">
import type { NavItem } from '../dtos/nav_item_dto'

defineProps<{
  item: NavItem
}>()
</script>
