import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    switchTheme(state) {
      state.dark = !state.dark;
    },
  },
});
export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
