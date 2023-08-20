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
    <tr className="">
      <td className="text-left">
        <div className="font-semibold">{formattedWeekday}</div>
        <div className="text-gray-600">{formattedDate}</div>
      </td>
      <td className="">
        {Math.round(temperatureMax)}° {Math.round(temperatureMin)}°
      </td>
      <td className="">{precipation}%</td>
      <td className="">{Math.round(windspeed)} м/с</td>
    </tr>
  );
}

export default ForecastTableItem;
