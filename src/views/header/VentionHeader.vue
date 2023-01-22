<template>
  <v-app-bar class="app-header">
    <v-app-bar-title class="vention-title">
      <span class="vention-quiz-logo" @click="$router.push('/')"
        >Vention Quiz</span
      >
      <span class="itechart-logo">:iTechArt</span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <span class="pinned-features">
      <HeaderButton
        v-for="route in headerRoutes"
        :key="route"
        :icon="route.icon"
        :label="route.name"
        :path="route.path"
      />
    </span>
    <v-spacer />
    <v-spacer />
    <LoginButton />
  </v-app-bar>
</template>

<script setup lang="ts">
import HeaderButton from './HeaderButton.vue';
import { headerRoutes } from '../../router';
import LoginButton from './LoginButton.vue';
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

.pinned-features > * {
  margin-left: 10px;
}

.app-header {
  background-color: #fff;
}
</style>
