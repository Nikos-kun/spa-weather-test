<template>
  <div class="col">
    <h2>Start by searching for a country</h2>

    <div class="search-country">
      <v-text-field
        clearable
        label="Search for a country"
        variant="underlined"
        v-model="countryText"
      ></v-text-field>
      <v-btn @click="searchCountry" class="btn" color="blue">Search</v-btn>
    </div>
  </div>
</template>

<script>
import { geocodingAPI } from "../services/geocodingAPI";

export default {
  data() {
    return {
      countryText: "",
    };
  },

  methods: {
    async searchCountry() {
      res = await geocodingAPI.searchByCity(this.countryText, "metric");
    },
  },
};
</script>

<style lang="css" scoped>
.col {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.search-country {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 500px;
}

.btn {
  margin-left: 10px;
}
</style>
