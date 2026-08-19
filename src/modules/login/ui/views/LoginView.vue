<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="d-flex flex-column aling-center justify-center text-center" style="min-height: 90vh">
          <h2 class="text-center">detalhaaí</h2>
          <p>Sua gestão financeira em detalhes.</p>
          <form-container>
              <v-text-field label="Email" />
              <v-text-field label="Senha" type="password" />
              <v-row>
                <v-btn text="realizar login" class="w-100 py-6" />
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
