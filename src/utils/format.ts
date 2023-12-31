import { set, subDays } from "date-fns";

export function getFileByWeathercode(weathercode: number, isDay: 0 | 1 = 1) {
  switch (weathercode) {
    case 0: {
      return `clear${isDay === 1 ? "" : "-night"}`;
    }
    case 1:
    case 2: {
      return `cloudy${isDay === 1 ? "" : "-night"}`;
    }
    case 3: {
      return "overcast";
    }
    case 45:
    case 48: {
      return `fog${isDay === 1 ? "" : "-night"}`;
    }
    case 51:
    case 53:
    case 55:
    case 56:
    case 57: {
      return `drizzle${isDay === 1 ? "" : "-night"}`;
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
      return `rain${isDay === 1 ? "" : "-night"}`;
    }
    case 71:
    case 73:
    case 75: {
      return `snow${isDay === 1 ? "" : "-night"}`;
    }
    case 77: {
      return "hail";
    }
    case 95:
    case 96:
    case 99: {
      return `thunderstorms${isDay === 1 ? "" : "-night"}`;
    }
    default: {
      console.error(`Uknown weather code ${weathercode}`);
      return "not-available";
    }
  }
}

export function toTimestampInSeconds(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

export function normalizeDate(date: Date) {
  return set(date, {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
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

export function getBeaufort(windSpeed: number): number {
  const thresholds = [
    0.3, 1.6, 3.4, 5.5, 8.0, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7,
  ];

  for (let i = 0; i < thresholds.length; i++) {
    if (windSpeed < thresholds[i]) {
      return i;
    }
  }

  return 12;
}
