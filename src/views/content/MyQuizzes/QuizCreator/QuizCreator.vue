<template>
  <v-container class="quiz-creator-wrapper">
    <v-card-title class="text-center justify-center py-2">
      <h2 class="font-weight-bold text-h5">
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
            class="tab"
          />
        </v-card>
      </v-window-item>
    </v-window>
    <div class="text-end pa-2">
      <v-btn color="success" variant="outlined">Cancel</v-btn>
      <v-btn class="ml-3" color="success" @click="onQuizCreatorClick">{{
        isEdit ? 'Update' : 'Save'
      }}</v-btn>
      <AgreementModal
        v-model:dialog="dialog"
        class="w-50"
        text="Are you sure you want to upgrade quiz?"
        agree-text="Agree"
        disagree-text="Disagree"
        title="Update quiz"
      />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import QuizSettings from '../../../../components/quiz-creator/settings/QuizSettings.vue';
import QuizQuestions from '../../../../components/quiz-creator/questions/QuizQuestions.vue';
import { useRoute } from 'vue-router';
import { GET_QUIZ_URL } from '../../../../api/api-url';
import { useAxios } from '@vueuse/integrations/useAxios';
import { EMPTY_QUIZ } from '../../../../model/quiz';
import AgreementModal from '../../../../components/modal/AgreementModal.vue';

const route = useRoute();

const tab = ref('Settings');
const quiz = reactive(EMPTY_QUIZ());
const dialog = ref(false);

onMounted(async () => {
  if (isEdit.value) {
    const { data } = await useAxios(GET_QUIZ_URL(Number(route.params.id)));
    Object.assign(quiz, data.value);
  }
});

const tabNameToComponentMap = new Map<string, any>([
  ['Settings', QuizSettings],
  ['Questions', QuizQuestions],
]);

const updateQuiz = () => {
  dialog.value = true;
  console.log('UPDATE QUIZ');
};
const saveQuiz = () => {
  dialog.value = true;
  console.log('SAVE QUIZ');
};

const onQuizCreatorClick = () => {
  if (isEdit.value) updateQuiz();
  else saveQuiz();
};

const isEdit = computed(() => route.params.id);
</script>

<style scoped>
.quiz-creator-wrapper {
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  max-width: 1400px;
}
</style>
