import { useState } from "react";
import { geocodingApi } from "../../services/geocoding";
import CitySearchItem from "./CitySearchItem";
import { useAppSelector } from "../../hooks/storeHooks";

function CitySearch() {
  const [inputValue, setInputValue] = useState("");

  const { data: cities } = geocodingApi.useSearchCityQuery(
    {
      cityName: inputValue,
      language: "ru",
    },
    { skip: inputValue.length < 2 }, // API does not work with query < 2 length.
  );
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
      {cities?.results &&
        cities.results.map((city) => (
          <CitySearchItem searchItem={city} key={city.id} />
        ))}
      <div>
        {city}, {country}
      </div>
    </div>
  );
}

export default CitySearch;
