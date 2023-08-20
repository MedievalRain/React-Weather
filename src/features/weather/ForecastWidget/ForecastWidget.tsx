import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../hooks/storeHooks";
import useWeather from "../../../hooks/useWeather";
import { weatherApi } from "../../../services/weather";
import ForecastTableItem from "./ForecastTableItem";

interface ForecastWidgetProps {}

function ForecastWidget({}: ForecastWidgetProps) {
  const weather = useWeather();
  const { timezone } = useAppSelector((state) => state.city);
  const { t } = useTranslation();
  if (weather)
    return (
      <div className="flex flex-col gap-2 p-4 ">
        <div>{t("forecast.week_forecast")}</div>
        <table>
          <thead className="text-gray-600">
            <tr>
              <th className="text-left">{t("forecast.day")}</th>
              <th>{t("forecast.temperature")}</th>
              <th>{t("forecast.precipitation")}</th>
              <th>{t("forecast.wind")}</th>
            </tr>
          </thead>
          <tbody className="divide-y text-center">
            {weather.daily.time.slice(1).map((timestamp, index) => (
              <ForecastTableItem
                timestamp={timestamp}
                precipation={weather.daily.precipitation_probability_max[index]}
                temperatureMax={weather.daily.temperature_2m_max[index]}
                temperatureMin={weather.daily.temperature_2m_min[index]}
                windDirection={weather.daily.winddirection_10m_dominant[index]}
                windspeed={weather.daily.windspeed_10m_max[index]}
                timezone={timezone}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default ForecastWidget;
