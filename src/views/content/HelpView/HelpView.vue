<template>
  <v-container class="w-75"
    ><h3 class="vention-color">
      If you have encountered a problem please contact one of our happiness
      managers
    </h3>
    <v-divider class="mt-3"></v-divider>
    <v-list class="bg-grey-lighten-5 mt-4">
      <v-list-item
        v-for="manager in managers"
        :key="manager"
        class="pa-2"
        :title="manager.name"
        :subtitle="manager.email"
      >
        <template #prepend>
          <v-avatar><v-img :src="manager.imageSrc"></v-img></v-avatar
        ></template>
        <template #append>
          <v-btn
            variant="plain"
            prepend-icon="mdi-microsoft-teams"
            color="indigo-darken-1"
            size="x-large"
            :href="`https://teams.microsoft.com/l/chat/0/0?users=${manager.email}`"
            target="_blank"
          ></v-btn></template></v-list-item></v-list
  ></v-container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const managers = reactive([
  {
    name: 'Emma Watson',
    email: 'emma.watson@itechart-group.com',
    imageSrc: 'images/woman1.png',
  },
  {
    name: 'Sarah Mardini',
    email: 'sarah.mardini@itechart-group.com',
    imageSrc: 'images/woman2.png',
  },
  {
    name: 'Lucy Hale',
    email: 'lucy.hale@itechart-group.com',
    imageSrc: 'images/woman3.png',
  },
]);
</script>

<style scoped></style>
