<script setup lang="ts">
import { normalizeKind } from '@/shared/helpers/masks';
import type { Account } from '../../dtos/accounts_dtos'
import { useDeleteAccountDialogStore } from '../../stores/dialogs/delete_account_store';

defineProps<{ item: Account }>()

const dialog = useDeleteAccountDialogStore()
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
      <v-btn color="error" icon="mdi-trash-can-outline" variant="text" @click="dialog.openDialog(item)" />
    </div>
  </div>


</template>
