import { weatherApi } from "../services/weather";
import { useAppSelector } from "./storeHooks";
import useCity from "./useCity";

function useWeather() {
  const { currentCity } = useAppSelector((state) => state.city);
  const { city } = useCity(currentCity);
  const { data: weather, isFetching } = weatherApi.useGetWeatherQuery(
    {
      latitude: city?.latitude as number,
      longitude: city?.longitude as number,
      timezone: city?.timezone as string,
    },
    { skip: !city },
  );

  return { weather, isFetching };
}

export default useWeather;
