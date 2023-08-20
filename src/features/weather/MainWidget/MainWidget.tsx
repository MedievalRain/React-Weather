import { useAppSelector } from "../../../hooks/storeHooks";
import { weatherApi } from "../../../services/weather";
import WeatherIcon from "../../../ui/WeatherIcon";
import { formatInTimeZone } from "date-fns-tz";
import ru from "date-fns/locale/ru";
import PeriodsForecast from "./PeriodsForecast";
import WeatherDescription from "./WeatherDescription";

function MainWidget() {
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
  const formattedDateString = formatInTimeZone(
    new Date(),
    timezone,
    "dd MMMM, EEEE",
    { locale: ru },
  );
  if (weather) {
    return (
      <div className="flex flex-col gap-2 p-4">
        <div>{formattedDateString}</div>
        <WeatherDescription
          currentTemperature={weather.current_weather.temperature}
          weathercode={weather.current_weather.weathercode}
          temperatures={weather.hourly.temperature_2m}
          times={weather.hourly.time}
        />
        <div className="flex -translate-x-4 items-center font-mono text-6xl font-extrabold text-gray-700">
          <WeatherIcon
            size="big"
            weathercode={weather.current_weather.weathercode}
          />
          {Math.round(weather.current_weather.temperature)}°
        </div>
        <PeriodsForecast
          temperatures={weather.hourly.temperature_2m}
          weathercodes={weather.hourly.weathercode}
          time={weather.hourly.time}
          timezone={timezone}
        />
      </div>
    );
  }
}

export default MainWidget;
