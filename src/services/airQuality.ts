import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponse } from "../features/weather/weatherTypes";
import { AirQualityResponse } from "../features/air/airQualityTypes";

interface IAirQualityQuery {
  longitude: number;
  latitude: number;
  timezone: string;
}

export const airQualityApi = createApi({
  reducerPath: "airQualityApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://air-quality-api.open-meteo.com/v1",
  }),
  endpoints: (build) => ({
    getAirQuality: build.query<AirQualityResponse, IAirQualityQuery>({
      query: ({ longitude, latitude, timezone }: IAirQualityQuery) => ({
        url: "/air-quality",
        params: {
          latitude: latitude,
          longitude: longitude,
          hourly: "european_aqi",
          timezone: timezone,
        },
      }),
    }),
  }),
});
