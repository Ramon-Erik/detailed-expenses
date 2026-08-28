<script setup lang="ts">
import type { Account } from '../../dtos/accounts_dtos'

defineProps<{ item: Account }>()
</script>

<template>
  <v-row>
    <v-col>
      <v-avatar>
        {{ item.name.slice(0, 2) }}
      </v-avatar>
    </v-col>
    <v-col class="d-flex flex-column">
      <span>{{ item.name }}</span>
      <div>
        {{ item.kind }}
        <span v-if="item.due_day && item.closing_day">
          fecha {{ item.closing_day }} - vence {{ item.due_day }}
        </span>
      </div>
    </v-col>
    <v-col>
      <v-btn icon="mdi-trash" />
    </v-col>
  </v-row>
</template>
