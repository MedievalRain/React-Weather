import cityReducer from "./features/city/citySlice";

import { configureStore } from "@reduxjs/toolkit";
import { geocodingApi } from "./services/geocoding";
import { weatherApi } from "./services/weather";
import { airQualityApi } from "./services/airQuality";
import listener from "./features/weather/CitiesWidget/citiesMiddleware";
import { themeListener, themeReducer } from "./features/theme/themeSlice";
import cityListener from "./features/city/cityMiddleware";

const store = configureStore({
  reducer: {
    city: cityReducer,
    theme: themeReducer,
    [geocodingApi.reducerPath]: geocodingApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [airQualityApi.reducerPath]: airQualityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .prepend(
        listener.middleware,
        themeListener.middleware,
        cityListener.middleware,
      )
      .concat([
        geocodingApi.middleware,
        weatherApi.middleware,
        airQualityApi.middleware,
      ]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
