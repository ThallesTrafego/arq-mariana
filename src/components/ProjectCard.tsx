
import { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ProjectGalleryModal } from "./ProjectGalleryModal";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  category?: string;
}

export const ProjectCard = ({ images, title, description, category }: ProjectCardProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg">
        <Carousel className="relative">
          <CarouselContent>
            {images.slice(0, 3).map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={4/3}>
                  <img
                    src={image}
                    alt={`${title} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
      <div className="mt-4">
        {category && (
          <p className="text-sm uppercase tracking-wider text-terracotta mb-1">{category}</p>
        )}
        <h3 className="text-xl font-adam">{title}</h3>
        <p className="text-neutral-600 mt-1 mb-4">{description}</p>
        <Button
          variant="outline"
          className="rounded-full border-terracotta text-terracotta hover:bg-terracotta/10"
          onClick={() => setGalleryOpen(true)}
        >
          Ver mais fotos do projeto
        </Button>
      </div>

      <ProjectGalleryModal
        images={images}
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
      />
    </div>
  );
};
