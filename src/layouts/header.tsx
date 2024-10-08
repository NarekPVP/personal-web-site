"use client";

import React, { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";
import LanguageToggle from "@/components/language-toggle";
import SettingsSheet from "@/components/settings-sheet";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const t = useTranslations();
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-2 backdrop-blur-sm px-2">
      <nav className="container flex max-w-3xl items-center justify-between mx-auto">
        {/* Avatar on the far left */}
        <div className="flex items-center justify-start flex-1">
          <Link href="/">
            <Avatar className="w-14 h-14 border-solid border-2 border-white">
              <AvatarImage
                src={siteConfig.profilePictureUrl}
                alt={`@${siteConfig.username}`}
              />
              <AvatarFallback>NH</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Navigation content in the center */}
        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">{t("Header.posts")}</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">{t("Header.projects")}</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">{t("Header.contact")}</Link>
          </li>
        </ul>

        {/* Language and Theme Toggle on the far right */}
        <div className="flex items-center justify-end flex-1 space-x-4">
          <Button onClick={handleSettingsClick}>
            <Settings className="h-4 w-4" />
          </Button>
          
        </div>
      </nav>
      <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
    </header>
  );
};

export default Header;
