<template>
  <main>
    <SearchCountry />
    <ShowCountryResults />
  </main>
</template>

<script>
import SearchCountry from "../components/SearchCountry.vue";
import ShowCountryResults from "../components/ShowCountryResults.vue";

export default {
  components: {
    SearchCountry,
    ShowCountryResults
  },

  data() {
    return {};
  },

  async mounted() {
  },
};
</script>
