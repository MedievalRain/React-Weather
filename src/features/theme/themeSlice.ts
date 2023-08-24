import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const isDark = localStorage.getItem("isDark") === "true";
const initialState = {
  dark: isDark,
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

export const themeListener = createListenerMiddleware();

themeListener.startListening({
  actionCreator: switchTheme,
  effect: async (action, listenerApi) => {
    const isDark = (listenerApi.getState() as RootState).theme.dark;
    localStorage.setItem("isDark", isDark.toString());
  },
});

export const themeReducer = themeSlice.reducer;
