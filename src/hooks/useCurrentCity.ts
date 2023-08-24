import { useTranslation } from "react-i18next";
import { geocodingApi } from "../services/geocoding";
import { useAppSelector } from "./storeHooks";
import useCity from "./useCity";

function useCurrentCity() {
  const { currentCity } = useAppSelector((state) => state.city);
  const { city, isFetching } = useCity(currentCity);
  return { city, currentCity, isFetching };
}

export default useCity;
