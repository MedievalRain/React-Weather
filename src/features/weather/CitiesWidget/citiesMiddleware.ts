import { createListenerMiddleware } from "@reduxjs/toolkit";
import { deleteCity, saveCity } from "../../city/citySlice";
import { RootState } from "../../../store";

const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: saveCity,
  effect: async (action, listenerApi) => {
    const cities = (listenerApi.getState() as RootState).city.savedCities;
    localStorage.setItem("savedCities", JSON.stringify(cities));
  },
});
listener.startListening({
  actionCreator: deleteCity,
  effect: async (action, listenerApi) => {
    const cities = (listenerApi.getState() as RootState).city.savedCities;
    localStorage.setItem("savedCities", JSON.stringify(cities));
  },
});

export default listener;
