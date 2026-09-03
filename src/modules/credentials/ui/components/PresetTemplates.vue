<script setup lang="ts">
import { useCredentialStore } from '../../stores/credentials_store.ts'
import TemplateItem from './templates/TemplateItem.vue'

import { onMounted, ref, watch } from 'vue'
import TemplatesService from '../../services/templates_service.ts'
import { useCreateTemplateDialogStore } from '../../stores/dialogs/templates/create_template_store.ts'
import CreateTemplateDialog from './dialogs/templates/CreateTemplateDialog.vue'

const templatesService = new TemplatesService()
const store = useCredentialStore()
const dialog = useCreateTemplateDialogStore()

const openedPanels = ref<string[]>([])

const openCreateTemplateDialog = () => {
  if (!openedPanels.value.includes('templates')) {
    openedPanels.value.push('templates')
  }
  dialog.openDialog()
}

watch(
  () => dialog.hasCompleted,
  (completed) => {
    if (completed) {
      templatesService.submitNewAccount(dialog.formData)
      dialog.resetForm()
    }
  },
)

onMounted(() => {
  templatesService.loadTemplates()
})
</script>

<template>
  <v-expansion-panels v-model="openedPanels" multiple >
    <v-expansion-panel value="templates">
      <v-expansion-panel-title>
        <div class="w-100 d-flex ga-4">
          <v-btn icon="mdi-plus" variant="outlined" @click.stop="openCreateTemplateDialog" />
          <p class="text-uppercase">Templates</p>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex justify-center align-center pa-4" v-if="store.loading">
          <v-progress-circular color="primary" indeterminate />
        </div>
        <div class="d-flex flex-column ga-6" v-else>
          <template-item v-for="acc in store.templates" :key="acc.id" :item="acc" />
          <div v-if="!store.templates.length">
            <p class="text-center">Nenhum template encontrado</p>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <create-template-dialog />
  <!-- <delete-account-dialog /> -->
</template>
