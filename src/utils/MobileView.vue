<template>
  <slot v-if="mobile" />
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
</script>

<style scoped></style>
