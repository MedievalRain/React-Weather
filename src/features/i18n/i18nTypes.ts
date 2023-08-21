import type { Locale } from "date-fns";
import enUS from "date-fns/locale/en-US";
import ru from "date-fns/locale/ru";

export const languageSchema: Record<string, Locale> = {
  ru: ru,
  en: enUS,
};
