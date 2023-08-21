import { useAppDispatch } from "../../../hooks/storeHooks";
import { weatherApi } from "../../../services/weather";
import WeatherIcon from "../../../ui/WeatherIcon";
import { deleteCity, setCity } from "../../city/citySlice";
import { CityData } from "../../city/cityTypes";

interface CityChipProps {
  city: CityData;
  isEditMode: boolean;
}

function CityChip({ city, isEditMode }: CityChipProps) {
  const { latitude, longitude, timezone, id } = city;
  const { data: weather, isFetching } = weatherApi.useGetWeatherQuery(
    {
      latitude,
      longitude,
      timezone,
    },

    { skip: id === 0 },
  );

  const dispatch = useAppDispatch();

  function handleClick() {
    if (isEditMode) {
      dispatch(deleteCity(city.id));
    } else {
      dispatch(setCity(city));
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }

  if (weather) {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center rounded-md bg-gray-700 px-2 font-semibold text-white transition-all duration-200  ${
          isEditMode
            ? "hover:bg-red-400 hover:text-gray-700"
            : "hover:bg-gray-600"
        } hover:shadow-md`}
      >
        {city.name} {Math.round(weather.current_weather.temperature)}°
        <WeatherIcon
          size="small"
          weathercode={weather.current_weather.weathercode}
        />
      </button>
    );
  } else return null;
}

export default CityChip;
