import { CityData } from "../../city/cityTypes";

interface CityChipProps {
  city: CityData;
}

function CityChip({ city }: CityChipProps) {
  return <div>{city.name}</div>;
}

export default CityChip;
