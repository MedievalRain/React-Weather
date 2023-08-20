import { useTranslation } from "react-i18next";
import useWeather from "../../../hooks/useWeather";
import { normalizeDate, toTimestampInSeconds } from "../../../utils/format";
import WindDescription from "./WindDescription";
import WindIcon from "./WindIcon";

function WindWidget() {
  const { weather } = useWeather();
  const { t } = useTranslation();

  if (weather) {
    const timestamp = toTimestampInSeconds(normalizeDate(new Date()));
    const index = weather.hourly.time.indexOf(timestamp);
    const windSpeed = weather.hourly.windspeed_10m[index];

    return (
      <div className="flex flex-col items-center p-4">
        <div className="font-semibold">{t("uv.uv_index")}</div>
        <WindIcon windSpeed={windSpeed} />
        <WindDescription windSpeed={windSpeed} />
      </div>
    );
  }
}

export default WindWidget;
