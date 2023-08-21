import { useTranslation } from "react-i18next";
import useWeather from "../../../hooks/useWeather";
import {
  getBeaufort,
  normalizeDate,
  toTimestampInSeconds,
} from "../../../utils/format";
import WindDescription from "./WindDescription";
import WindIcon from "./WindIcon";

function WindWidget() {
  const { weather } = useWeather();
  const { t } = useTranslation();

  if (weather) {
    const timestamp = toTimestampInSeconds(normalizeDate(new Date()));
    const index = weather.hourly.time.indexOf(timestamp);
    const windSpeed = weather.hourly.windspeed_10m[index];
    const beaufort = getBeaufort(windSpeed);

    return (
      <div className="flex flex-col items-center p-4">
        <div className="font-semibold">{t("wind.wind")}</div>
        <WindIcon beaufort={beaufort} />
        <WindDescription beaufort={beaufort} />
      </div>
    );
  } else return null;
}

export default WindWidget;
