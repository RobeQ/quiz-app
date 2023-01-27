<template>
  <v-container class="quiz-creator-wrapper">
    <v-card-title class="text-center justify-center py-2">
      <h2 class="font-weight-bold text-h5 vention-color">
        {{ isEdit ? 'Update quiz' : 'Create new quiz' }}
      </h2>
    </v-card-title>

    <v-tabs v-model="tab" bg-color="transparent" grow>
      <v-tab
        v-for="item in tabNameToComponentMap.keys()"
        :key="item"
        :value="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in tabNameToComponentMap.keys()"
        :key="item"
        :value="item"
      >
        <v-card flat>
          <component
            :is="tabNameToComponentMap.get(item)"
            v-model:quiz="quiz"
            v-model:name="quiz.name"
            v-model:description="quiz.description"
            v-model:imageSrc="quiz.imageSrc"
            v-model:category="quiz.category"
            class="tab"
            @remove-question="removeQuestion"
          />
        </v-card>
      </v-window-item>
    </v-window>
    <div class="text-end pa-2">
      <v-btn color="success" variant="outlined" @click="cancelQuizCreation"
        >Cancel</v-btn
      >
      <v-btn class="ml-3" color="success" @click="onQuizCreatorClick">{{
        isEdit ? 'Update' : 'Save'
      }}</v-btn>
      <AgreementModal
        v-model:dialog="dialog"
        :modal="modal"
        class="w-50"
        @agree="onAgree"
      />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import QuizSettings from '@/components/quiz-creator/settings/QuizSettings.vue';
import QuizQuestions from '@/components/quiz-creator/questions/QuizQuestions.vue';
import { useRoute } from 'vue-router';
import { GET_QUIZ_BY_ID, POST_QUIZ, UPDATE_QUIZ } from '@/api/api-url';
import { useAxios } from '@vueuse/integrations/useAxios';
import { EMPTY_QUIZ } from '@/model/quiz';
import AgreementModal from '@/components/modal/AgreementModal.vue';
import {
  QUIZ_TO_SAVE_QUIZ_MAPPER,
  QUIZ_TO_UPDATE_QUIZ_MAPPER,
} from '@/mapper/quiz-mapper';
import {
  ModalAction,
  QUIZ_CANCEL_MODAL,
  QUIZ_SAVE_MODAL,
  QUIZ_UPDATE_MODAL,
  QuizActionModal,
} from '@/model/modal';
import router from '@/router';

const route = useRoute();

const tab = ref('Settings');
const quiz = reactive(EMPTY_QUIZ());
const dialog = ref(false);
const modal = reactive<QuizActionModal>(QUIZ_UPDATE_MODAL());

const isEdit = computed(() => route.params.id);

onMounted(async () => {
  if (isEdit.value) {
    const { data } = await useAxios(GET_QUIZ_BY_ID(Number(route.params.id)));
    Object.assign(quiz, data.value);
  }
});

const tabNameToComponentMap = new Map<string, any>([
  ['Settings', QuizSettings],
  ['Questions', QuizQuestions],
]);

const onAgree = (action: ModalAction) => {
  dialog.value = false;
  switch (action) {
    case ModalAction.UPDATE:
      updateQuiz();
      break;
    case ModalAction.SAVE:
      saveQuiz();
      break;
    case ModalAction.CANCEL:
      router.push('/contests');
      break;
  }
};

const removeQuestion = (questionId: number) => {
  quiz.questions = quiz.questions.filter(
    (question) => question.id !== questionId
  );
};

const updateQuiz = () => {
  useAxios(UPDATE_QUIZ(quiz.id), {
    method: 'PUT',
    data: QUIZ_TO_UPDATE_QUIZ_MAPPER(quiz),
  }).then(() => router.push('/contests'));
};

const saveQuiz = () => {
  useAxios(POST_QUIZ, {
    method: 'POST',
    data: QUIZ_TO_SAVE_QUIZ_MAPPER(quiz),
  }).then(() => router.push('/contests'));
};

const onQuizCreatorClick = () => {
  if (isEdit.value) Object.assign(modal, QUIZ_UPDATE_MODAL());
  else Object.assign(modal, QUIZ_SAVE_MODAL());
  dialog.value = true;
};

const cancelQuizCreation = () => {
  Object.assign(modal, QUIZ_CANCEL_MODAL());
  dialog.value = true;
};
</script>

<style scoped>
.quiz-creator-wrapper {
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  max-width: 1400px;
}
</style>
