import { useAppDispatch } from "../../hooks/storeHooks";
import { setCity } from "./citySlice";

import { CityData, SearchCity } from "./cityTypes";

interface CitySearchItemProps {
  searchItem: SearchCity;
}

function CitySearchItem({ searchItem }: CitySearchItemProps) {
  const dispatch = useAppDispatch();

  function handleCityPick() {
    const cityData: CityData = {
      name: searchItem.name,
      country: searchItem.country,
      latitude: searchItem.latitude,
      longitude: searchItem.longitude,
      timezone: searchItem.timezone,
      id: searchItem.id,
    };
    dispatch(setCity(cityData));
  }

  return (
    <li className="hover:bg-zinc-500">
      <button onClick={handleCityPick}>
        {searchItem.name}, {searchItem.country}
      </button>
    </li>
  );
}

export default CitySearchItem;
