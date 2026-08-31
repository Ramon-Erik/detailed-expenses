<script setup lang="ts">
import AccountsService from '../../services/accounts_service.ts'
import { useCredentialStore } from '../../stores/credentials_store.ts'
import { useCreateAccountDialogStore } from '../../stores/dialogs/create_account_store.ts'
import AccountItem from './AccountItem.vue'

import { onMounted, ref, watch } from 'vue'
import CreateAccountDialog from './dialogs/CreateAccountDialog.vue'
import DeleteAccountDialog from './dialogs/DeleteAccountDialog.vue'

const accountsService = new AccountsService()
const store = useCredentialStore()
const dialog = useCreateAccountDialogStore()

const openedPanels = ref<string[]>([])

const openCreateAccountDialog = () => {
  if (!openedPanels.value.includes('accounts')) {
    openedPanels.value.push('accounts')
  }
  dialog.openDialog()
}

watch(
  () => dialog.hasCompleted,
  (completed) => {
    if (completed) {
      accountsService.submitNewAccount(dialog.formData)
      dialog.resetForm()
    }
  },
)

onMounted(() => {
  accountsService.loadAccountsAndCards()
})
</script>

<template>
  <v-expansion-panels v-model="openedPanels" multiple >
    <v-expansion-panel value="accounts">
      <v-expansion-panel-title>
        <div class="w-100 d-flex ga-4">
          <v-btn icon="mdi-plus" variant="outlined" @click.stop="openCreateAccountDialog" />
          <p class="text-uppercase">Templates</p>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex justify-center align-center pa-4" v-if="store.loading">
          <v-progress-circular color="primary" indeterminate />
        </div>
        <div class="d-flex flex-column ga-6" v-else>
          <account-item v-for="acc in store.accounts" :key="acc.id" :item="acc" />
          <div v-if="!store.accounts.length">
            <p class="text-center">Nenhum cartão ou renda encontrado</p>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <create-account-dialog />
  <delete-account-dialog />
</template>
