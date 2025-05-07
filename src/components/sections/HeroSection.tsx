
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export const HeroSection = ({ onScrollToProjects }: HeroSectionProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an image object to check when the background image is loaded
    const img = new Image();
    img.src = "/lovable-uploads/4cbaa9e3-00ff-459c-b98d-30766bfc6c6f.png";
    
    // If the image is already in cache, it might be loaded immediately
    if (img.complete) {
      setIsImageLoaded(true);
    } else {
      img.onload = () => {
        setIsImageLoaded(true);
      };
    }

    // Apply the background image directly to improve loading
    if (bgRef.current) {
      bgRef.current.style.backgroundImage = "url('/lovable-uploads/4cbaa9e3-00ff-459c-b98d-30766bfc6c6f.png')";
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        ref={bgRef}
        className={`absolute inset-0 z-0 transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Low quality image placeholder while main image loads */}
      {!isImageLoaded && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#333',
          }}
        ></div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-adam leading-tight mb-6">
            Arquitetura que<br />
            reflete você
          </h1>
          <p className="text-xl mb-10 max-w-xl mx-auto font-century opacity-90">
            Transformando espaços com sensibilidade, criatividade e personalidade única para cada cliente
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton text="Quero transformar meu ambiente" className="bg-terracotta hover:bg-terracotta/90" />
            <Button 
              variant="outline" 
              className="rounded-full border-2 border-terracotta bg-terracotta/80 text-white hover:bg-terracotta hover:border-terracotta transition-all"
              onClick={onScrollToProjects}
            >
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
