<template>
  <v-container>
    <v-text-field
      :model-value="quiz.name"
      label="Quiz name*"
      type="input"
      :rules="[(v) => !!v || 'Field is required']"
      clearable
      variant="solo"
    ></v-text-field>
    <v-text-field
      :model-value="quiz.category.name"
      label="Quiz category*"
      type="input"
      :rules="[(v) => !!v || 'Field is required']"
      clearable
      variant="solo"
    ></v-text-field>
    <v-textarea
      :model-value="quiz.description"
      label="Quiz description"
      rows="2"
      auto-grow
      clearable
      variant="solo"
    ></v-textarea>
    <v-file-input
      chips
      label="Upload quiz cover"
      variant="solo"
      disabled
    ></v-file-input>
  </v-container>
</template>

<script setup lang="ts">
import { Quiz } from '../../../model/quiz';

defineProps<{
  quiz: Quiz;
}>();
</script>

<style scoped></style>
