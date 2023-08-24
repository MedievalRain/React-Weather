import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setCity } from "./citySlice";

const cityListener = createListenerMiddleware();

cityListener.startListening({
  actionCreator: setCity,
  effect: async (action) => {
    localStorage.setItem("currentCity", JSON.stringify(action.payload));
  },
});

export default cityListener;
