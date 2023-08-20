import { useAppDispatch } from "../../hooks/storeHooks";
import { setCity } from "./citySlice";

import { CityData, SearchCity } from "./cityTypes";

interface CitySearchItemProps {
  searchItem: SearchCity;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

function CitySearchItem({ searchItem, setInputValue }: CitySearchItemProps) {
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

    setInputValue("");
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
