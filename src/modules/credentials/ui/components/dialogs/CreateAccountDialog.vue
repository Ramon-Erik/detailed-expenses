<script setup lang="ts">
import { useCreateAccountDialogStore } from '@/modules/credentials/stores/dialogs/create_account_store'
import { ref } from 'vue'

const accountStore = useCreateAccountDialogStore()
const formRef = ref()
const loading = ref(false)

const kindOptions = [
  { label: 'Carteira', value: 'wallet' },
  { label: 'Cartão de Crédito', value: 'credit_card' },
]

async function handleSubmit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  try {
    accountStore.hasCompleted = true
    console.log('md', accountStore.hasCompleted, accountStore.formData)

    accountStore.closeDialog()
  } catch (error) {
    console.error('Erro ao salvar:', error)
  } finally {
    loading.value = false
  }
}

const dayRules = [
  (v: any) => !!v || 'Campo obrigatório',
  (v: any) => /^(?:[1-9]|[12][0-9]|3[01])$/.test(String(v)) || 'Digite um dia entre 1 e 31',
]
</script>

<template>
  <v-dialog v-model="accountStore.isOpen" max-width="500px" persistent>
    <v-card rounded="lg">
      <v-card-title class="d-flex justify-space-between align-center pa-4">
        <span class="text-h6 font-weight-bold">Nova Conta / Cartão</span>
        <v-btn icon="mdi-close" variant="text" size="small" @click="accountStore.closeDialog" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-4">
        <v-form ref="formRef" @submit.prevent="handleSubmit">
          <v-row>
            <!-- Nome da Conta -->
            {{ accountStore.formData.name }}
            <v-col cols="12">
              <v-text-field
                v-model="accountStore.formData.name"
                label="Nome da Conta / Instituição"
                placeholder="Ex: Nubank, Itaú..."
                variant="outlined"
                density="comfortable"
                :rules="[(v) => !!v || 'Nome é obrigatório']"
                required
              />
            </v-col>

            <!-- Tipo de Conta -->
            <v-col cols="12" sm="8">
              <v-select
                v-model="accountStore.formData.kind"
                :items="kindOptions"
                item-title="label"
                item-value="value"
                label="Tipo de Conta"
                variant="outlined"
                density="comfortable"
              />
            </v-col>

            <!-- Cor de Identificação -->
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="accountStore.formData.color"
                label="Cor"
                type="color"
                variant="outlined"
                density="comfortable"
              />
            </v-col>

            <!-- Campos específicos para Cartão de Crédito -->
            <template v-if="accountStore.formData.kind === 'credit_card'">
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model.number="accountStore.formData.closingDay"
                  label="Dia de Fechamento"
                  type="text"
                  inputmode="numeric"
                  maxlength="2"
                  :rules="dayRules"
                  variant="outlined"
                  density="comfortable"
                  placeholder="Ex: 20"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model.number="accountStore.formData.dueDay"
                  label="Dia de Vencimento"
                  type="text"
                  inputmode="numeric"
                  maxlength="2"
                  :rules="dayRules"
                  variant="outlined"
                  density="comfortable"
                  placeholder="Ex: 27"
                />
              </v-col>
            </template>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider />

      <v-card-actions class="pa-4 d-flex justify-end ga-2">
        <v-btn variant="outlined" color="grey-darken-1" @click="accountStore.closeDialog">
          Cancelar
        </v-btn>
        <v-btn color="primary" variant="flat" :loading="loading" @click="handleSubmit">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
