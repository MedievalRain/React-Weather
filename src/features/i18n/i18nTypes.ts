import { ru, enUS } from "date-fns/locale";
import type { Locale } from "date-fns";

export const languageSchema: Record<string, Locale> = {
  ru: ru,
  en: enUS,
};
