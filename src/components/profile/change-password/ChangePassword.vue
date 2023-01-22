<template>
  <h3 class="vention-color">Change password</h3>
  <v-text-field
    class="pa-2"
    label="Old password*"
    variant="outlined"
  ></v-text-field>
  <v-text-field
    class="pa-2"
    label="New password*"
    variant="outlined"
  ></v-text-field>
  <v-text-field
    class="pa-2"
    label="Repeat new password*"
    variant="outlined"
  ></v-text-field>
  <div class="change-password-buttons">
    <v-btn class="change-password-button" color="success" variant="tonal"
      >Save changes</v-btn
    ><v-btn class="change-password-button" variant="outlined">Cancel</v-btn>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.change-password-buttons {
  display: flex;
  justify-content: space-around;
}

.change-password-button {
  width: 48%;
}
</style>
