<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="d-flex flex-column aling-center justify-center" style="min-height: 90vh">
          <div class="text-center">
            <h2 class="text-center my-1 font-mono">detalha<span class="text-title">aí</span></h2>
            <p class="mt-1">Sua gestão financeira em detalhes.</p>
          </div>
          <form-container>
            <v-row>
              <v-col>
                <span class="d-block my-3 font-mono">Email</span>
                <v-text-field variant="solo-filled" label="Seu melhor email" hide-details="auto" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <span class="d-block my-3 font-mono">Senha</span>
                <v-text-field
                  variant="solo-filled"
                  type="password"
                  label="Uma senha forte"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-btn text="realizar login" class="w-100 py-6" color="primary text-uppercase" />
            </v-row>
          </form-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FormContainer from '../components/FormContainer.vue'
</script>
