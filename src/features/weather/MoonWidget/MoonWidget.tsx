import { useAppSelector } from "../../../hooks/storeHooks";
import * as SunCalc from "suncalc";
import { getPhaseName } from "./moonUtils";
import MoonIcon from "./MoonIcon";
import { useTranslation } from "react-i18next";

function MoonWidget() {
  const { t } = useTranslation();
  const phase = getPhaseName();
  return (
    <div className="flex flex-col items-center p-4">
      <div className="font-semibold">{t("moon.moon")}</div>
      <MoonIcon phase={phase} />
      <div className="font-semibold">{t(`moon.${phase}`)}</div>
    </div>
  );
}

export default MoonWidget;
