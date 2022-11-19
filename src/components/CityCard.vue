<template>
  <div v-if="firstTime"></div>
  <div class="col" v-if="!firstTime && getCountryObjects.length === 0">
    <h2>Sorry no cities found.</h2>
    <p>Check to see if you typed your city correctly, or try another city.</p>
  </div>
  <div
    v-if="getCountryObjects && getCountryObjects.length > 0"
    class="city-cards-div"
  >
    <v-card
      class="mx-auto country-cards"
      max-width="344"
      v-for="(city, i) in getCountryObjects"
      :key="i"
    >
      <v-card-text>
        <p>City name:</p>
        <p class="text-h4 text--primary">{{ city.name }}</p>
        <p>Country code:</p>
        <p class="text--primary">
          {{ city.country }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          variant="text"
          color="blue"
          @click="searchWeather(city.lat, city.lon)"
        >
          Click to see the weather
        </v-btn>
      </v-card-actions>
    </v-card>
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

  computed: {
    ...mapState(useCountriesStore, ["getCountries", "firstTime"]),

    getCountryObjects() {
      return this.getCountries?.length ? this.getCountries : [];
    },
  },

  methods: {
    ...mapActions(useCountriesStore, [
      "setCountries",
      "setFirstTime",
      "setWeather",
      "setShowWeatherModal",
    ]),

    async searchWeather(lat, lon) {
      await this.setWeather(lat, lon, this.units);
      this.setShowWeatherModal(true);
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
.city-cards-div {
  background-color: #dedede;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  border-style: solid;
}

.country-cards {
  background-color: #f2e8d9;
  margin: 10px;
  width: 300px;
}
</style>
