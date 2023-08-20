import useWeather from "../../../hooks/useWeather";
import { normalizeDate, toTimestampInSeconds } from "../../../utils/format";
import UvDescription from "./UvDescription";
import UvIcon from "./UvIcon";

function UVWidget() {
  const weather = useWeather();

  if (weather) {
    const timestamp = toTimestampInSeconds(normalizeDate(new Date()));
    const index = weather.hourly.time.indexOf(timestamp);
    const uvIndex = Math.round(weather.hourly.uv_index[index]);
    return (
      <div className="flex flex-col items-center p-4">
        <div className="font-semibold">УФ-индекс</div>
        <UvIcon uvIndex={uvIndex} />
        <UvDescription uvIndex={uvIndex} />
      </div>
    );
  }
}

export default UVWidget;
