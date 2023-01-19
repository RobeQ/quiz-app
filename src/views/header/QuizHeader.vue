<template>
  <v-app-bar>
    <template #image>
      <v-img
        gradient="to top right, RGBA(151,125,185,0.9), rgba(157,122,199,.8)"
      ></v-img>
    </template>
    <v-app-bar-title class="vention-title">
      <span class="vention-quiz-logo" @click="$router.push('/')"
        >Vention Quiz</span
      >
      <span class="itechart-logo">:iTechArt</span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <span class="pinned-features">
      <v-btn prepend-icon="mdi-controller" variant="outlined"> Play </v-btn>
      <v-btn
        prepend-icon="mdi-puzzle"
        variant="outlined"
        @click="$router.push('/contests')"
      >
        My Quizzes
      </v-btn>
      <v-btn
        prepend-icon="mdi-account-cog"
        variant="outlined"
        @click="$router.push('/profile')"
      >
        My Profile
      </v-btn>
      <v-btn
        prepend-icon="mdi-calendar-text-outline"
        variant="outlined"
        @click="$router.push('/rules')"
      >
        Rules
      </v-btn>
      <v-btn prepend-icon="mdi-help" variant="outlined"> Help </v-btn>
    </span>
    <v-spacer />
    <v-spacer />
    <v-btn prepend-icon="mdi-login" variant="flat" color="white"> Login </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

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
</style>
