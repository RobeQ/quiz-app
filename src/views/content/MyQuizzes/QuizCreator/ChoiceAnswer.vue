<template>
  <div class="d-flex pa-1">
    <slot />
    <v-text-field
      :prepend-inner-icon="`mdi-alpha-${orderLetter}-circle-outline`"
      variant="solo"
      :rules="[(v) => !!v || 'Field is required']"
      :model-value="label"
      @input="$emit('update:label', $event.target.value)"
    ></v-text-field
    ><v-btn
      class="ma-2"
      variant="text"
      icon="mdi-delete"
      color="red-lighten-2"
      :value="label"
      @click="$emit('removeCheckbox', label)"
    ></v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  label: string;
  order: number;
}>();
defineEmits(['update:label', 'removeCheckbox']);

const orderLetter = computed(() => ['a', 'b', 'c', 'd', 'e'][props.order]);
</script>

<style scoped></style>
