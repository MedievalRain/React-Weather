import { useAppSelector } from "../../hooks/storeHooks";
import { airQualityApi } from "../../services/airQuality";

function AirWidget() {
  const { latitude, longitude } = useAppSelector((state) => state.city);
  const { data: air } = airQualityApi.useGetAirQualityQuery({
    latitude,
    longitude,
  });

  if (air) {
    return (
      <div className="flex flex-col items-center p-4 font-semibold">
        <div>Air quality</div>
        <div>{air.hourly.us_aqi[0]}</div>
        <div>Normal</div>
      </div>
    );
  }
}

export default AirWidget;
