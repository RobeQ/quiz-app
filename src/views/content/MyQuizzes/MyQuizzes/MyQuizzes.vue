<template>
  <v-container class="w-75">
    <h1>My Quizzes {{ quizzes.length }}</h1>
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
    <v-list lines="two" class="bg-grey-lighten-5">
      <v-list-item
        v-for="quiz in quizzes"
        :key="quiz.id"
        :title="quiz.name"
        :subtitle="'Created by ' + quiz.createdBy + ' on ' + quiz.createdDate"
        class="vention-quiz"
        rounded
        @click="editQuiz(quiz)"
      >
        <template #prepend>
          <v-avatar>
            <v-img :src="quiz.imageSrc"></v-img>
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { get } from '../../../../api/api';
import { AxiosResponse } from 'axios';
import { Quiz } from '../../../../model/quiz';
import { useRouter } from 'vue-router';

const router = useRouter();
const quizzes = reactive([] as Array<Quiz>);

onMounted(() =>
  get('/quizzes', (res: AxiosResponse) => {
    Object.assign(quizzes, res.data);
  })
);

const editQuiz = (quiz: Quiz) => {
  router.push({ name: 'contest-edit', params: { id: quiz.id } });
};
</script>

<style scoped>
.vention-quiz {
  cursor: pointer;
}
.vention-quiz:hover {
  background: rgb(220, 220, 220);
}
</style>
