<template>
  <v-container class="w-75">
    <v-row justify="space-around">
      <v-col cols="12" sm="3" class="profile text-center">
        <v-avatar size="200" rounded="true" class="bg-grey-lighten-3">
          <v-img v-if="profile.imageSrc" cover src="images/woman1.png"></v-img>
          <h1 v-else class="avatar-letter vention-color">
            {{ profile.name[0] }}
          </h1>
        </v-avatar>
        <v-list-item
          class="mb-8"
          :title="profile.name"
          :subtitle="profile.role"
        ></v-list-item>
        <v-btn
          v-for="button in Object.values(Profile_Button_Type)"
          :key="button"
          class="w-75 mt-2 font-weight-bold"
          :variant="activeTab === button ? 'tonal' : 'text'"
          :color="activeTab === button ? 'success' : ''"
          @click="activeTab = button"
          >{{ button }}</v-btn
        >
      </v-col>
      <v-col cols="12" sm="8" class="text-center profile">
        <component
          :is="tabNameToComponentMap.get(activeTab)"
          v-model:profile="profile"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Profile_Button_Type } from '../../../util/buttons';
import ProfileSettings from '../../../components/profile/profile-settings/ProfileSettings.vue';
import ChangePassword from '../../../components/profile/change-password/ChangePassword.vue';
import { Role } from '../../../model/profile';

const activeTab = ref(Profile_Button_Type.BASIC_PROFILE_SETTINGS);
const profile = reactive({
  name: 'Emma Watson',
  nickname: 'emma_1',
  email: 'emma.watson@itechart-group.com',
  role: Role.USER,
  imageSrc: 'images/woman1',
});

const tabNameToComponentMap = new Map<Profile_Button_Type, any>([
  [Profile_Button_Type.BASIC_PROFILE_SETTINGS, ProfileSettings],
  [Profile_Button_Type.CHANGE_PASSWORD, ChangePassword],
]);
</script>

<style scoped>
.profile {
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%), 0 2px 14px 0 rgb(0 0 0 / 19%);
  border-radius: 5px;
}

.avatar-letter {
  font-weight: 600;
  font-size: 5rem;
}
</style>
