<template>
  <v-navigation-drawer temporary location="right">
    <v-list>
      <!--TODO: change to user data-->
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="route in headerRoutes" :key="route.name" link>
        <RouterLink class="nav-link" :to="route.path">
          <v-list-item
            :prepend-icon="route.icon"
            :title="route.name"
            :value="route.name"
          ></v-list-item>
        </RouterLink>
      </v-list-item>
    </v-list>

    <template #append>
      <div class="pa-2">
        <v-btn class="button" block>Log out</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { headerRoutes } from '@/router';
</script>

<style scoped>
@import '@/style.css';
.router-link-exact-active {
  color: var(--vention-color);
}
</style>
