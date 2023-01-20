<template>
  <v-container class="quiz-creator-wrapper">
    <v-card-title class="text-center justify-center py-2">
      <h2 class="font-weight-bold text-h5">Create new quiz</h2>
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
          <component :is="tabNameToComponentMap.get(item)" class="tab" />
        </v-card>
      </v-window-item>
    </v-window>
    <div class="text-end pa-2">
      <v-btn color="success" variant="outlined">Cancel</v-btn>
      <v-btn class="ml-3" color="success">Save</v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QuizSettings from '../../../../components/quiz-creator/settings/QuizSettings.vue';
import QuizQuestions from '../../../../components/quiz-creator/questions/QuizQuestions.vue';

const tab = ref('Settings');
const tabNameToComponentMap = new Map<string, any>([
  ['Settings', QuizSettings],
  ['Questions', QuizQuestions],
]);
</script>

<style scoped>
.quiz-creator-wrapper {
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  max-width: 1400px;
}
</style>
