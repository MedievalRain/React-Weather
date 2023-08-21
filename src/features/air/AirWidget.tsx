import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/storeHooks";
import { airQualityApi } from "../../services/airQuality";
import AirDescription from "./AirDescription";
import { getAirDescriptionKey } from "./airUtils";
import AirValue from "./AirValue";

function AirWidget() {
  const { latitude, longitude } = useAppSelector((state) => state.city);
  const { data: air } = airQualityApi.useGetAirQualityQuery({
    latitude,
    longitude,
  });
  const { t } = useTranslation();
  const aqi = air?.hourly.us_aqi[0];
  if (aqi) {
    const aqiKey = getAirDescriptionKey(aqi);
    return (
      <div className="flex h-full flex-col items-center justify-between p-4 font-semibold">
        <div>{t("air.air")}</div>
        <AirValue aqi={aqi} aqiKey={aqiKey} />
        <AirDescription aqiKey={aqiKey} />
      </div>
    );
  }
}

export default AirWidget;
