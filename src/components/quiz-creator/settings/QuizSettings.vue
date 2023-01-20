<template>
  <v-container>
    <v-text-field
      model-value=""
      label="Quiz name*"
      type="input"
      :rules="[(v) => !!v || 'Field is required']"
      clearable
      variant="solo"
    ></v-text-field>
    <v-text-field
      model-value=""
      label="Quiz category*"
      type="input"
      :rules="[(v) => !!v || 'Field is required']"
      clearable
      variant="solo"
    ></v-text-field>
    <v-textarea
      label="Quiz description"
      rows="2"
      auto-grow
      clearable
      variant="solo"
    ></v-textarea>
    <v-file-input chips label="Upload quiz cover" variant="solo"></v-file-input>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
