import { createListenerMiddleware } from "@reduxjs/toolkit";
import { CityState, saveCity } from "../../city/citySlice";

const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: saveCity,
  effect: async (action, listenerApi) => {
    const cities = listenerApi.getState().city.savedCities;
    localStorage.setItem("savedCities", JSON.stringify(cities));
  },
});

export default listener;
