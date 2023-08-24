import { useTranslation } from "react-i18next";
import { languageSchema } from "../../i18n/i18nTypes";
import { formatInTimeZone } from "date-fns-tz";
import WeatherIcon from "../../../ui/WeatherIcon";
import { getDirectionSymbol } from "../../../utils/format";

interface ForecastTableItemProps {
  timestamp: number;
  temperatureMax: number;
  temperatureMin: number;
  windspeed: number;
  windDirection: number;
  weathercode: number;
  precipitation: number;
  timezone: string;
  isFirst: boolean;
}

function ForecastTableItem({
  timestamp,
  temperatureMax,
  temperatureMin,
  windspeed,
  windDirection,
  precipitation,
  timezone,
  weathercode,
  isFirst,
}: ForecastTableItemProps) {
  const { i18n, t } = useTranslation();
  const formattedDate = formatInTimeZone(
    timestamp * 1000, // milliseconds
    timezone,
    "dd MMMM",
    { locale: languageSchema[i18n.language] },
  );
  const formattedWeekday = !isFirst
    ? formatInTimeZone(
        timestamp * 1000, // milliseconds
        timezone,
        "EEEE",
        { locale: languageSchema[i18n.language] },
      )
    : t("forecast.tomorrow");
  const directionSymbol = getDirectionSymbol(windDirection);

  return (
    <tr>
      <td className="text-left">
        <div className="font-semibold capitalize">{formattedWeekday}</div>
        <div className="text-gray-600 dark:text-gray-400">{formattedDate}</div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-1">
          <WeatherIcon size="small" weathercode={weathercode} />
          <div>{Math.round(temperatureMax)}°</div>
          <div className="text-gray-600 dark:text-gray-400">
            {Math.round(temperatureMin)}°
          </div>
        </div>
      </td>
      <td>{precipitation}%</td>
      <td>
        <div className="flex items-center justify-evenly">
          <div>{directionSymbol}</div>
          <div>
            {Math.round(windspeed)} {t("forecast.mc")}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ForecastTableItem;
