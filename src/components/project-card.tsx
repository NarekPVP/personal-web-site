"use client";

import { TProject } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import useCurrentLangCode from "@/hooks/useCurrentLangCode";
import { useTranslations } from "next-intl";

type TProjectCardProps = {
  project: TProject;
};

const ProjectCard: React.FC<TProjectCardProps> = ({ project }) => {
  const t = useTranslations();
  const lang = useCurrentLangCode();

  return (
    <div
      key={project.slug}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      {project.video && (
        <div className="relative pb-9/16">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            controls
            src={project.video}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="p-6">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {lang === "am" && project.contentAM}
          {lang === "en" && project.contentEN}
        </p>
        {project.githubRepoUrl && (
          <Link
            href={project.githubRepoUrl}
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌟 {t("ProjectsPage.viewOnGithub")}
          </Link>
        )}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.images?.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={100}
              height={100}
              alt={`Project ${project.title} Screenshot ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
