import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityData } from "./cityTypes";

const initialState = {
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
  },
});
export const { setCity } = citySlice.actions;
export default citySlice.reducer;
