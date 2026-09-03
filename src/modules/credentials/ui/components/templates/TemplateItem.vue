<script setup lang="ts">
import type { Template } from '@/modules/credentials/dtos/templates_dto';
import { normalizeKind } from '@/shared/helpers/masks'
import { watch } from 'vue'

defineProps<{ item: Template }>()

// const dialog = useDeleteAccountDialogStore()

// const accountsService = new AccountsService()

// watch(
//   () => dialog.hasCompleted,
//   (completed) => {
//     if (completed) {
//       accountsService.submitDeleteAccount(dialog.itemId)
//       dialog.resetForm()
//     }
//   },
// )
</script>

<template>
  <div class="d-flex align-center justify-space-between">
    <div class="d-flex align-center ga-4">
      <div>
        <v-avatar :color="item.color">
          {{ item.name.slice(0, 2) }}
        </v-avatar>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex ga-2">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <!-- <div>
      <v-btn
        color="error"
        icon="mdi-trash-can-outline"
        variant="text"
        @click="dialog.openDialog(item)"
      />
    </div> -->
  </div>
</template>
