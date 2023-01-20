<template>
  <v-container class="text-center">
    <h1>My Quizzes {{ quizzesNumber }}</h1>
    <p>Choose a quiz to edit, view and manage.</p>
    <v-btn
      class="ma-4"
      prepend-icon="mdi-plus"
      size="x-large"
      rounded="pill"
      color="success"
      @click="$router.push('/contests/create')"
    >
      Create a quiz
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const quizzesNumber = ref(0);
</script>

<style scoped></style>
