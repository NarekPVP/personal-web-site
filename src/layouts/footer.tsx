import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="fixed inset-x-0 bottom-0 py-6 bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Footer content, hidden on small screens, shown on larger screens */}
          <div className="hidden md:block mt-8 md:mt-0 md:order-1">
            <Link
              href={siteConfig.githubRepoUrl}
              target="_blank"
              className="text-center text-xs leading-5 text-muted-foreground"
            >
              {t("Footer.content")}
            </Link>
          </div>
          {/* Navigation links */}
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
