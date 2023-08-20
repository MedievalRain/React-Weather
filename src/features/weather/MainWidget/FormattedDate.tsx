import { formatInTimeZone } from "date-fns-tz";
import { useTranslation } from "react-i18next";
import { languageSchema } from "../../i18n/i18nTypes";
interface FormattedDateProps {
  timezone: string;
}

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
