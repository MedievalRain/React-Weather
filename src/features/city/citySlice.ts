import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CityState = {
  currentCity: number;
  savedCities: number[];
};
const isFirstLaunch = !localStorage.getItem("savedCities");
let savedCities = [];
let currentCity = 524901;
if (isFirstLaunch) {
  savedCities = [524901, 756135, 2643743, 5128581, 3451190, 2988507, 1273294];
} else {
  savedCities = JSON.parse(localStorage.getItem("savedCities") || "[]");
  currentCity = Number(localStorage.getItem("currentCity")) || 524901;
}

const initialState: CityState = {
  currentCity: currentCity,
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
