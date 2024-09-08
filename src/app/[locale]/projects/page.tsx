import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import React from "react";

const ProjectsPage = () => {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 pt-36 pb-36">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
          🛠️ {t("ProjectsPage.title")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
