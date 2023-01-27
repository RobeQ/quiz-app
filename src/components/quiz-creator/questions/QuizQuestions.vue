<template>
  <v-container>
    <v-row v-if="quiz.questions.length">
      <v-col cols="12" sm="3">
        <v-sheet max-height="500px" class="mx-auto overflow-y-auto" rounded>
          <div
            v-for="(question, index) in quiz.questions"
            :key="question.id"
            class="question-wrapper pa-1"
            :class="`${
              question.id === activeQuestionId ? 'bg-grey-lighten-3' : ''
            }`"
          >
            <span class="question" @click="activateQuestion(question.id)"
              >{{ index + 1 }}. {{ question.text }}</span
            >
            <v-btn
              class="align-self-center"
              icon="mdi-delete"
              variant="text"
              size="small"
              color="red-lighten-2"
              @click="$emit('removeQuestion', question.id)"
            ></v-btn>
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
            v-model:question-time="activeQuestion.time"
            v-model:group-id="activeQuestion.group"
            v-model:feedback="activeQuestion.feedback"
            @checkbox-change="changeCheckbox"
            @remove-answer="removeAnswer"
            @add-answer="addAnswer"
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
import { NEW_QUESTION, Quiz } from '@/model/quiz';

const props = defineProps<{
  quiz: Quiz;
}>();

defineEmits(['removeQuestion']);

const activeQuestionId = ref(props.quiz.questions[0]?.id);
const snackbar = ref(false);
const snackbarText = ref('');

const addNewQuestion = () => {
  const newQuestion = NEW_QUESTION();
  Object.assign(props.quiz.questions, [...props.quiz.questions, newQuestion]);
  activateQuestion(newQuestion.id);
};

const addAnswer = () => {
  if (activeQuestion.value?.answers.length === 5) {
    snackbarText.value = 'A maximum of five answers are allowed.';
    snackbar.value = true;
    return;
  }
  if (activeQuestion.value) {
    activeQuestion.value.answers = [
      ...activeQuestion.value.answers,
      { id: Math.random(), content: '', isCorrect: false },
    ];
  }
};

const changeCheckbox = (id: number) => {
  const changedCheckbox = activeQuestion.value?.answers.find(
    (answer) => answer.id === Number(id)
  );
  if (changedCheckbox) changedCheckbox.isCorrect = !changedCheckbox.isCorrect;
};

const removeAnswer = (id: number) => {
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

const activateQuestion = (questionId: number | undefined) => {
  props.quiz.questions.forEach((question) => {
    if (question.id === questionId) activeQuestionId.value = questionId;
  });
};

const activeQuestion = computed(() =>
  props.quiz.questions.find(
    (question) => question.id === activeQuestionId.value
  )
);
</script>

<style scoped>
.question-wrapper {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1rem;
}

.question {
  cursor: pointer;
  align-self: center;
}
</style>
