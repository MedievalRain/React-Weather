import { utcToZonedTime, getTimezoneOffset, zonedTimeToUtc } from "date-fns-tz";
import { getHours, set, addDays, setHours, startOfDay } from "date-fns";
import { Period } from "../features/weather/weatherTypes";
import { toTimestampInSeconds } from "./format";

export function getPeriods(timezone: string) {
  const rawDate = new Date();
  const normalizedDate = set(rawDate, {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  let date = normalizedDate;
  const periods: Period[] = Array.from({ length: 4 }, (_, index) => {
    const timestamp = toTimestampInSeconds(date);
    const zonedDate = utcToZonedTime(date, timezone);
    const hour = getHours(zonedDate);

    let name = "";

    if (hour < 5) {
      name = "night";
      date = setHours(zonedDate, 5);
    } else if (hour < 12) {
      name = "morning";
      date = setHours(zonedDate, 12);
    } else if (hour < 17) {
      name = "day";
      date = setHours(zonedDate, 17);
    } else {
      name = "evening";
      date = startOfDay(zonedDate);
      date = addDays(date, 1);
    }
    date = zonedTimeToUtc(date, timezone);

    return {
      timestamp: timestamp,
      name: name,
    };
  });
  return periods.slice(1);
}
