
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectData } from "@/data/projectsData";

interface ProjectsGridProps {
  projects: ProjectData[];
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          images={project.images}
          title={project.title}
          category={project.category}
        />
      ))}
    </div>
  );
};
