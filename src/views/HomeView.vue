<template>
  <main>
    <SearchCountry />
    <CityCard />
    <CityWeather />
  </main>
</template>

<script>
import SearchCountry from "../components/SearchCity.vue";
import CityCard from "../components/CityCard.vue";
import CityWeather from "../components/CityWeather.vue";

export default {
  components: {
    SearchCountry,
    CityCard,
    CityWeather,
  },

  data() {
    return {};
  },

  async mounted() {},
};
</script>
