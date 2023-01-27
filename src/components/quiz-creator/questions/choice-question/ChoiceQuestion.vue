<template>
  <v-sheet class="mx-auto overflow-y-auto pa-8 choice-question">
    <v-container class="bg-green-lighten-5 rounded"
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
        v-model:label="answer.content"
        :order="order"
        @remove-answer="$emit('removeAnswer', answer.id)"
      >
        <v-checkbox-btn
          :model-value="selectedAnswers"
          :value="answer.id"
          class="pr-2"
          :disabled="!answer.content"
          color="success"
          @change="$emit('checkboxChange', $event.target.value)"
        ></v-checkbox-btn>
      </ChoiceAnswer>
      <v-btn
        class="w-100"
        variant="elevated"
        color="success"
        @click="$emit('addAnswer')"
        >Add answer</v-btn
      >
    </v-container>
    <v-text-field
      class="mt-8"
      :model-value="feedback"
      label="Feedback"
      variant="solo"
      @input="$emit('update:feedback', $event.target.value)"
    ></v-text-field>
    <v-slider
      :model-value="questionTime"
      class="align-center"
      :max="60"
      :min="4"
      hide-details
      rounded
      label="Time for answer in seconds"
      @update:model-value="$emit('update:questionTime', Math.round($event))"
    >
      <template #append>
        <v-text-field
          :model-value="questionTime"
          hide-details
          single-line
          density="compact"
          type="number"
          style="width: 70px"
          disabled
        ></v-text-field>
      </template>
    </v-slider>
    <v-autocomplete
      :model-value="groupName"
      class="mt-4 group-select"
      label="Question group"
      :items="groupNames"
      variant="solo"
      @update:model-value="$emit('update:group-id', getGroupIdByName($event))"
    ></v-autocomplete>
  </v-sheet>
</template>

<script setup lang="ts">
import ChoiceAnswer from './choice-answer/ChoiceAnswer.vue';
import { computed, onMounted, reactive } from 'vue';
import { Answer, Group } from '@/model/quiz';
import { useAxios } from '@vueuse/integrations/useAxios';
import { GET_QUESTION_GROUPS } from '@/api/api-url';

const props = defineProps<{
  answers: Answer[];
  questionText: string;
  questionTime: number;
  groupId: number;
  feedback: string;
}>();

defineEmits([
  'update:questionText',
  'update:feedback',
  'update:questionTime',
  'checkboxChange',
  'removeAnswer',
  'addAnswer',
  'update:group-id',
]);

const groups = reactive<Array<Group>>([]);

const groupNames = computed(() => groups.map((group) => group.name));

const groupName = computed(
  () => groups.find((group) => group.id === props.groupId)?.name
);

const selectedAnswers = computed(() =>
  props.answers.filter((answer) => answer.isCorrect).map((answer) => answer.id)
);

onMounted(async () => {
  const { data } = await useAxios(GET_QUESTION_GROUPS);
  Object.assign(groups, data.value);
});

const getGroupIdByName = (groupName: string) => {
  return groups.find((group) => group.name === groupName)?.id;
};
</script>

<style scoped></style>
