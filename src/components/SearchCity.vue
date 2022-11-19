<template>
  <div class="col">
    <h2>Start by searching for a city</h2>

    <div class="search-country">
      <v-text-field
        clearable
        label="Type the name of a city here"
        variant="underlined"
        v-model="cityText"
        @keyup="(event) => searchCity(event)"
      ></v-text-field>
      <v-btn @click="searchCity(true)" class="btn" color="blue">Search</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCountriesStore } from "../stores/countries";

export default {
  data() {
    return {
      cityText: "",
      units: "metric",
    };
  },

  methods: {
    ...mapActions(useCountriesStore, ["setCountries", "setFirstTime"]),

    async searchCity(e) {
      if (e?.keyCode === 13 || e === true) {
        this.setFirstTime(false);
        await this.setCountries(this.cityText, this.units);
      }
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
