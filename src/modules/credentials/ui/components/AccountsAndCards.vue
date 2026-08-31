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

watch(
  () => dialog.hasCompleted,
  (completed) => {
    console.log('comp cha', completed)

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
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <div class="w-100 d-flex ga-4">
          <v-btn icon="mdi-plus" variant="outlined" @click="dialog.openDialog" />
          <p class="text-uppercase">Contas e cartões</p>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex" v-if="accountsService.loading">
          <v-progress-circular color="primary" indeterminate />
        </div>
        <div class="d-flex flex-column ga-6">
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
