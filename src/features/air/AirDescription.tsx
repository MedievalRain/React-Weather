import { useTranslation } from "react-i18next";
import { getAirDescriptionKey } from "./airUtils";

interface AirDescriptionProps {
  aqi: number;
}

function AirDescription({ aqi }: AirDescriptionProps) {
  const { t } = useTranslation();
  const descriptionKey = getAirDescriptionKey(aqi);
  return <div>{t(`air.${descriptionKey}`)}</div>;
}

export default AirDescription;
