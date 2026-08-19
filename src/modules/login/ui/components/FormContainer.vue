<template>
  <v-container
    max-width="500"
    width="100%"
    min-width="300"
    class="d-flex align-center justify-center"
  >
  <v-card class="w-100 pa-4 py-5">

    <v-form class="w-100">
      <slot></slot>
    </v-form>
  </v-card>
  </v-container>
</template>
