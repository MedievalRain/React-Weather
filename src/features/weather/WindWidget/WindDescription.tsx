import { useTranslation } from "react-i18next";

interface WindDescriptionProps {
  windSpeed: number;
}

function WindDescription({ windSpeed }: WindDescriptionProps) {
  const { t } = useTranslation();
  if (windSpeed <= 2) {
    return (
      <div className="font-semibold capitalize text-green-600">
        {t("uv.low")}
      </div>
    );
  } else if (windSpeed <= 5) {
    return (
      <div className="font-semibold capitalize text-yellow-600">
        {t("uv.moderate")}
      </div>
    );
  } else if (windSpeed <= 7) {
    return (
      <div className="font-semibold capitalize text-orange-600">
        {t("uv.high")}
      </div>
    );
  } else if (windSpeed <= 10) {
    return (
      <div className="font-semibold capitalize text-red-600">
        {t("uv.very_high")}
      </div>
    );
  } else {
    return (
      <div className="font-semibold capitalize text-violet-600">
        {t("uv.extreme")}
      </div>
    );
  }
}

export default WindDescription;
