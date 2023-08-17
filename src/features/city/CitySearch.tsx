import { useState } from "react";
import { geocodingApi } from "../../services/geocoding";

function CitySearch() {
  const [inputValue, setInputValue] = useState("");

  const { data: result } = geocodingApi.useSearchCityQuery(
    {
      cityName: inputValue,
      language: "ru",
    },
    { skip: inputValue.length < 2 }, // API does not work with query < 2 length.
  );
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Type a city name..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label htmlFor=""></label>
      {result?.results &&
        result.results.map((city) => (
          <div key={city.id}>
            {city.name}, {city.country}
          </div>
        ))}
    </div>
  );
}

export default CitySearch;
