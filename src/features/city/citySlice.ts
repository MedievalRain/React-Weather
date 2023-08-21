import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityData } from "./cityTypes";

type CityState = {
  currentCity: CityData;
  savedCities: CityData[];
};

const initialState: CityState = {
  currentCity: {
    country: "Россия",
    latitude: 55.75222,
    longitude: 37.61556,
    name: "Москва",
    timezone: "Europe/Moscow",
    id: 524901,
  },
  savedCities: [],
};

const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    setCity(state, action: PayloadAction<CityData>) {
      state.currentCity = action.payload;
    },
    saveCity(state, action: PayloadAction<CityData>) {
      state.savedCities.push(action.payload);
    },
    deleteCity(state, action: PayloadAction<number>) {
      state.savedCities = state.savedCities.filter((city) => {
        city.id != action.payload;
      });
    },
  },
});
export const { setCity, saveCity, deleteCity } = citySlice.actions;
export default citySlice.reducer;
