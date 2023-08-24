import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../hooks/storeHooks";
import { setCity } from "./citySlice";

import { CityData, SearchCity } from "./cityTypes";

interface CitySearchItemProps {
  searchItem: SearchCity;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

function CitySearchItem({ searchItem, setInputValue }: CitySearchItemProps) {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  function handleCityPick() {
    const cityData: CityData = {
      name: searchItem.name,
      country: searchItem.country,
      latitude: searchItem.latitude,
      longitude: searchItem.longitude,
      timezone: searchItem.timezone,
      id: searchItem.id,
      locale: i18n.language,
    };
    dispatch(setCity(cityData));

    setInputValue("");
  }

  return (
    <li className="flex justify-between">
      <button
        onClick={handleCityPick}
        className="w-full rounded-md px-2  py-1  text-start  hover:bg-sky-200 dark:hover:bg-gray-700"
      >
        <div>
          {searchItem.name}, {searchItem.country}, {searchItem.admin1}
        </div>
      </button>
    </li>
  );
}

export default CitySearchItem;
