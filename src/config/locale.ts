export const defaultLocale = "en";
export const locales = ["en", "am"] as const;
export type Locale = (typeof locales)[number];

export type TLanguage = {
  label: string;
  code: Locale;
};

export const LANGUAGES: TLanguage[] = [
  { label: "հյ", code: "am" },
  { label: "en", code: "en" },
];
