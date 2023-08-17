import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityData } from "./cityTypes";

const initialState = null;

const citySlice = createSlice({
  name: "city",
  initialState: initialState,
  reducers: {
    setCity(state: CityData | null, action: PayloadAction<CityData>) {
      state = action.payload;
    },
  },
});
export const { setCity } = citySlice.actions;
export default citySlice.reducer;
