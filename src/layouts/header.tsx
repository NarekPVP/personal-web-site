import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm px-2">
      <nav className="container flex max-w-3xl items-center justify-between mx-auto">
        <div className="flex-1">
          <Avatar className="w-16 h-16 border-solid border-2 border-white">
            <AvatarImage
              src={siteConfig.profilePictureUrl}
              alt={`@${siteConfig.username}`}
            />
            <AvatarFallback>NH</AvatarFallback>
          </Avatar>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex-1 flex justify-end">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
