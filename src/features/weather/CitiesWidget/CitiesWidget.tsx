import CityChip from "./CityChip";

const placeholderCities = [
  {
    country: "Россия",
    latitude: 55.75222,
    longitude: 37.61556,
    name: "Москва",
    timezone: "Europe/Moscow",
    id: 524901,
  },
  {
    country: "Россия",
    latitude: 55.75222,
    longitude: 37.61556,
    name: "Минск",
    timezone: "Europe/Moscow",
    id: 524901,
  },
  {
    country: "Россия",
    latitude: 55.75222,
    longitude: 37.61556,
    name: "Нью-Йорк",
    timezone: "Europe/Moscow",
    id: 524901,
  },
  {
    country: "Россия",
    latitude: 55.75222,
    longitude: 37.61556,
    name: "Париж",
    timezone: "Europe/Moscow",
    id: 524901,
  },
];

function CitiesWidget() {
  return (
    <div className="flex flex-col px-2 py-4">
      <div className="font-semibold">Погода в других городах</div>
      <div className="flex flex-wrap gap-4">
        {placeholderCities.map((city) => (
          <CityChip city={city} />
        ))}
      </div>
    </div>
  );
}

export default CitiesWidget;
