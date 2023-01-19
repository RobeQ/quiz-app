<template>
  <v-col cols="12" sm="12">
    <v-text-field
      model-value=""
      label="Quiz name*"
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
  </v-col>
</template>

<script setup lang="ts"></script>

<style scoped></style>
