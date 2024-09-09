"use client";

import { TProject } from "@/data/projects";
import Link from "next/link";
import React from "react";
import useCurrentLangCode from "@/hooks/useCurrentLangCode";
import { useTranslations } from "next-intl";
import { Gallery } from "react-grid-gallery";
import { Separator } from "./ui/separator";
import { Badge } from "@/components/ui/badge";

type TProjectCardProps = {
  project: TProject;
};

const ProjectCard: React.FC<TProjectCardProps> = ({ project }) => {
  const t = useTranslations();
  const lang = useCurrentLangCode();

  return (
    <div
      key={project.slug}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl w-full"
    >
      <div className="p-8 space-y-4">
        <Link href={project.githubRepoUrl ?? "#"} target="_blank" className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </Link>
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              FullStack
            </h4>
            <p className="text-sm text-muted-foreground">
              {lang === "am" && project.headerLineAM}
              {lang === "en" && project.headerLineEN}
            </p>
          </div>
          <Separator className="my-4" />
          {project.tags && project.tags.length > 0 && (
            <div className="flex h-5 items-center space-x-4 text-sm">
              {project.tags.map((tag, index) => (
                <React.Fragment key={index}>
                  <Link href={tag.url} target="_blank">
                    <Badge
                      style={{
                        backgroundColor: tag.color,
                        color: tag.textColor,
                      }}
                    >
                      {tag.label}
                    </Badge>
                  </Link>
                  {index < project.tags!.length - 1 && (
                    <Separator orientation="vertical" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {lang === "am" && project.contentAM}
          {lang === "en" && project.contentEN}
        </p>
        {project.githubRepoUrl && (
          <Link
            href={project.githubRepoUrl}
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌟 {t("ProjectsPage.viewOnGithub")}
          </Link>
        )}
        {project.images && (
          <div className="mt-6">
            <Gallery
              images={project.images}
              enableImageSelection={false}
              rowHeight={180}
            />
          </div>
        )}
      </div>
      {project.video && (
        <div className="relative w-full pb-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
            controls
            src={project.video}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
