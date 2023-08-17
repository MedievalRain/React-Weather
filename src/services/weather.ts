import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponse } from "../features/weather/weatherTypes";

interface IWeatherQuery {
  longitude: number;
  latitude: number;
  timezone: string;
}

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.open-meteo.com/v1",
  }),
  endpoints: (build) => ({
    getWeather: build.query<WeatherResponse, IWeatherQuery>({
      query: ({ longitude, latitude, timezone }: IWeatherQuery) => ({
        url: "/forecast",
        params: {
          latitude: latitude,
          longitude: longitude,
          hourly:
            "temperature_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m,uv_index",
          daily:
            "weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant",
          timeformat: "unixtime",
          timezone: timezone,
          past_days: 1,
        },
      }),
    }),
  }),
});
