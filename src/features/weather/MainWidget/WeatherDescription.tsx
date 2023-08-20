import { compareTemperature } from "../../../utils/format";

interface WeatherDescriptionProps {
  currentTemperature: number;
  weathercode: number;
  temperatures: number[];
  times: number[];
}

function WeatherDescription({
  currentTemperature,
  weathercode,
  temperatures,
  times,
}: WeatherDescriptionProps) {
  const comparision = compareTemperature(
    currentTemperature,
    temperatures,
    times,
  );

  return (
    <div className="text-3xl font-extrabold text-gray-700">
      It's {comparision} today than yesterday and cloudy
    </div>
  );
}

export default WeatherDescription;
