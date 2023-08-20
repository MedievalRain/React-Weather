import { utcToZonedTime } from "date-fns-tz";
import { getHours, addHours, set } from "date-fns";
import { Period } from "../features/weather/weatherTypes";
import { toTimestampInSeconds } from "./format";

export function getPeriods(timezone: string) {
  const rawDate = new Date();
  const normalizedDate = set(rawDate, {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const zonedDate = utcToZonedTime(normalizedDate, timezone);
  const periods: Period[] = Array.from({ length: 3 }, (_, index) => {
    const date = addHours(zonedDate, (index + 1) * 6);
    const timestamp = toTimestampInSeconds(date);
    const hour = getHours(date);
    let name = "";
    if (hour >= 0 && hour < 6) {
      name = "night";
    } else if (hour <= 12) {
      name = "morning";
    } else if (hour < 17) {
      name = "day";
    } else {
      name = "evening";
    }

    return {
      timestamp: timestamp,
      name: name,
    };
  });
  return periods;
}
