<template>
  <v-app>
    <Header />
    <div class="vention-content bg-vention-grey"><QuizContent /></div>
    <div class="vention-footer"><Footer /></div>
  </v-app>
</template>

<script setup lang="ts">
import Footer from './views/footer/VentionFooter.vue';
import Header from './views/header/VentionHeader.vue';
import QuizContent from './views/content/MainPanel.vue';
</script>

<style scoped>
.vention-content {
  flex: 1 0 auto;
}

.vention-footer {
  flex-shrink: 0;
}
</style>
