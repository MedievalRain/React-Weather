import { useAppSelector } from "./storeHooks";
import useCity from "./useCity";

function useCurrentCity() {
  const { currentCity } = useAppSelector((state) => state.city);
  const { city, isFetching } = useCity(currentCity);
  return { city, isFetching };
}

export default useCurrentCity;
