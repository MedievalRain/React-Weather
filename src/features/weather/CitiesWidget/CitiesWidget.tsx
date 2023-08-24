import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/storeHooks";
import CityChip from "./CityChip";
import EditButton from "./EditButton";
import { useTranslation } from "react-i18next";
import SaveButton from "../MainWidget/SaveButton";

function CitiesWidget() {
  const { savedCities } = useAppSelector((state) => state.city);
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    if (isEditMode && savedCities.length === 0) setIsEditMode(false);
  }, [isEditMode, savedCities.length]);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 px-2 py-4">
      <div className="flex items-center  justify-between">
        <div className="font-semibold">
          {isEditMode
            ? t("cities.delete_cities")
            : t("cities.weather_other_cities")}
        </div>

        <EditButton
          disabled={savedCities.length === 0}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {savedCities.map((city) => (
          <CityChip key={city.id} city={city} isEditMode={isEditMode} />
        ))}
        {savedCities.length === 0 && (
          <div className="flex items-center gap-1">
            <div>{t("cities.save_cities_advice")} </div>
            <SaveButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default CitiesWidget;
