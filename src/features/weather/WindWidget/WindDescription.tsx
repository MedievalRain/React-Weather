import { useTranslation } from "react-i18next";

interface WindDescriptionProps {
  beaufort: number;
}

function WindDescription({ beaufort }: WindDescriptionProps) {
  const { t } = useTranslation();
  return <div className="font-semibold">{t(`wind.${beaufort}`)}</div>;
}

export default WindDescription;
