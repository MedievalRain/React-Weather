import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeocodingSchema } from "../features/city/cityTypes";

interface ISearchQuery {
  cityName: string;
  language: string;
}

export const geocodingApi = createApi({
  reducerPath: "geocodingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://geocoding-api.open-meteo.com/v1",
  }),
  endpoints: (build) => ({
    searchCity: build.query<GeocodingSchema, ISearchQuery>({
      query: ({ cityName, language }: ISearchQuery) => ({
        url: "/search",
        params: {
          name: cityName,
          language: language,
        },
      }),
    }),
  }),
});
