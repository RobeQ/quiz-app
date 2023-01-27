<template>
  <v-app-bar-title class="vention-title">
    <span class="vention-quiz-logo" @click="$router.push('/')"
      >Vention Quiz</span
    >
    <DesktopView>
      <span class="itechart-logo">:iTechArt</span>
    </DesktopView>
  </v-app-bar-title>
</template>

<script setup lang="ts">
import DesktopView from '@/utils/DesktopView.vue';
</script>

<style scoped>
.vention-title {
  font-size: 1.1rem;
  margin-left: 0;
  font-weight: 500;
}

.vention-quiz-logo {
  cursor: pointer;
  font-weight: 600;
}

.itechart-logo {
  margin-left: 10px;
  padding: 6px 0 6px 10px;
  border-left: 1px solid grey;
}
</style>
