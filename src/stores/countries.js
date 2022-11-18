import { defineStore } from "pinia";

import { geocodingAPI } from "../services/api";

export const useCountriesStore = defineStore("countriesStore", {
  state: () => ({
    countries: [],
  }),

  getters: {
    getCountries: (state) => state.countries,
  },

  actions: {
    setCountries(country, units) {
      return new Promise(async (resolve, reject) => {
        try {
          let data = await geocodingAPI.searchByCity(country, units);

          if (data && data.length >= 0) {
            this.countries = data;
          }
        } catch (error) {
          console.error("Something went wrong in setCountries()", error);
        }
      });
    },
  },
});
