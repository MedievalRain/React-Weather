import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../hooks/storeHooks";
import useWeather from "../../../hooks/useWeather";
import WeatherIcon from "../../../ui/WeatherIcon";
import { normalizeDate, toTimestampInSeconds } from "../../../utils/format";
import FormattedDate from "./FormattedDate";

import PeriodsForecast from "./PeriodsForecast";
import WeatherDescription from "./WeatherDescription";

function MainWidget() {
  const { weather } = useWeather();
  const { timezone } = useAppSelector((state) => state.city);
  const { t } = useTranslation();

  if (weather != undefined) {
    const timestamp = toTimestampInSeconds(normalizeDate(new Date()));
    const index = weather.hourly.time.indexOf(timestamp);
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
        <div>
          {t("feels_like")}{" "}
          {Math.round(weather.hourly.apparent_temperature[index])}°
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
