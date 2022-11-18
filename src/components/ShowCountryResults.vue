<template>
  <div class="col" v-if="getCountryNames && getCountryNames.length === 0">
    <h2>Sorry no country found.</h2>
  </div>
  <div class="col" v-else>
    <h2>Now choose the country of your city</h2>
    <div class="search-country">
      <v-select
        label="Select the country of the city you want to search"
        :items="getCountryNames"
        variant="underlined"
        v-model="countryText"
      ></v-select>
      <v-btn @click="searchCountry" class="btn" color="blue">Search</v-btn>
    </div>
  </div>
</template>

<script>
import { useCountriesStore } from "../stores/countries";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      countryText: "",
      units: "metric",
    };
  },

  async mounted() {},

  computed: {
    ...mapState(useCountriesStore, ["getCountries"]),

    getCountryNames() {
      return this.getCountries?.length
        ? this.getCountries?.map((obj) => obj?.country)
        : [];
    },
  },

  methods: {
    ...mapActions(useCountriesStore, ["setWeather"]),

    async searchCountry() {
      let countryData = this.getCountries.find(
        (obj) => obj?.country === this.countryText
      );

      if (countryData?.lat && countryData?.lon) {
        await this.setWeather(countryData?.lat, countryData?.lon, this.units);
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
