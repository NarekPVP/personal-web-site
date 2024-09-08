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
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();

  const onChangeLang = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div className="flex items-center justify-between px-2">
      <Select defaultValue={locale} onValueChange={onChangeLang}>
        <SelectTrigger className="dark:bg-zinc-900 dark:border-zinc-900 border border-gray-300 rounded-md p-2">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="rounded-md dark:bg-zinc-900 dark:border-zinc-900 border border-gray-300">
          {LANGUAGES.map(({ code, label }) => (
            <SelectItem
              key={code}
              className="dark:bg-zinc-900 dark:border-zinc-900 border-b border-gray-300 text-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              value={code}
            >
              <div className="flex items-center justify-between">
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