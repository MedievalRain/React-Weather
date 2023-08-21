import { useAppSelector } from "../../../hooks/storeHooks";
import CityChip from "./CityChip";

function CitiesWidget() {
  const { savedCities } = useAppSelector((state) => state.city);
  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      <div className="font-semibold">Погода в других городах</div>
      <div className="flex flex-wrap gap-4">
        {savedCities.map((city) => (
          <CityChip key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}

export default CitiesWidget;
