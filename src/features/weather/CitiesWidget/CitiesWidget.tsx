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
    country: "Беларусь",
    latitude: 53.9,
    longitude: 27.5667,
    name: "Минск",
    timezone: "Europe/Moscow",
    id: 521901,
  },
  {
    country: "США",
    latitude: 40.7143,
    longitude: -74.006,
    name: "Нью-Йорк",
    timezone: "Europe/Moscow",
    id: 524323901,
  },
  {
    country: "Франция",
    latitude: 55.5575,
    longitude: 58.5836,
    name: "Париж",
    timezone: "Europe/Moscow",
    id: 5241234123901,
  },
];

function CitiesWidget() {
  return (
    <div className="flex flex-col gap-2 px-2 py-4">
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
