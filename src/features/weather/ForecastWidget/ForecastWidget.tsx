import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../hooks/storeHooks";
import useWeather from "../../../hooks/useWeather";
import ForecastTableItem from "./ForecastTableItem";
import useCurrentCity from "../../../hooks/useCurrentCity";

function ForecastWidget() {
  const { weather } = useWeather();
  const { city } = useCurrentCity();
  const { t } = useTranslation();
  if (weather && city) {
    return (
      <div className="flex flex-col gap-2 p-4 ">
        <div className="pt-3">{t("forecast.week_forecast")}</div>
        <table>
          <thead>
            <tr>
              <th className="text-left">{t("forecast.day")}</th>
              <th>{t("forecast.temperature")}</th>
              <th>{t("forecast.precipitation")}</th>
              <th>{t("forecast.wind")}</th>
            </tr>
          </thead>
          <tbody className="divide-y text-center dark:divide-gray-600">
            {weather.daily.time.slice(2).map((timestamp, index) => (
              <ForecastTableItem
                key={timestamp}
                isFirst={index === 0}
                timestamp={timestamp}
                precipitation={
                  weather.daily.precipitation_probability_max[index]
                }
                temperatureMax={weather.daily.temperature_2m_max[index]}
                temperatureMin={weather.daily.temperature_2m_min[index]}
                windDirection={weather.daily.winddirection_10m_dominant[index]}
                windspeed={weather.daily.windspeed_10m_max[index]}
                weathercode={weather.daily.weathercode[index]}
                timezone={city.timezone}
              />
            ))}
            {/* slice(2) is needed because the API returns yesterday and today as two first elements. */}
          </tbody>
        </table>
      </div>
    );
  } else return null;
}

export default ForecastWidget;
