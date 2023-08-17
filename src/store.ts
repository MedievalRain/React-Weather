import cityReducer from "./features/city/citySlice";
import { configureStore } from "@reduxjs/toolkit";
import { geocodingApi } from "./services/geocoding";

const store = configureStore({
  reducer: {
    city: cityReducer,
    [geocodingApi.reducerPath]: geocodingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(geocodingApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
