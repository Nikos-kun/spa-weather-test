import axios from "axios";

export const geocodingAPI = {
  searchByCity: async (city, units) => {
    try {
      const apiKey = "855837ba33dd388bf3eef950736fcf2d";

      const res = await axios.get("https://api.openweathermap.org/geo/1.0/direct", {
        params: { q: city, appid: apiKey, units: units, limit: 5 },
      });

      console.log("res?.data: ", res?.data);

      return res?.data;
    } catch (error) {
      console.error("Something went wrong with getCity()", error);
    }
  },
};
