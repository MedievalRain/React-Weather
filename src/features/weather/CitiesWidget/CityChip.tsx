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
    }
  }

  if (weather) {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center rounded-md bg-sky-100 px-2 font-semibold transition-all duration-200  ${
          isEditMode ? "hover:bg-red-400" : "hover:bg-sky-200"
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
