import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeocodingSchema, SearchCity } from "../features/city/cityTypes";

interface ISearchQuery {
  cityName: string;
  language: string;
}
interface IGetQuery {
  id: number;
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
    localizeCity: build.query<SearchCity, IGetQuery>({
      query: ({ id, language }: IGetQuery) => ({
        url: "/get",
        params: {
          id: id,
          language: language,
        },
      }),
    }),
  }),
});
