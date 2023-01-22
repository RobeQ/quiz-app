<template>
  <v-sheet class="mx-auto overflow-y-auto pa-8 choice-question"
    ><v-text-field
      :model-value="questionText"
      label="Text*"
      :rules="[(v) => !!v || 'Field is required']"
      variant="solo"
      @input="$emit('update:questionText', $event.target.value)"
    ></v-text-field>
    <ChoiceAnswer
      v-for="(answer, order) in answers"
      :key="answer.id"
      v-model:label="answer.label"
      :order="order"
      @remove-answer="$emit('removeAnswer', answer.id)"
    >
      <v-checkbox-btn
        :model-value="selectedAnswers"
        :value="answer.id"
        class="pr-2"
        :disabled="!answer.label"
        color="success"
        @change="$emit('checkboxChange', $event.target.value)"
      ></v-checkbox-btn>
    </ChoiceAnswer>
    <v-btn class="w-100" @click="$emit('addAnswer')">Add answer</v-btn>
  </v-sheet>
</template>

<script setup lang="ts">
import ChoiceAnswer from './choice-answer/ChoiceAnswer.vue';
import { computed } from 'vue';
import { Answer } from '../../../../model/quiz';

const props = defineProps<{
  answers: Answer[];
  questionText: string;
}>();

defineEmits([
  'update:questionText',
  'checkboxChange',
  'removeAnswer',
  'addAnswer',
]);

const selectedAnswers = computed(() =>
  props.answers.filter((answer) => answer.checked).map((answer) => answer.id)
);
</script>

<style scoped></style>
