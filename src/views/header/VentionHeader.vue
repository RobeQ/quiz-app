<template>
  <v-app-bar class="app-header">
    <AppTitle />
    <v-spacer></v-spacer>
    <DesktopView>
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
    </DesktopView>

    <MobileView>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </MobileView>
  </v-app-bar>
  <MobileView>
    <MobileHeader v-model="drawer" />
  </MobileView>
</template>

<script setup lang="ts">
import { headerRoutes } from '@/router';
import AppTitle from './AppTitle.vue';
import LoginButton from './LoginButton.vue';
import HeaderButton from './HeaderButton.vue';
import DesktopView from '@/utils/DesktopView.vue';
import MobileView from '@/utils/MobileView.vue';
import MobileHeader from './AsideMenu.vue';
import { ref } from 'vue';

const drawer = ref(false);
</script>
<style scoped>
@import '@/style.css';

.pinned-features > * {
  margin-left: 10px;
}

.app-header {
  background-color: #fff;
}
.router-link-exact-active {
  color: var(--vention-color);
}
</style>
