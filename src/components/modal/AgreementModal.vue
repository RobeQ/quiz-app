<template>
  <v-dialog :model-value="dialog" persistent>
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ text }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="$emit('update:dialog', false)"
        >
          {{ disagreeText }}
        </v-btn>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="$emit('update:dialog', false)"
        >
          {{ agreeText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
defineProps<{
  dialog: boolean;
  title: string;
  text: string;
  agreeText: string;
  disagreeText: string;
}>();

defineEmits(['update:dialog']);
</script>

<style scoped></style>
