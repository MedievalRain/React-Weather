interface AirValueProps {
  aqiKey: string;
  aqi: number;
}

function AirValue({ aqiKey, aqi }: AirValueProps) {
  switch (aqiKey) {
    case "good":
      return (
        <div className="font-mono text-7xl font-extrabold text-green-600">
          {aqi}
        </div>
      );
    case "moderate":
      return (
        <div className="font-mono text-7xl font-extrabold text-yellow-600">
          {aqi}
        </div>
      );
    case "sensitive_risk":
      return (
        <div className="font-mono text-7xl font-extrabold text-orange-600">
          {aqi}
        </div>
      );
    case "unhealthy":
      return (
        <div className="font-mono text-7xl font-extrabold text-red-600">
          {aqi}
        </div>
      );
    case "very_unhealthy":
      return (
        <div className="font-mono text-7xl font-extrabold text-red-900">
          {aqi}
        </div>
      );
    case "hazardous":
      return (
        <div className="font-mono text-7xl font-extrabold text-violet-600">
          {aqi}
        </div>
      );
    default:
      return null;
  }
}

export default AirValue;
