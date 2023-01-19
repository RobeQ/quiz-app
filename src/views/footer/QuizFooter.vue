<template>
  <v-footer class="bg-grey-darken-2 justify-center">
    <span>© {{ new Date().getFullYear() }} Vention Quiz</span>
    <v-btn
      v-for="icon in logos"
      :key="icon"
      class="mx-4"
      :icon="icon"
      variant="text"
    ></v-btn>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const logos = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]);
</script>

<style scoped>
.vention-footer {
  flex-shrink: 0;
}
</style>
