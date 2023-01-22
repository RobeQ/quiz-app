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
    <v-list class="bg-grey-lighten-5">
      <v-hover
        v-for="quiz in quizzes"
        v-slot="{ isHovering, props }"
        :key="quiz.id"
      >
        <v-list-item
          v-bind="props"
          :elevation="isHovering ? 4 : 1"
          :class="{ 'on-hover': isHovering }"
          :title="quiz.name"
          :subtitle="'Created by ' + quiz.createdBy + ' on ' + quiz.createdDate"
          class="vention-quiz py-4"
          rounded
        >
          <template #prepend>
            <v-avatar><v-img :src="quiz.imageSrc"></v-img></v-avatar
          ></template>
          <template #append>
            <v-btn
              v-for="button in QUIZ_BUTTONS"
              :key="button.type"
              class="mr-4"
              variant="outlined"
              :prepend-icon="`mdi-${button.icon}`"
              :color="`${button.color}-lighten-2`"
              size="small"
              @click="onQuizClick(button.type, quiz.id)"
              >{{ button.type }}</v-btn
            >
          </template>
        </v-list-item>
      </v-hover>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { Quiz } from '../../../../model/quiz';
import { useRouter } from 'vue-router';
import { useAxios } from '@vueuse/integrations/useAxios';
import { GET_QUIZZES_URL } from '../../../../api/api-url';
import { BUTTON_TYPE, QUIZ_BUTTONS } from '../../../../util/buttons';

const router = useRouter();
const quizzes = reactive([] as Array<Quiz>);

onMounted(async () => {
  const { data } = await useAxios(GET_QUIZZES_URL);
  Object.assign(quizzes, data.value);
});

const onQuizClick = (buttonType: BUTTON_TYPE, quizId: number) => {
  switch (buttonType) {
    case BUTTON_TYPE.START:
      startQuiz(quizId);
      break;
    case BUTTON_TYPE.EDIT:
      editQuiz(quizId);
      break;
    case BUTTON_TYPE.DELETE:
      deleteQuiz(quizId);
      break;
  }
};

const startQuiz = (quizId: number) => {
  console.log('PLAY QUIZ WITH ID: ' + quizId);
};

const editQuiz = (quizId: number) => {
  router.push({ name: 'contest-edit', params: { id: quizId } });
};

const deleteQuiz = (quizId: number) => {
  console.log('DELETE QUIZ WITH ID: ' + quizId);
};
</script>

<style scoped>
.vention-quiz {
  margin: 0.6rem 0;
}
</style>
