<template>
  <div class="bg-vention-grey">
    <v-divider class="divider-margin"></v-divider>
    <v-footer class="justify-center bg-vention-grey">
      <span>© {{ new Date().getFullYear() }} Vention Quiz</span>
      <v-btn
        v-for="icon in logos"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </v-footer>
  </div>
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

.divider-margin {
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
