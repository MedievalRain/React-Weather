import { useAppSelector } from "../../../hooks/storeHooks";
import { weatherApi } from "../../../services/weather";
import WeatherIcon from "../../../ui/WeatherIcon";

function MainWidget() {
  const { latitude, longitude, timezone, id } = useAppSelector(
    (state) => state.city,
  );
  const { data: weather } = weatherApi.useGetWeatherQuery(
    {
      latitude,
      longitude,
      timezone,
    },
    { skip: id === 0 },
  );
  if (weather) {
    return (
      <div className="flex flex-col gap-2 p-4">
        <div>Суббота, 19 августа</div>
        <div className="text-3xl font-extrabold text-gray-700">
          Сегодня холоднее, чем вчера и облачно
        </div>
        <div className="flex -translate-x-4 items-center font-mono text-6xl font-extrabold text-gray-700">
          <WeatherIcon size="big" weathercode={1} />
          {Math.round(weather.current_weather.temperature)}°
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="text-gray-600">Ночью</div>
            <div className="flex -translate-x-4 items-center font-mono text-2xl font-extrabold text-gray-700">
              <WeatherIcon size="medium" weathercode={1} />
              13°
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-600">Ночью</div>
            <div className="flex -translate-x-4 items-center font-mono text-2xl font-extrabold text-gray-700">
              <WeatherIcon size="medium" weathercode={1} />
              13°
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-600">Ночью</div>
            <div className="flex -translate-x-4 items-center font-mono text-2xl font-extrabold text-gray-700">
              <WeatherIcon size="medium" weathercode={1} />
              13°
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainWidget;
