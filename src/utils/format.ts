import { set, subDays } from "date-fns";

export function getFileByWeathercode(weathercode: number, isDay: 0 | 1 = 1) {
  switch (weathercode) {
    case 0: {
      return `clear${isDay === 1 ? "" : "-night"}`;
    }
    case 1:
    case 2: {
      return "cloudy";
    }
    case 3: {
      return "overcast";
    }
    case 45:
    case 48: {
      return "fog";
    }
    case 51:
    case 53:
    case 55:
    case 56:
    case 57: {
      return "drizzle";
    }
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
    case 85:
    case 86: {
      return "rain";
    }
    case 71:
    case 73:
    case 75: {
      return "snow";
    }
    case 77: {
      return "hail";
    }
    case 95:
    case 96:
    case 99: {
      return "thunderstorms";
    }
    default: {
      throw new Error(`Uknown weather code ${weathercode}`);
    }
  }
}

export function toTimestampInSeconds(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

export function compareTemperature(
  currentTemperature: number,
  temperatures: number[],
  times: number[],
): "colder" | "warmer" | "same" {
  const normalizedDate = set(new Date(), {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const timestamp = toTimestampInSeconds(subDays(normalizedDate, 1));
  const yesterdayTemperature = Math.round(
    temperatures[times.indexOf(timestamp)],
  );
  if (currentTemperature > yesterdayTemperature) {
    return "warmer";
  } else if (currentTemperature === yesterdayTemperature) {
    return "same";
  } else if (currentTemperature < yesterdayTemperature) return "colder";

  return "same"; // it's needed to shut up TypeScript
}

export function getDirectionSymbol(direction: number) {
  if (direction <= 45) {
    return "🡸";
  } else if (direction < 90) {
    return "🡼";
  } else if (direction < 135) {
    return "🡹";
  } else if (direction < 180) {
    return "🡽";
  } else if (direction < 225) {
    return "🢂";
  } else if (direction < 270) {
    return "🡾";
  } else if (direction < 315) {
    return "🢃";
  } else if (direction <= 360) {
    return "🡿";
  }
}
