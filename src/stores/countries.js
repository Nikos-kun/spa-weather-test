import { defineStore } from "pinia";

import { geocodingAPI, forecastAPI } from "../services/api";

export const useCountriesStore = defineStore("countriesStore", {
  state: () => ({
    countries: [],
    weather: {},
  }),

  getters: {
    getCountries: (state) => state.countries,

    getWeather: (state) => state.weather,
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

    setWeather(lat, lon, units) {
      return new Promise(async (resolve, reject) => {
        try {
          let data = await forecastAPI.searchByCountry(lat, lon, units);

          if (data) {
            this.weather = data;
          }
        } catch (error) {
          console.error("Something went wrong in setWeather()", error);
        }
      });
    },
  },
});
