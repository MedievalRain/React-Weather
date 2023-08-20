import WeatherIcon from "../../../ui/WeatherIcon";
import { getPeriods } from "../../../utils/periods";

interface PeriodsForecastProps {
  temperatures: number[];
  weathercodes: number[];
  time: number[];
  timezone: string;
}

function PeriodsForecast({
  temperatures,
  weathercodes,
  time,
  timezone,
}: PeriodsForecastProps) {
  const periods = getPeriods(timezone);
  return (
    <div className="flex justify-between">
      {periods.map((period) => (
        <div className="flex flex-col">
          <div className="text-gray-600">{period.name}</div>
          <div className="flex -translate-x-4 items-center font-mono text-2xl font-extrabold text-gray-700">
            <WeatherIcon
              size="medium"
              weathercode={weathercodes[time.indexOf(period.timestamp)]}
            />
            {Math.round(temperatures[time.indexOf(period.timestamp)])}°
          </div>
        </div>
      ))}
    </div>
  );
}

export default PeriodsForecast;
