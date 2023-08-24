import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { weatherApi } from "../../../services/weather";
import WeatherIcon from "../../../ui/WeatherIcon";
import { deleteCity, setCity } from "../../city/citySlice";
import useCity from "../../../hooks/useCity";

interface CityChipProps {
  id: number;
  isEditMode: boolean;
}

function CityChip({ id, isEditMode }: CityChipProps) {
  const { city } = useCity(id);
  const { data: weather } = weatherApi.useGetWeatherQuery(
    {
      latitude: city?.latitude as number,
      longitude: city?.longitude as number,
      timezone: city?.timezone as string,
    },

    { skip: id === 0 || !city },
  );

  const dispatch = useAppDispatch();

  function handleClick() {
    if (isEditMode) {
      dispatch(deleteCity(id));
    } else {
      if (city) {
        dispatch(setCity(city.id));
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  }
  const { t } = useTranslation();
  const ariaLabel = t(isEditMode ? "cities.delete_city" : "cities.select_city");
  if (weather) {
    return (
      <button
        onClick={handleClick}
        aria-label={ariaLabel}
        className={`flex items-center rounded-md bg-gray-700 px-2 font-semibold text-white transition-all duration-200  ${
          isEditMode
            ? "hover:bg-red-400 hover:text-gray-700"
            : "hover:bg-gray-600"
        } hover:shadow-md`}
      >
        {city?.name} {Math.round(weather.current_weather.temperature)}°
        <WeatherIcon
          size="small"
          weathercode={weather.current_weather.weathercode}
        />
      </button>
    );
  } else return null;
}

export default CityChip;
