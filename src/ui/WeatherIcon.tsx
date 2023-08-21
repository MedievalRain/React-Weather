import { getFileByWeathercode } from "../utils/format";

interface WeatherIconProps {
  weathercode: number;
  size: "small" | "medium" | "big";
  isDay?: 0 | 1;
}

function WeatherIcon({ weathercode, size, isDay }: WeatherIconProps) {
  const fileName = getFileByWeathercode(weathercode, isDay);
  switch (size) {
    case "big": {
      return (
        <img
          className="h-32 w-32"
          src={`/weather-icons/${fileName}.svg`}
          alt="fileName"
        />
      );
    }
    case "medium": {
      return (
        <img
          className="h-14 w-14"
          src={`/weather-icons/${fileName}.svg`}
          alt="fileName"
        />
      );
    }
    case "small": {
      return (
        <img
          className="h-14 w-10 translate-y-0.5"
          src={`/weather-icons/${fileName}.svg`}
          alt="fileName"
        />
      );
    }
    default: {
      return null;
    }
  }
}

export default WeatherIcon;
