export const defaultLocale = "en";
export const locales = ["en", "am"] as const;
export type Locale = (typeof locales)[number];

export type TLanguage = {
  label: string;
  code: Locale;
  emoji: string;
};

export const LANGUAGES: TLanguage[] = [
  { label: "Հայերեն", code: "am", emoji: "🇦🇲" },
  { label: "English", code: "en", emoji: "🇺🇸" },
];
