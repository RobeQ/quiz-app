<template>
  <RouterLink class="nav-link" :to="props.path">
    <v-btn
      rounded
      class="button noFlush"
      :prepend-icon="icon"
      variant="text"
      :ripple="true"
    >
      {{ props.label }}
    </v-btn>
  </RouterLink>
</template>

<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { RouteRecordName } from 'vue-router';

const props = defineProps<{
  icon: string | FunctionalComponent;
  label: string | RouteRecordName;
  path: string;
}>();
</script>

<style scoped>
@import '../../style.css';
.nav-link {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: var(--vention-color);
}

.noFlush {
  user-select: none;
}

</style>
