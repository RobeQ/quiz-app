<template>
  <v-container>
    <v-row v-if="quiz.questions.length">
      <v-col cols="12" sm="3">
        <v-sheet max-height="500px" class="mx-auto overflow-y-auto" rounded>
          <div
            v-for="(question, index) in quiz.questions"
            :key="question.id"
            class="question"
            :class="`${question.active ? 'bg-grey-lighten-3' : ''}`"
            @click="activateQuestion(question.id)"
          >
            {{ index + 1 }}. {{ question.text }}
          </div>
          <div class="text-center mt-4">
            <v-btn
              prepend-icon="mdi-plus"
              variant="outlined"
              color="info"
              @click="addNewQuestion"
              >Add new question</v-btn
            >
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="9">
        <v-sheet max-height="500px" class="mx-auto overflow-y-auto" rounded>
          <ChoiceQuestion
            v-model:question-text="activeQuestion.text"
            v-model:answers="activeQuestion.answers"
            @checkbox-change="onCheckboxChange"
            @remove-answer="onAnswerRemove"
            @add-answer="onAnswerAdd"
          />
        </v-sheet>
      </v-col>
    </v-row>
    <div v-else class="text-center mt-4">
      <v-btn
        prepend-icon="mdi-plus"
        variant="outlined"
        size="large"
        color="info"
        @click="addNewQuestion"
        >Add new question</v-btn
      >
    </div>
    <v-snackbar v-model="snackbar" timeout="2500"
      >{{ snackbarText
      }}<template #actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template></v-snackbar
    >
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ChoiceQuestion from './choice-question/ChoiceQuestion.vue';
import { NEW_QUESTION, Quiz } from '../../../model/quiz';

const props = defineProps<{
  quiz: Quiz;
}>();

const snackbar = ref(false);
const snackbarText = ref('');

const addNewQuestion = () => {
  const newQuestion = NEW_QUESTION();
  Object.assign(props.quiz.questions, [...props.quiz.questions, newQuestion]);
  activateQuestion(newQuestion.id);
};

const onAnswerAdd = () => {
  if (activeQuestion.value?.answers.length === 5) {
    snackbarText.value = 'A maximum of five answers are allowed.';
    snackbar.value = true;
    return;
  }
  if (activeQuestion.value) {
    activeQuestion.value.answers = [
      ...activeQuestion.value.answers,
      { id: Math.random(), label: '', checked: false },
    ];
  }
};

const onCheckboxChange = (id: number) => {
  const changedCheckbox = activeQuestion.value?.answers.find(
    (answer) => answer.id === Number(id)
  );
  if (changedCheckbox) changedCheckbox.checked = !changedCheckbox.checked;
};

const onAnswerRemove = (id: number) => {
  if (activeQuestion.value?.answers.length === 2) {
    snackbarText.value = 'At least two answers are required.';
    snackbar.value = true;
    return;
  }
  if (activeQuestion.value) {
    activeQuestion.value.answers = activeQuestion.value.answers.filter(
      (answer) => answer.id != id
    );
  }
};

const activateQuestion = (questionId: number) => {
  props.quiz.questions.forEach((question) =>
    question.id === questionId
      ? (question.active = true)
      : (question.active = false)
  );
};

const activeQuestion = computed(() =>
  props.quiz.questions.find((question) => question.active)
);
</script>

<style scoped>
.question {
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}
</style>
