
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

interface ProjectGalleryModalProps {
  images: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectGalleryModal = ({ images, open, onOpenChange }: ProjectGalleryModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [preloadedIndexes, setPreloadedIndexes] = useState<number[]>([]);
  const [imageOrientation, setImageOrientation] = useState<'landscape' | 'portrait'>('landscape');

  useEffect(() => {
    if (open) {
      const imagesToPreload = [
        currentImageIndex,
        (currentImageIndex + 1) % images.length,
        (currentImageIndex - 1 + images.length) % images.length,
      ];
      
      setPreloadedIndexes(imagesToPreload);
    }
  }, [currentImageIndex, open, images.length]);

  const handleImageLoad = (index: number, event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    setImageOrientation(img.naturalWidth > img.naturalHeight ? 'landscape' : 'portrait');
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl h-[90vh] p-0 bg-black/95">
        <div className="relative h-full flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20 z-50"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={previousImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="w-full h-full flex items-center justify-center p-8">
            {!loadedImages[currentImageIndex] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
              </div>
            )}
            <img
              src={images[currentImageIndex]}
              alt={`Imagem ${currentImageIndex + 1}`}
              loading="lazy"
              onLoad={(e) => handleImageLoad(currentImageIndex, e)}
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                loadedImages[currentImageIndex] ? 'opacity-100' : 'opacity-0'
              } ${imageOrientation === 'portrait' ? 'h-full' : 'w-full'}`}
            />
            
            {/* Preload adjacent images */}
            <div className="hidden">
              {preloadedIndexes.map(index => (
                index !== currentImageIndex && (
                  <img 
                    key={`preload-${index}`}
                    src={images[index]} 
                    loading="lazy"
                    onLoad={(e) => handleImageLoad(index, e)}
                    alt=""
                  />
                )
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
