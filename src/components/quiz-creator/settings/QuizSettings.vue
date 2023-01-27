<template>
  <v-container>
    <v-text-field
      :model-value="quiz.name"
      label="Quiz name*"
      type="input"
      :rules="[(v) => !!v || 'Field is required']"
      clearable
      variant="solo"
      @input="$emit('update:name', $event.target.value)"
    ></v-text-field>
    <v-autocomplete
      :model-value="categoryName"
      label="Quiz category"
      :items="categoryNames"
      variant="solo"
      @update:model-value="
        $emit('update:category', getCategoryIdByName($event))
      "
    ></v-autocomplete>
    <v-textarea
      :model-value="quiz.description"
      label="Quiz description"
      rows="2"
      auto-grow
      clearable
      variant="solo"
      @input="$emit('update:description', $event.target.value)"
    ></v-textarea>
    <v-text-field
      :model-value="quiz.imageSrc"
      label="Image src"
      type="input"
      clearable
      variant="solo"
      @input="$emit('update:imageSrc', $event.target.value)"
    ></v-text-field>
  </v-container>
</template>

<script setup lang="ts">
import { Category, Quiz } from '@/model/quiz';
import { computed, onMounted, reactive } from 'vue';
import { useAxios } from '@vueuse/integrations/useAxios';
import { GET_QUIZ_CATEGORIES } from '@/api/api-url';

const props = defineProps<{
  quiz: Quiz;
}>();

defineEmits([
  'update:name',
  'update:category',
  'update:description',
  'update:imageSrc',
]);

const categories = reactive<Array<Category>>([]);

const categoryNames = computed(() =>
  categories.map((category) => category.name)
);

const categoryName = computed(
  () => categories.find((category) => category.id === props.quiz.category)?.name
);

const getCategoryIdByName = (categoryName: string) => {
  return categories.find((category) => category.name === categoryName)?.id;
};

onMounted(async () => {
  const { data } = await useAxios(GET_QUIZ_CATEGORIES);
  Object.assign(categories, data.value);
});
</script>

<style scoped></style>
