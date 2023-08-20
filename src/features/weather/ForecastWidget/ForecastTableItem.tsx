import { useTranslation } from "react-i18next";
import { languageSchema } from "../../i18n/i18nTypes";
import { formatInTimeZone } from "date-fns-tz";
import WeatherIcon from "../../../ui/WeatherIcon";

interface ForecastTableItemProps {
  timestamp: number;
  temperatureMax: number;
  temperatureMin: number;
  windspeed: number;
  windDirection: number;
  weathercode: number;
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
  weathercode,
}: ForecastTableItemProps) {
  const { i18n, t } = useTranslation();
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
    <tr>
      <td className="text-left">
        <div className="font-semibold capitalize">{formattedWeekday}</div>
        <div className="text-gray-600">{formattedDate}</div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-1">
          <WeatherIcon size="small" weathercode={weathercode} />
          <div>{Math.round(temperatureMax)}°</div>
          <div className="text-gray-600">{Math.round(temperatureMin)}°</div>
        </div>
      </td>
      <td>{precipation}%</td>
      <td>
        {Math.round(windspeed)} {t("forecast.mc")}
      </td>
    </tr>
  );
}

export default ForecastTableItem;
