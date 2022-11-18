<template>
  <v-app>
    <v-app-bar
      >v-app-bar-area
      <RouterLink class="router-link" to="/">Home</RouterLink>
      <RouterLink class="router-link" to="/about">About</RouterLink>
    </v-app-bar>

    <v-navigation-drawer>v-navigation-drawer area</v-navigation-drawer>

    <v-main>
      <v-container>Content area</v-container>
    </v-main>

    <v-bottom-navigation>v-bottom-navigator</v-bottom-navigation>
  </v-app>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {};
</script>

<style scoped></style>
