<template>
  <v-container class="w-75">
    <h1 class="vention-color">My Quizzes {{ quizzes.data.length }}</h1>
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
        v-for="quiz in quizzes.data"
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
  <AgreementModal
    v-model:dialog="dialog"
    :modal="modal"
    class="w-50"
    @agree="onAgree"
  />
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Quiz } from '@/model/quiz';
import { useRouter } from 'vue-router';
import { useAxios } from '@vueuse/integrations/useAxios';
import { DELETE_QUIZ_BY_ID, GET_QUIZZES } from '@/api/api-url';
import { Quiz_Button_Type, QUIZ_BUTTONS } from '@/util/buttons';
import AgreementModal from '@/components/modal/AgreementModal.vue';
import {
  ModalAction,
  QUIZ_DELETE_MODAL,
  QUIZ_EDIT_MODAL,
  QUIZ_START_MODAL,
  QuizActionModal,
} from '@/model/modal';

const router = useRouter();
const quizzes = reactive({ data: [] as Array<Quiz> });
const dialog = ref(false);
const actualQuizId = ref(0);
const modal = reactive<QuizActionModal>(QUIZ_DELETE_MODAL());

onMounted(() => {
  loadQuizzes();
});

const onAgree = (action: ModalAction) => {
  dialog.value = false;
  switch (action) {
    case ModalAction.DELETE:
      deleteQuiz();
      break;
    case ModalAction.START:
      startQuiz();
      break;
    case ModalAction.EDIT:
      editQuiz();
  }
};

const loadQuizzes = () => {
  useAxios(GET_QUIZZES).then((res) => (quizzes.data = res.data.value));
};

const onQuizClick = (buttonType: Quiz_Button_Type, quizId: number) => {
  actualQuizId.value = quizId;
  switch (buttonType) {
    case Quiz_Button_Type.START:
      Object.assign(modal, QUIZ_START_MODAL());
      break;
    case Quiz_Button_Type.EDIT:
      Object.assign(modal, QUIZ_EDIT_MODAL());
      break;
    case Quiz_Button_Type.DELETE:
      Object.assign(modal, QUIZ_DELETE_MODAL());
      break;
  }
  dialog.value = true;
};

const startQuiz = () => {
  console.log('PLAY QUIZ WITH ID: ' + actualQuizId.value);
};

const editQuiz = () => {
  router.push({ name: 'contest-edit', params: { id: actualQuizId.value } });
};

const deleteQuiz = () => {
  useAxios(DELETE_QUIZ_BY_ID(actualQuizId.value), { method: 'DELETE' }).then(
    () => loadQuizzes()
  );
};
</script>

<style scoped>
.vention-quiz {
  margin: 0.6rem 0;
}
</style>
