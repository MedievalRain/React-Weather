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

  const { name: city, country } = useAppSelector((state) => state.city);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Type a city name..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label htmlFor=""></label>

      {isOpened
        ? foundCities?.results &&
          foundCities.results.map((city) => (
            <CitySearchItem
              searchItem={city}
              setInputValue={setInputValue}
              key={city.id}
            />
          ))
        : null}
      <div>
        {city}, {country}
      </div>
    </div>
  );
}

export default CitySearch;
