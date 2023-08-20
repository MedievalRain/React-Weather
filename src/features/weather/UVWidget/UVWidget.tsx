import useWeather from "../../../hooks/useWeather";
import { normalizeDate, toTimestampInSeconds } from "../../../utils/format";

function UVWidget() {
  const weather = useWeather();

  if (weather) {
    const timestamp = toTimestampInSeconds(normalizeDate(new Date()));
    const index = weather.hourly.time.indexOf(timestamp);
    const uvIndex = weather.hourly.uv_index[index];
    return <div>{uvIndex}</div>;
  }
}

export default UVWidget;
