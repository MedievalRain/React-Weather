import { useAppSelector } from "../../hooks/storeHooks";
import { weatherApi } from "../../services/weather";

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

  return <div>{weather && weather.timezone}</div>;
}

export default MainWidget;
