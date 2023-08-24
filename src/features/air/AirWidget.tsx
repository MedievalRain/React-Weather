import { useTranslation } from "react-i18next";
import { airQualityApi } from "../../services/airQuality";
import AirDescription from "./AirDescription";
import { getAirDescriptionKey } from "./airUtils";
import AirValue from "./AirValue";
import useCurrentCity from "../../hooks/useCurrentCity";

function AirWidget() {
  const { city } = useCurrentCity();
  const { data: air } = airQualityApi.useGetAirQualityQuery(
    {
      latitude: city?.latitude as number,
      longitude: city?.longitude as number,
    },
    { skip: !city },
  );
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
  } else return null;
}

export default AirWidget;
