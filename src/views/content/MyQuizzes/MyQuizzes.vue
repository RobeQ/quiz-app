<template>
  <v-row justify="center" align="center">
    <v-card flat class="my-quizzes" min-width="1200px" color="transparent">
      <h1>My Quizzes {{ quizzesNumber }}</h1>
      <p>Choose a quiz to edit, view and manage.</p>
      <v-btn
        class="create-quiz-btn"
        prepend-icon="mdi-plus"
        size="x-large"
        rounded="pill"
        color="success"
        @click="$router.push('/contests/create')"
      >
        Create a quiz
      </v-btn>
    </v-card>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const quizzesNumber = ref(0);
</script>

<style scoped>
.my-quizzes {
  margin-top: 3rem;
}

.create-quiz-btn {
  margin-top: 2rem;
}
</style>
