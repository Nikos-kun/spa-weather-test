<template>
  <v-row justify="center">
    <v-dialog v-model="showWeatherModal" scrollable>
      <v-card>
        <v-card-title>Weather</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px" class="city-modal">
          <!-- <div>
            <h3>City info:</h3>
            <p>City name: {{ showWeatherInfo.city.name }}</p>
            <p>Country: {{ showWeatherInfo.city.country }}</p>
            <p>Population: {{ showWeatherInfo.city.population }}</p>
            <p>Sunrise: {{ showWeatherInfo.city.sunrise }}</p>
            <p>Sunset: {{ showWeatherInfo.city.sunset }}</p>
            <p>Timezone: {{ showWeatherInfo.city.timezone }}</p>
          </div> -->
          <div>
            <h3>Main:</h3>
            <p>Feels like: {{ todaysWeather?.[0]?.main?.feels_like }}</p>
            <p>Ground level: {{ todaysWeather?.[0]?.main?.grnd_level }}</p>
            <p>Humidity: {{ todaysWeather?.[0]?.main?.humidity }}</p>
            <p>Pressure: {{ todaysWeather?.[0]?.main?.pressure }}</p>
            <p>Sea level: {{ todaysWeather?.[0]?.main?.sea_level }}</p>
            <p>Temp kf: {{ todaysWeather?.[0]?.main?.temp }}</p>
            <p>Temp max: {{ todaysWeather?.[0]?.main?.temp_max }}</p>
            <p>Temp min: {{ todaysWeather?.[0]?.main?.temp_min }}</p>
          </div>
          <div>
            <h3>Weather:</h3>
            <p>
              Description: {{ todaysWeather?.[0]?.weather?.[0]?.description }}
            </p>
            <p>Icon: {{ todaysWeather?.[0]?.weather?.[0]?.icon }}</p>
            <p>Main: {{ todaysWeather?.[0]?.weather?.[0]?.main }}</p>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="closeDialog" color="blue" variant="text">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { useCountriesStore } from "../stores/countries";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapState(useCountriesStore, ["getShowWeatherModal", "getWeather"]),

    showWeatherModal() {
      return this.getShowWeatherModal;
    },

    showWeatherInfo() {
      return this.getWeather;
    },

    todaysWeather() {
      let start = new Date(new Date().setHours(0, 0, 0)).getTime() / 1000;
      let end = new Date(new Date().setHours(23, 59, 59)).getTime() / 1000;

      let todaysWeather = this.getWeather?.list?.filter(
        (obj) => obj.dt >= start && obj.dt <= end
      );
      return todaysWeather;
    },
  },

  methods: {
    ...mapActions(useCountriesStore, ["setShowWeatherModal"]),

    closeDialog() {
      this.setShowWeatherModal(false);
    },
  },
};
</script>

<style lang="css" scoped>
.city-modal {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
}
</style>
