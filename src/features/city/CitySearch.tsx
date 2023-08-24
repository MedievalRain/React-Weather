import { useEffect, useRef, useState } from "react";
import { geocodingApi } from "../../services/geocoding";
import CitySearchItem from "./CitySearchItem";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import useKey from "../../hooks/useKey";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../i18n/LanguageMenu";
import useClickOutside from "../../hooks/useClickOutside";
import ThemeSwitchButton from "../theme/ThemeSwitchButton";
import useCity from "../../hooks/useCity";

function CitySearch() {
  const [inputValue, setInputValue] = useState("");
  const [isOpened, setIsOpened] = useState(true);
  const { t, i18n } = useTranslation();
  const menuRef = useRef<HTMLInputElement>(null);
  useClickOutside(menuRef, () => setIsOpened(false));
  const { data: foundCities } = geocodingApi.useSearchCityQuery(
    {
      cityName: inputValue,
      language: i18n.language,
    },
    { skip: inputValue.length < 2 }, // API does not work with query < 2 length.
  );
  useKey("Escape", () => setIsOpened(false));
  useEffect(() => {
    setIsOpened(inputValue.length >= 2);
  }, [inputValue]);

  const { currentCity } = useAppSelector((state) => state.city);
  const cityTest = useCity(currentCity);
  return (
    <div ref={menuRef} className="relative">
      <div className="flex items-center  gap-2">
        <input
          id="search"
          className="w-full flex-1 rounded-md p-2 text-lg shadow-md dark:bg-gray-800 dark:focus:bg-gray-800"
          type="text"
          value={inputValue}
          placeholder={`${t("search.placeholder")}...`}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label
          htmlFor="search"
          className="cursor-pointer text-lg font-semibold"
        >
          {cityTest.city && `${cityTest.city.name}, ${cityTest.city.country}`}
        </label>
        {isOpened ? (
          <ul className="absolute top-12 z-50 w-full overflow-hidden rounded-md bg-white shadow-lg dark:bg-gray-800">
            {foundCities?.results &&
              foundCities.results.map((city) => (
                <CitySearchItem
                  searchItem={city}
                  setInputValue={setInputValue}
                  key={city.id}
                />
              ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default CitySearch;
