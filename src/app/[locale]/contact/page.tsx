import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const ContactMe = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-800 dark:to-black py-16 px-6 pt-36 pb-36">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          {t("ContactPage.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("ContactPage.contactTitle")}
            </h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {t("Common.email")}
              </h3>
              <p className="text-blue-500 hover:underline">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {t("Common.phone")}
              </h3>
              <p className="text-blue-500 hover:underline">
                <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
                  {siteConfig.phone}
                </a>
              </p>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("ContactPage.contactBottomTitle")}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center space-y-8">
            <div className="w-full p-6 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-700 dark:to-gray-900 rounded-lg text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                {t("Common.followMe")}
              </h3>
              <div className="flex space-x-4">
                {navigation.map((Nav) => (
                  <Link
                    href={siteConfig.socialMedia.twitter}
                    className="w-10 h-10 dark:text-white rounded-full flex items-center justify-center"
                  >
                    <Nav.icon />
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full p-6 bg-gradient-to-r from-teal-500 to-green-500 dark:from-gray-700 dark:to-gray-900 rounded-lg text-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                {t("ContactPage.NewProjectInfo.title")}
              </h3>
              <p className="text-lg mb-2">
                {t("ContactPage.NewProjectInfo.content")} 🥳
              </p>
              <Link
                href="#"
                className="block bg-white text-teal-500 dark:bg-gray-800 dark:text-white py-2 px-4 rounded-full text-center shadow-md hover:bg-teal-100 dark:hover:bg-gray-700 transition duration-300"
              >
                {t("ContactPage.NewProjectInfo.buttonContent")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
