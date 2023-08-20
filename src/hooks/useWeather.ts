import { weatherApi } from "../services/weather";
import { useAppSelector } from "./storeHooks";

function useWeather() {
  const { latitude, longitude, timezone, id } = useAppSelector(
    (state) => state.city,
  );
  const { data: weather } = weatherApi.useGetWeatherQuery(
    {
      latitude,
      longitude,
      timezone,
    },

    { skip: id === 0 },
  );

  return weather;
}

export default useWeather;
