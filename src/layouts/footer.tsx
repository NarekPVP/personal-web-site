import { navigation } from "@/config/navigation";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 py-8 bg-background">
      <div className="container max-w-3xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
