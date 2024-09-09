import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import LanguageToggle from "./language-toggle";
import { ModeToggle } from "./mode-toggle";
import { useTranslations } from "next-intl";

type TSettingsSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SettingsSheet: React.FC<TSettingsSheetProps> = ({
  open,
  onOpenChange,
}) => {
  const t = useTranslations()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("Settings.title")}</SheetTitle>
          <div className="py-4 space-y-4">
            <LanguageToggle />
            <ModeToggle />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SettingsSheet;
