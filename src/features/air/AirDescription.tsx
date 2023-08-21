import { useTranslation } from "react-i18next";
interface AirDescriptionProps {
  aqiKey: string;
}

function AirDescription({ aqiKey }: AirDescriptionProps) {
  const { t } = useTranslation();

  return <div>{t(`air.${aqiKey}`)}</div>;
}

export default AirDescription;
