<template>
  <v-container class="w-75 d-flex justify-space-around">
    <div
      class="w-100 bg-grey-lighten-3 pa-3 rounded ma-6 border category-panel"
    >
      <h4 class="pa-4 text-center vention-color">Quiz category panel</h4>
      <v-text-field
        v-model="newCategoryName"
        clearable
        label="Category name"
        hide-details
        variant="solo"
      ></v-text-field
      ><v-btn class="w-100 mt-6 mb-6" color="success" @click="addNewCategory"
        >Add new category</v-btn
      >
      <v-autocomplete
        label="Available quiz categories"
        :items="categoryNames"
        variant="solo"
      ></v-autocomplete>
    </div>
    <div
      class="w-100 bg-grey-lighten-3 pa-3 rounded ma-6 border category-panel"
    >
      <h4 class="pa-4 text-center vention-color">Question group panel</h4>
      <v-text-field
        v-model="newGroupName"
        clearable
        label="Group name"
        hide-details
        variant="solo"
      ></v-text-field
      ><v-btn class="w-100 mt-6 mb-6" color="success" @click="addNewGroup"
        >Add new group</v-btn
      >
      <v-autocomplete
        label="Available question groups"
        :items="groupNames"
        variant="solo"
      ></v-autocomplete>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { useAxios } from '@vueuse/integrations/useAxios';
import {
  GET_QUESTION_GROUPS,
  GET_QUIZ_CATEGORIES,
  POST_CATEGORY,
  POST_GROUP,
} from '@/api/api-url';
import { Category, Group } from '@/model/quiz';

const categories = reactive<Array<Category>>([]);
const groups = reactive<Array<Group>>([]);
const newCategoryName = ref('');
const newGroupName = ref('');

const categoryNames = computed(() =>
  categories.map((category) => category.name)
);

const groupNames = computed(() => groups.map((group) => group.name));

onMounted(async () => {
  await loadCategories();
  await loadGroups();
});

const addNewCategory = async () => {
  if (!newCategoryName.value) return;
  await useAxios(POST_CATEGORY, {
    method: 'POST',
    data: { name: newCategoryName.value },
  });
  newCategoryName.value = '';
  await loadCategories();
};

const addNewGroup = async () => {
  if (!newGroupName.value) return;
  await useAxios(POST_GROUP, {
    method: 'POST',
    data: { name: newGroupName.value },
  });
  newGroupName.value = '';
  await loadGroups();
};

const loadCategories = async () => {
  const { data } = await useAxios(GET_QUIZ_CATEGORIES);
  Object.assign(categories, data.value);
};

const loadGroups = async () => {
  const { data } = await useAxios(GET_QUESTION_GROUPS);
  Object.assign(groups, data.value);
};
</script>

<style scoped>
.category-panel {
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
</style>
