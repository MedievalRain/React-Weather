import { useAppSelector } from "../../../hooks/storeHooks";
import * as SunCalc from "suncalc";
import { getPhaseName } from "./moonUtils";
import MoonIcon from "./MoonIcon";
import { useTranslation } from "react-i18next";

function MoonWidget() {
  const { t } = useTranslation();
  const moonPhaseNumber = SunCalc.getMoonIllumination(new Date()).phase;
  const phase = getPhaseName(moonPhaseNumber);
  return (
    <div className="flex flex-col items-center p-4">
      <div className="font-semibold">{t("uv.uv_index")}</div>
      <MoonIcon phase={phase} />
    </div>
  );
}

export default MoonWidget;
