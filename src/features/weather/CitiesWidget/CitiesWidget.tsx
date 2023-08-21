import { useState } from "react";
import { useAppSelector } from "../../../hooks/storeHooks";
import CityChip from "./CityChip";
import EditButton from "./EditButton";

function CitiesWidget() {
  const { savedCities } = useAppSelector((state) => state.city);
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      <div className="flex justify-between">
        <div className="font-semibold">Погода в других городах</div>
        <EditButton isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      </div>
      <div className="flex flex-wrap gap-4">
        {savedCities.map((city) => (
          <CityChip key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}

export default CitiesWidget;
