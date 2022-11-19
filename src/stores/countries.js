import { defineStore } from "pinia";

import { geocodingAPI, forecastAPI } from "../services/api";

export const useCountriesStore = defineStore("countriesStore", {
  state: () => ({
    countries: [],
    weather: {},
    firstTime: true,
    showWeatherModal: false,
  }),

  getters: {
    getCountries: (state) => state.countries,

    getWeather: (state) => state.weather,

    getFirstTime: (state) => state.firstTime,

    getShowWeatherModal: (state) => state.showWeatherModal,
  },

  actions: {
    setCountries(country, units) {
      return new Promise(async (resolve, reject) => {
        try {
          let data = await geocodingAPI.searchByCity(country, units);

          if (data && data.length >= 0) {
            this.countries = data;
          }
          resolve();
        } catch (error) {
          console.error("Something went wrong in setCountries()", error);
          reject();
        }
      });
    },

    setFirstTime(payload) {
      this.firstTime = payload;
    },

    setWeather(lat, lon, units) {
      return new Promise(async (resolve, reject) => {
        try {
          let data = await forecastAPI.searchByCountry(lat, lon, units);

          if (data) {
            this.weather = data;
          }
          resolve();
        } catch (error) {
          console.error("Something went wrong in setWeather()", error);
          reject();
        }
      });
    },

    setShowWeatherModal(payload) {
      this.showWeatherModal = payload;
    },
  },
});
