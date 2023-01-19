<template>
  <v-sheet
    class="mx-auto overflow-y-auto pa-8"
    min-height="550px"
    max-height="600px"
    ><v-text-field
      :model-value="questionText"
      label="Text*"
      :rules="[(v) => !!v || 'Field is required']"
      variant="solo"
      @input="$emit('update:questionText', $event.target.value)"
    ></v-text-field>
    <div v-for="(answer, i) in answers" :key="i">
      <ChoiceAnswer
        v-model:label="answer.label"
        :order="i"
        @remove-checkbox="$emit('removeCheckbox', $event)"
      >
        <v-checkbox-btn
          :model-value="selectedAnswers"
          :value="answer.label"
          class="pr-2"
          color="success"
          @change="$emit('checkboxChange', $event.target.value)"
        ></v-checkbox-btn>
      </ChoiceAnswer>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import ChoiceAnswer from './ChoiceAnswer.vue';
import { computed } from 'vue';
import { Answer } from '../../../../model/quiz';

const props = defineProps<{
  answers: Answer[];
  questionText: string;
}>();

defineEmits(['update:questionText', 'checkboxChange', 'removeCheckbox']);

const selectedAnswers = computed(() =>
  props.answers.filter((answer) => answer.checked).map((answer) => answer.label)
);
</script>

<style scoped></style>
