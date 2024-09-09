"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { LANGUAGES, Locale } from "@/config/locale";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageToggle = () => {
  const t = useTranslations()
  const locale = useLocale() as Locale;
  const router = useRouter();

  const onChangeLang = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div className="flex flex-col space-y-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <label className="text-gray-700 dark:text-gray-300 font-medium">{t("Settings.language")}:</label>
      <Select defaultValue={locale} onValueChange={onChangeLang}>
        <SelectTrigger className="dark:bg-gray-900 dark:border-gray-700 border border-gray-300 rounded-md p-2">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent className="rounded-md dark:bg-gray-900 dark:border-gray-700 border border-gray-300">
          {LANGUAGES.map(({ code, label, emoji }) => (
            <SelectItem
              key={code}
              className="dark:bg-gray-900 dark:border-gray-700 border-b border-gray-300 text-center py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              value={code}
            >
              <div className="flex items-center justify-between">
                <span className="mr-2">{emoji}</span>
                <span>{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageToggle;
