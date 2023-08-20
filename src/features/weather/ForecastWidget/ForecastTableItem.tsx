import { useTranslation } from "react-i18next";
import { languageSchema } from "../../i18n/i18nTypes";
import { formatInTimeZone } from "date-fns-tz";

interface ForecastTableItemProps {
  timestamp: number;
  temperatureMax: number;
  temperatureMin: number;
  windspeed: number;
  windDirection: number;
  precipation: number;
  timezone: string;
}

function ForecastTableItem({
  timestamp,
  temperatureMax,
  temperatureMin,
  windspeed,
  windDirection,
  precipation,
  timezone,
}: ForecastTableItemProps) {
  const { i18n } = useTranslation();
  const formattedDate = formatInTimeZone(
    timestamp * 1000, // milliseconds
    timezone,
    "dd MMMM",
    { locale: languageSchema[i18n.language] },
  );
  const formattedWeekday = formatInTimeZone(
    timestamp * 1000, // milliseconds
    timezone,
    "EEEE",
    { locale: languageSchema[i18n.language] },
  );

  return (
    <div className="flex border-b">
      <div className="w-1/4 p-2 text-left font-semibold capitalize">
        <div className="">{formattedWeekday}</div>
        <div className="text-gray-600">{formattedDate}</div>
      </div>
      <div className="w-1/4 p-2 text-left">
        {Math.round(temperatureMax)}° {Math.round(temperatureMin)}°
      </div>
      <div className="w-1/4 p-2 text-left">{precipation}%</div>
      <div className="w-1/4 p-2 text-left">{Math.round(windspeed)} м/с</div>
    </div>
  );
}

export default ForecastTableItem;
