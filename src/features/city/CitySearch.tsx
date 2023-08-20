import { useEffect, useState } from "react";
import { geocodingApi } from "../../services/geocoding";
import CitySearchItem from "./CitySearchItem";
import { useAppSelector } from "../../hooks/storeHooks";
import useKey from "../../hooks/useKey";

function CitySearch() {
  const [inputValue, setInputValue] = useState("");
  const [isOpened, setIsOpened] = useState(true);
  const { data: foundCities } = geocodingApi.useSearchCityQuery(
    {
      cityName: inputValue,
      language: "ru",
    },
    { skip: inputValue.length < 2 }, // API does not work with query < 2 length.
  );
  useKey("Escape", () => setIsOpened(false));
  useEffect(() => {
    setIsOpened(inputValue.length >= 2);
  }, [inputValue]);

  const { name: cityName, country } = useAppSelector((state) => state.city);
  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          id="search"
          className="my-4 w-full flex-1 rounded-md p-1 shadow-md"
          type="text"
          value={inputValue}
          placeholder="Type a city name..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        {cityName ? (
          <label htmlFor="search" className="cursor-pointer font-semibold">
            {cityName}, {country}
          </label>
        ) : null}
      </div>

      {isOpened ? (
        <ul className="absolute rounded-md bg-white shadow-lg">
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
