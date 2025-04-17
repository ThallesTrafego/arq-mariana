
import { AspectRatio } from "./ui/aspect-ratio";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category?: string;
}

export const ProjectCard = ({ image, title, description, category }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer hover-scale">
      <div className="overflow-hidden rounded-lg">
        <AspectRatio ratio={4/3}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
      </div>
      <div className="mt-4">
        {category && <p className="text-sm uppercase tracking-wider text-terracotta mb-1">{category}</p>}
        <h3 className="text-xl font-playfair">{title}</h3>
        <p className="text-neutral-600 mt-1">{description}</p>
      </div>
    </div>
  );
};
