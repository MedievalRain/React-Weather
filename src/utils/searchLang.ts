export function getLanguageByFirstLetter(s: string): "en" | "ru" {
  if (/^[a-zA-Z]/.test(s)) {
    return "en";
  }
  if (/^[а-яА-ЯЁё]/.test(s)) {
    return "ru";
  }
  return "en";
}
