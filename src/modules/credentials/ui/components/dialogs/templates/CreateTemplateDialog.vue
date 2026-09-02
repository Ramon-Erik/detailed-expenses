<script setup lang="ts">
import { useCreateTemplateDialogStore } from '@/modules/credentials/stores/dialogs/templates/create_template_store'
import { onMounted, ref } from 'vue'

const store = useCreateTemplateDialogStore()
const formRef = ref()
const loading = ref(false)

async function handleSubmit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  try {
    store.hasCompleted = true
    console.log('md', store.hasCompleted, store.formData)

    store.closeDialog()
  } catch (error) {
    console.error('Erro ao salvar:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-dialog v-model="store.isOpen" max-width="500px" persistent>
    <v-card rounded="lg">
      <v-card-title class="d-flex justify-space-between align-center pa-4">
        <span class="text-h6 font-weight-bold">Novo Template</span>
        <v-btn icon="mdi-close" variant="text" size="small" @click="store.closeDialog" />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-4">
        <v-form ref="formRef" @submit.prevent="handleSubmit">
          <v-row>
            <!-- Tipo de Movimentação (Saída / Entrada) -->
            <v-col cols="12">
              <v-btn-toggle
                v-model="store.formData.direction"
                color="primary"
                mandatory
                group
                class="w-100 d-flex"
              >
                <v-btn
                  value="expense"
                  color="primary"
                  class="flex-grow-1"
                  prepend-icon="mdi-arrow-down-bold"
                >
                  Entrada
                </v-btn>
                <v-btn
                  value="income"
                  color="error"
                  class="flex-grow-1"
                  prepend-icon="mdi-arrow-up-bold"
                >
                  Saída
                </v-btn>
              </v-btn-toggle>
            </v-col>

            <!-- Nome do Template -->
            <v-col cols="12">
              <v-text-field
                v-model="store.formData.name"
                label="Nome do Template"
                placeholder="Ex: Aluguel, Salário, Mercado..."
                variant="outlined"
                density="comfortable"
                :rules="[(v) => !!v || 'Nome é obrigatório']"
                required
              />
            </v-col>

            <!-- Valor Padrão -->
            <v-col cols="12" sm="8">
              <v-text-field
                v-model.number="store.formData.defaultAmount"
                label="Valor Padrão (R$)"
                type="number"
                step="0.01"
                min="0"
                prefix="R$"
                variant="outlined"
                density="comfortable"
                placeholder="0,00"
                :rules="[(v) => v >= 0 || 'O valor não pode ser negativo']"
              />
            </v-col>

            <!-- Cor de Identificação -->
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="store.formData.color"
                label="Cor"
                type="color"
                variant="outlined"
                density="comfortable"
              />
            </v-col>

            <!-- Método de Pagamento -->
            <v-col cols="12">
              <v-select
                v-model="store.formData.paymentMethod"
                :items="store.paymentMethods"
                label="Forma de Pagamento Padrão"
                variant="outlined"
                density="comfortable"
                clearable
              />
            </v-col>
          </v-row>

          <!-- Ações do Formulário -->
          <div class="d-flex justify-end ga-2 mt-4">
            <v-btn variant="outlined" color="grey-darken-1" @click="store.closeDialog">
              Cancelar
            </v-btn>
            <v-btn color="primary" type="submit" :loading="loading"> Salvar </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
