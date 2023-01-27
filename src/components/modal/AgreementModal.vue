<template>
  <v-dialog :model-value="dialog" persistent>
    <v-card border rounded class="pa-3">
      <v-card-title class="text-h5">
        {{ modal.title }}
      </v-card-title>
      <v-card-text class="text-h7">{{ modal.text }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green-darken-1"
          variant="outlined"
          @click="$emit('update:dialog', false)"
        >
          {{ modal.disagreeText }}
        </v-btn>
        <v-btn
          color="green-darken-1"
          variant="elevated"
          @click="$emit('agree', modal.action)"
        >
          {{ modal.agreeText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { QuizActionModal } from '@/model/modal';

defineProps<{
  dialog: boolean;
  modal?: QuizActionModal;
}>();

defineEmits(['update:dialog', 'agree']);
</script>

<style scoped></style>
