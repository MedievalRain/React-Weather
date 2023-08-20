import { formatInTimeZone } from "date-fns-tz";
import { ru, enUS } from "date-fns/locale";
import type { Locale } from "date-fns";
import { useTranslation } from "react-i18next";
interface FormattedDateProps {
  timezone: string;
}

const languageSchema: Record<string, Locale> = {
  ru: ru,
  en: enUS,
};
function FormattedDate({ timezone }: FormattedDateProps) {
  const { i18n } = useTranslation();
  const formattedDateString = formatInTimeZone(
    new Date(),
    timezone,
    "dd MMMM, EEEE",
    { locale: languageSchema[i18n.language] },
  );

  return <div>{formattedDateString}</div>;
}

export default FormattedDate;
