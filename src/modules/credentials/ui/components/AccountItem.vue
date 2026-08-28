<script setup lang="ts">
import type { Account } from '../../dtos/accounts_dtos'

defineProps<{ item: Account }>()

const normalizeKind = (k: 'wallet' | 'credit_card' | 'bank') => {
  return k == 'wallet' ? 'Carteira' : 'Crédito'
}
</script>

<template>
  <div class="d-flex align-center justify-space-between">
    <div class="d-flex align-center ga-4">
      <div>
        <v-avatar>
          {{ item.name.slice(0, 2) }}
        </v-avatar>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex ga-2">
          <span>{{ item.name }}</span>
          <span>
            ({{ normalizeKind(item.kind) }})
          </span>
        </div>
        <div>
          <span v-if="item.due_day && item.closing_day">
            fecha {{ item.closing_day }} - vence {{ item.due_day }}
          </span>
        </div>
      </div>
    </div>
    <div>
      <v-btn color="error" icon="mdi-trash-can-outline" variant="text" />
    </div>
  </div>
</template>
