"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const Welcome = () => {
  const t = useTranslations();

  const handleDownloadCV = () => {
    window.open(siteConfig.CVUrl, "_blank");
  };

  return (
    <div className="container max-w-4xl mx-auto px-6">
      <div className="flex flex-col items-center mb-8">
        <Image
          src={siteConfig.profilePictureUrl}
          alt="Your Avatar"
          width={150}
          height={150}
          className="rounded-full shadow-md border-solid border-4 border-white"
        />
        <h1 className="text-5xl font-bold mt-6">{t("WelcomePage.title")}</h1>
      </div>

      <div className="text-left">
        <p
          className="text-xl mb-4"
          dangerouslySetInnerHTML={{ __html: t.raw("WelcomePage.content1") }}
        />
        <p className="text-lg mb-6">{t("WelcomePage.content2")}</p>
        <p className="text-lg mb-2">{t("WelcomePage.content3")}</p>
        <p
          className="text-lg mb-6"
          dangerouslySetInnerHTML={{ __html: t.raw("WelcomePage.content4") }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Button
          onClick={handleDownloadCV}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2"
        >
          <FaDownload /> {t("Common.downloadCV")}
        </Button>

        <Link href={siteConfig.socialMedia.github} target="_blank">
          <Button className="px-6 py-3 bg-gray-700 hover:bg-gray-900 text-white rounded-lg flex items-center gap-2">
            <FaGithub /> GitHub
          </Button>
        </Link>

        <Link href={siteConfig.socialMedia.linkedIn} target="_blank">
          <Button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg flex items-center gap-2">
            <FaLinkedin /> LinkedIn
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
