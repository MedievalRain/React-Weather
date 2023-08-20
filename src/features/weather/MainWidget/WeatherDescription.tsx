import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="text-3xl font-extrabold text-gray-700">
      {`${t("description.today")} ${t(`description.${comparision}`)} ${t(
        "description.than_yesterday",
      )}, ${t("description.and")} ${t(
        `description.weathercode.${weathercode}`,
      )}`}
    </div>
  );
}

export default WeatherDescription;
