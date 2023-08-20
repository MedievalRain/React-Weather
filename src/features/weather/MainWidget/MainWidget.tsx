import { useAppSelector } from "../../../hooks/storeHooks";
import useWeather from "../../../hooks/useWeather";
import WeatherIcon from "../../../ui/WeatherIcon";
import FormattedDate from "./FormattedDate";

import PeriodsForecast from "./PeriodsForecast";
import WeatherDescription from "./WeatherDescription";

function MainWidget() {
  const { weather } = useWeather();
  const { timezone } = useAppSelector((state) => state.city);

  if (weather != undefined) {
    return (
      <div className="flex h-full flex-col gap-4 p-4">
        <FormattedDate timezone={timezone} />
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
