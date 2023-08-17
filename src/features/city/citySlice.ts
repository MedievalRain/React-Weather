import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityData } from "./cityTypes";

const initialState: CityData = {
  country: "",
  latitude: 0,
  longitude: 0,
  name: "",
  timezone: "",
  id: 0,
};

const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    setCity(state, action: PayloadAction<CityData>) {
      state.country = action.payload.country;
      state.name = action.payload.name;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.timezone = action.payload.timezone;
      state.id = action.payload.id;
    },
  },
});
export const { setCity } = citySlice.actions;
export default citySlice.reducer;
