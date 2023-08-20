interface ForecastTableItemProps {
  timestamp: number;
  temperatureMax: number;
  temperatureMin: number;
  windspeed: number;
  windDirection: number;
  precipation: number;
}

function ForecastTableItem({
  timestamp,
  temperatureMax,
  temperatureMin,
  windspeed,
  windDirection,
  precipation,
}: ForecastTableItemProps) {
  return (
    <div className="flex border-b">
      <div className="w-1/4 p-2 text-left">John Doe</div>
      <div className="w-1/4 p-2 text-left">
        {Math.round(temperatureMax)}° {Math.round(temperatureMin)}°
      </div>
      <div className="w-1/4 p-2 text-left">{precipation}%</div>
      <div className="w-1/4 p-2 text-left">{Math.round(windspeed)} м/с</div>
    </div>
  );
}

export default ForecastTableItem;
