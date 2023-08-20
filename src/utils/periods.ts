import { utcToZonedTime } from "date-fns-tz";
import { getHours, set, addDays } from "date-fns";
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
      date = set(date, {
        hours: 5,
      });
    } else if (hour < 12) {
      name = "morning";
      date = set(date, {
        hours: 12,
      });
    } else if (hour <= 16) {
      name = "day";
      date = set(date, {
        hours: 17,
      });
    } else {
      name = "evening";
      date = addDays(date, 1);
      date = set(date, {
        hours: 0,
      });
    }

    return {
      timestamp: timestamp,
      name: name,
    };
  });
  return periods.slice(1);
}
