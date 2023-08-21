export function getAirDescriptionKey(aqi: number) {
  const aqiSteps = [50, 100, 150, 200, 300, 500];
  const aqiNames = [
    "good",
    "moderate",
    "sensitive_risk",
    "unhealthy",
    "very_unhealthy",
    "hazardous",
  ];
  for (let i = 0; i < aqiSteps.length; i++) {
    if (aqi < aqiSteps[i]) {
      return aqiNames[i];
    }
  }
}
