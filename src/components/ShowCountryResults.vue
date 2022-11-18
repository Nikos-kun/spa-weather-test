<template>
    <div class="col" v-if="foundCountries.length === 0">
      <h2>Sorry no country found.</h2>
    </div>
    <div class="col" v-else>
      <h2>Now choose the country of your city</h2>
      <div class="search-country">
        <v-select
          label="Select the country of the city you want to search"
          :items="foundCountries"
          variant="underlined"
        ></v-select>
        <v-btn @click="searchCountry" class="btn" color="blue">Search</v-btn>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    foundCountries: {
      default: [],
      type: Array,
    },
  },

  mounted() {},

  methods: {},
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
