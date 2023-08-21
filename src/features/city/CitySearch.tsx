import { useEffect, useRef, useState } from "react";
import { geocodingApi } from "../../services/geocoding";
import CitySearchItem from "./CitySearchItem";
import { useAppSelector } from "../../hooks/storeHooks";
import useKey from "../../hooks/useKey";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../i18n/LanguageMenu";
import { getLanguageByFirstLetter } from "../../utils/searchLang";
import useClickOutside from "../../hooks/useClickOutside";

function CitySearch() {
  const [inputValue, setInputValue] = useState("");
  const [isOpened, setIsOpened] = useState(true);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLInputElement>(null);
  useClickOutside(menuRef, () => setIsOpened(false));
  const { data: foundCities } = geocodingApi.useSearchCityQuery(
    {
      cityName: inputValue,
      language: getLanguageByFirstLetter(inputValue),
    },
    { skip: inputValue.length < 2 }, // API does not work with query < 2 length.
  );
  useKey("Escape", () => setIsOpened(false));
  useEffect(() => {
    setIsOpened(inputValue.length >= 2);
  }, [inputValue]);

  const { name: cityName, country } = useAppSelector((state) => state.city);
  return (
    <div ref={menuRef}>
      <div className="flex items-center  gap-2">
        <LanguageMenu />
        <input
          id="search"
          className="w-full flex-1 rounded-md p-1 shadow-md"
          type="text"
          value={inputValue}
          placeholder={`${t("search.placeholder")}...`}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {cityName ? (
          <label htmlFor="search" className="cursor-pointer font-semibold">
            {cityName}, {country}
          </label>
        ) : null}
      </div>

      {isOpened ? (
        <ul className="absolute z-50 rounded-md bg-white shadow-lg">
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
  );
}

export default CitySearch;
