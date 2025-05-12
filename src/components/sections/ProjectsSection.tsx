
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ProjectsHeader } from "@/components/ProjectsHeader";
import { projectsData } from "@/data/projectsData";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        <ProjectsGrid projects={projectsData} />
      </div>
    </section>
  );
};
