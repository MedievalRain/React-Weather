import { getMoonIllumination } from "suncalc";

const phases = [
  "new",
  "waxing_crescent",
  "first_quarter",
  "waxing_gibbous",
  "full",
  "waning_gibbous",
  "last_quarter",
  "waning_crescent",
];

export function getPhaseName() {
  const phasePercent = getMoonIllumination(new Date()).phase;
  const index = Math.floor(phasePercent * 8);
  return phases[index];
}
