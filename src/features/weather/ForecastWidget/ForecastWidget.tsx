import { useAppSelector } from "../../../hooks/storeHooks";
import useWeather from "../../../hooks/useWeather";
import { weatherApi } from "../../../services/weather";
import ForecastTableItem from "./ForecastTableItem";

interface ForecastWidgetProps {}

function ForecastWidget({}: ForecastWidgetProps) {
  const weather = useWeather();
  const { timezone } = useAppSelector((state) => state.city);
  if (weather)
    return (
      <div className="flex flex-col gap-2 p-4">
        <div>Погода на неделю</div>
        <div className="flex p-2">
          <div className="w-1/4">День</div>
          <div className="w-1/4">Температура</div>
          <div className="w-1/4">Осадки</div>
          <div className="w-1/4">Ветер</div>
        </div>

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
      </div>
    );
}

export default ForecastWidget;
