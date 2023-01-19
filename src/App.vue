<template>
  <v-app class="bg-grey-lighten-3">
    <QuizHeader />
    <div class="vention-content"><QuizContent /></div>
    <div class="vention-footer"><QuizFooter /></div>
  </v-app>
</template>

<script setup lang="ts">
import QuizFooter from './views/footer/QuizFooter.vue';
import QuizHeader from './views/header/QuizHeader.vue';
import QuizContent from './views/content/QuizContent.vue';
</script>

<style scoped>
.vention-content {
  flex: 1 0 auto;
}

.vention-footer {
  flex-shrink: 0;
}
</style>
