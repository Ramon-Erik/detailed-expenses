<script setup lang="ts">
import { useDeleteAccountDialogStore } from '@/modules/credentials/stores/dialogs/delete_account_store'
import { normalizeKind } from '@/shared/helpers/masks'
import { ref } from 'vue'

const accountStore = useDeleteAccountDialogStore()
const formRef = ref()
const loading = ref(false)

async function handleSubmit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  try {
    accountStore.hasCompleted = true
    accountStore.closeDialog()
  } catch (error) {
    console.error('Erro ao salvar:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-dialog v-model="accountStore.isOpen" max-width="500px" persistent>
    <v-card rounded="lg">
      <v-card-title class="d-flex justify-space-between align-center pa-4">
        <span class="text-h6 font-weight-bold">
          Apagar
          <span class="text-lowercase">{{ normalizeKind(accountStore.selectedItem.kind) }}?</span>
        </span>
        <v-btn icon="mdi-close" variant="text" size="small" @click="accountStore.closeDialog" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-4">
        <v-form ref="formRef" @submit.prevent="handleSubmit">
          <span class="d-block mb-3">
            Escreva corretamente <pre class="d-inline-block px-2 my-2">"{{ accountStore.selectedItem.name }}"</pre> na caixa para
            <span class="font-weight-bold">apagar permanentemente</span>.
          </span>
          <v-text-field variant="outlined" placeholder="Dgite o nome para confirmar"/>
        </v-form>
      </v-card-text>

      <v-divider />

      <v-card-actions class="pa-4 d-flex justify-end ga-2">
        <v-btn variant="outlined" color="grey-darken-1" @click="accountStore.closeDialog">
          Cancelar
        </v-btn>
        <v-btn color="error" variant="flat" :loading="loading" @click="handleSubmit">
          Apagar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
