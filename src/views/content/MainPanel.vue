<template>
  <v-main>
    <v-container class="main-panel">
      <router-view />
    </v-container>
  </v-main>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-panel {
  margin-top: 1.5rem;
  border-radius: 0.4rem;
}
</style>
