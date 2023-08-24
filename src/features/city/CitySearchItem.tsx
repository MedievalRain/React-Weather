import { useAppDispatch } from "../../hooks/storeHooks";
import { setCity } from "./citySlice";
import { SearchCity } from "./cityTypes";

interface CitySearchItemProps {
  searchItem: SearchCity;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

function CitySearchItem({ searchItem, setInputValue }: CitySearchItemProps) {
  const dispatch = useAppDispatch();
  function handleCityPick() {
    dispatch(setCity(searchItem.id));
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
