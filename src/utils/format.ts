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
