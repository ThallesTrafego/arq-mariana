
import { AspectRatio } from "./ui/aspect-ratio";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

export const ProjectCard = ({ image, title, description }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer hover-scale">
      <AspectRatio ratio={4/3}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="mt-4">
        <h3 className="text-xl font-playfair">{title}</h3>
        <p className="text-neutral-600 mt-1">{description}</p>
      </div>
    </div>
  );
};
