<template>
  <v-card min-height="550px">
    <v-row>
      <v-col cols="12" sm="4" class="bg-grey-lighten-5 questions">
        <v-sheet
          class="mx-auto overflow-y-auto bg-grey-lighten-5"
          min-height="550px"
          max-height="600px"
          rounded
          ><div
            v-for="(question, index) in quiz.questions"
            :key="question"
            :class="`question ${
              question.active ? 'bg-light-blue-lighten-5' : ''
            }`"
            @click="activateQuestion(index)"
          >
            {{ index + 1 }}. {{ question.text }}
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="8" class="question-form">
        <ChoiceQuestion
          v-model:question-text="activeQuestion.text"
          v-model:answers="activeQuestion.answers"
          @checkbox-change="onCheckboxChange"
          @remove-checkbox="onCheckboxRemove"
        />
      </v-col>
    </v-row>
    {{ activeQuestion }}
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ChoiceQuestion from './ChoiceQuestion.vue';
import { QUESTION_TYPE } from '../../../../model/quiz';

const quiz = ref({
  questions: [
    {
      text: 'Jak ma na imię Monika Brodka?',
      type: QUESTION_TYPE.SINGLE_CHOICE,
      answers: [
        { label: 'Monika', checked: true },
        { label: 'Barbara', checked: true },
        { label: 'Anna', checked: true },
        { label: 'Mariuszek', checked: false },
      ],
      active: true,
    },
    {
      text: 'Czy ziemia jest okrągła?',
      type: QUESTION_TYPE.TRUE_FALSE,
      answers: [
        { label: 'Tak', checked: true },
        { label: 'Nie', checked: true },
      ],
      active: false,
    },
  ],
});

const onCheckboxChange = (label: string) => {
  const changedCheckbox = activeQuestion.value?.answers.find(
    (answer) => answer.label === label
  );
  if (changedCheckbox) changedCheckbox.checked = !changedCheckbox.checked;
};

const onCheckboxRemove = (label: string) => {
  if (activeQuestion.value)
    activeQuestion.value.answers = activeQuestion.value.answers.filter(
      (answer) => answer.label != label
    );
};

const activateQuestion = (index: number) => {
  quiz.value.questions.forEach((q, i) =>
    i === index ? (q.active = true) : (q.active = false)
  );
};

const activeQuestion = computed(() =>
  quiz.value.questions.find((question) => question.active)
);
</script>

<style scoped>
.question {
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.questions {
  padding-right: 0;
}

.question-form {
  padding-left: 0;
}
</style>
