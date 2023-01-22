<template>
  <h3 class="vention-color">Basic profile settings</h3>
  <v-text-field
    :model-value="profile.nickname"
    class="pa-2"
    label="Nickname*"
    variant="outlined"
  ></v-text-field>
  <v-text-field
    :model-value="profile.email"
    class="pa-2"
    label="Email*"
    variant="outlined"
    disabled
  ></v-text-field>
  <div class="profile-buttons">
    <v-btn class="profile-button" color="success" variant="tonal"
      >Save changes</v-btn
    ><v-btn class="profile-button" variant="outlined">Cancel</v-btn>
  </div>
</template>

<script setup lang="ts">
import { Profile } from '../../../model/profile';

defineProps<{
  profile: Profile;
}>();
</script>

<style scoped>
.profile-buttons {
  display: flex;
  justify-content: space-around;
}

.profile-button {
  width: 48%;
}
</style>
