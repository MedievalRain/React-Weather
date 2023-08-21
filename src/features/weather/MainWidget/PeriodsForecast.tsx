import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="flex justify-between">
      {periods.map((period) => (
        <div key={period.name} className="flex flex-col capitalize">
          <div className="text-gray-600">{t(`periods.${period.name}`)}</div>
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
