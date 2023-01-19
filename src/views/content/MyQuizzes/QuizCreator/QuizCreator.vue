<template>
  <v-container>
    <v-row justify="center">
      <v-card class="bg-basil" min-height="700px">
        <v-card-title class="text-center justify-center py-6">
          <h2 class="font-weight-bold text-h4 text-basil">Quiz creator</h2>
        </v-card-title>

        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
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
            <v-card class="bg-basil" flat min-height="550px">
              <component :is="tabNameToComponentMap.get(item)" class="tab" />
            </v-card>
          </v-window-item>
        </v-window>
        <div class="text-center quiz-creator-btns">
          <v-btn size="large" rounded="pill" color="success" variant="outlined">
            Cancel
          </v-btn>
          <v-btn
            class="quiz-save-btn"
            size="large"
            rounded="pill"
            color="success"
          >
            Save
          </v-btn>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QuizSettings from './QuizSettings.vue';
import QuizQuestions from './QuizQuestions.vue';

const tab = ref('Settings');
const tabNameToComponentMap = new Map<string, any>([
  ['Settings', QuizSettings],
  ['Questions', QuizQuestions],
]);
</script>

<style scoped>
.bg-basil {
  background-color: #fffbe6;
  min-width: 25rem;
  min-height: 20rem;
  width: 70rem;
}
.text-basil {
  color: #356859;
}

.quiz-creator-btns {
  padding: 2rem 0;
}

.quiz-save-btn {
  margin-left: 2rem;
}
</style>
