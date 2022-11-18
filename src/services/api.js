import axios from "axios";

export const geocodingAPI = {
    searchByCity: async (city, units) => {
        try {
        const apiKey = "855837ba33dd388bf3eef950736fcf2d";

        const res = await axios.get(
            "https://api.openweathermap.org/geo/1.0/direct",
            {
            params: { q: city, appid: apiKey, units: units, limit: 5 },
            }
        );

        if (res?.data) {
            return res?.data;
        }
        } catch (error) {
        console.error("Something went wrong with searchByCity()", error);
        }
    },  
};

export const forecastAPI = {
    searchByCountry: async (lat, lon, units) => {
        try {
        const apiKey = "855837ba33dd388bf3eef950736fcf2d";

        const res = await axios.get(
            "api.openweathermap.org/data/2.5/forecast",
            {
            params: { lat: lat, lon: lon, appid: apiKey, units: units },
            }
        );

        if (res?.data) {
            return res?.data;
        }
        } catch (error) {
        console.error("Something went wrong with searchByCity()", error);
        }
    },  
};
