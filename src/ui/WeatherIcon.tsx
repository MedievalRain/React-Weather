interface WeatherIconProps {
  weathercode: number;
  size: "small" | "medium" | "big";
}

function WeatherIcon({ weathercode, size }: WeatherIconProps) {
  switch (size) {
    case "big": {
      return <img className="w-28" src="/weather-icons/rain.svg" alt="rain" />;
    }
    case "medium": {
      return <img className="w-14" src="/weather-icons/rain.svg" alt="rain" />;
    }
    default: {
      return null;
    }
  }
}

export default WeatherIcon;
