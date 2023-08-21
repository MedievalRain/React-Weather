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
      <div className="flex h-full flex-col items-center justify-between p-4 font-semibold">
        <div>Air quality</div>
        <div className="font-mono text-7xl font-extrabold">
          {air.hourly.us_aqi[0]}
        </div>
        <div>Normal</div>
      </div>
    );
  }
}

export default AirWidget;
