<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Spa-Weather-Test</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" expand-on-hover rail>
      <v-list :items="items">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">{{
          item.title
        }}</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>

    <v-bottom-navigation class="footer"
      >{{ currentYear }} Spa-Weather-Test
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Home",
          route: "/",
        },
      ],
    };
  },

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="css" scoped>
.router-link {
  background-color: beige;
}
.footer {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
