import { useTranslation } from "react-i18next";
import { geocodingApi } from "../services/geocoding";

function useCity(id: number) {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const { data: city, isFetching } = geocodingApi.useLocalizeCityQuery(
    {
      id,
      language,
    },

    { skip: id === 0 || !id },
  );

  return { city, isFetching };
}

export default useCity;
