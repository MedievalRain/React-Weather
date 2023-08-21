import { createListenerMiddleware } from "@reduxjs/toolkit";
import { CityState, deleteCity, saveCity } from "../../city/citySlice";

const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: saveCity,
  effect: async (action, listenerApi) => {
    const cities = listenerApi.getState().city.savedCities;
    localStorage.setItem("savedCities", JSON.stringify(cities));
  },
});
listener.startListening({
  actionCreator: deleteCity,
  effect: async (action, listenerApi) => {
    const cities = listenerApi.getState().city.savedCities;
    localStorage.setItem("savedCities", JSON.stringify(cities));
  },
});

export default listener;
