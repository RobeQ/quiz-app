<template>
  <v-container class="play-view">
    <div class="play-code-area">
      <v-img src="images/vention_logo.png" class="text-center"></v-img>
      <div class="bg-white rounded pa-4">
        <input placeholder="Game PIN code" class="code-input" />
        <v-btn class="w-100 mt-2 bg-grey-darken-3 font-weight-bold enter-button"
          >Enter</v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.play-code-area {
  margin-bottom: 14rem;
}

.play-view {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9d7b93cc;
  height: 80vh;
  border-radius: 10px;
}

.code-input {
  width: 100%;
  min-height: 2.375rem;
  max-height: 48px;
  line-height: 2.375rem;
  text-align: center;
  max-width: 20rem;
  min-width: 6.25rem;
  color: rgb(51, 51, 51);
  outline: none;
  font-size: 1rem;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 0.625rem;
  font-weight: 700;
  font-family: Montserrat, 'Noto Sans Arabic', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  border: 0.125rem solid rgb(204, 204, 204);
  background-color: rgb(255, 255, 255);
  padding: 0.25rem 0.375rem;
  transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
}

.code-input:focus {
  border: 0.125rem solid rgb(51, 51, 51);
  outline: currentcolor auto 0.3125rem;
  outline-offset: -0.125rem;
}

.enter-button {
  max-width: 20rem;
  min-width: 6.25rem;
  min-height: 2.375rem;
  max-height: 48px;
  height: 50px;
}
</style>
