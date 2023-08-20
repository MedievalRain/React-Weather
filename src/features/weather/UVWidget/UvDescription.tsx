interface UvDescriptionProps {
  uvIndex: number;
}

function UvDescription({ uvIndex }: UvDescriptionProps) {
  if (uvIndex <= 2) {
    return <div className="font-semibold text-green-600">Низкий</div>;
  } else if (uvIndex <= 5) {
    return <div className="font-semibold text-yellow-600">Умеренный</div>;
  } else if (uvIndex <= 7) {
    return <div className="font-semibold text-orange-600">Высокий</div>;
  } else if (uvIndex <= 10) {
    return <div className="font-semibold text-red-600">Очень высокий</div>;
  } else {
    return <div className="font-semibold text-violet-600">Экстремальный</div>;
  }
}

export default UvDescription;
