import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CityState = {
  currentCity: number;
  savedCities: number[];
};
const savedCities = JSON.parse(localStorage.getItem("savedCities") || "[]");
const initialState: CityState = {
  currentCity: 524901,
  savedCities: savedCities,
};

const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    setCity(state, action: PayloadAction<number>) {
      state.currentCity = action.payload;
    },
    saveCity(state) {
      const isDuplicate = state.savedCities.some(
        (id) => id === state.currentCity,
      );
      if (!isDuplicate) {
        state.savedCities.push(state.currentCity);
      }
    },
    deleteCity(state, action: PayloadAction<number>) {
      state.savedCities = state.savedCities.filter(
        (id) => id !== action.payload,
      );
    },
  },
});
export const { setCity, saveCity, deleteCity } = citySlice.actions;
export default citySlice.reducer;
