import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between mx-auto">
        <div className="flex-1">
          <Link href="/" className="font-serif text-2xl font-bold">
            NH
          </Link>
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
