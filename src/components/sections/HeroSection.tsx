
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

export const HeroSection = ({ onScrollToProjects }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/5a0f12c2-219f-41d5-8487-d4b95390847b.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-adam leading-tight mb-6 fade-in">
            Arquitetura que<br />
            reflete você
          </h1>
          <p className="text-xl mb-10 max-w-xl mx-auto font-century fade-in opacity-90">
            Transformando espaços com sensibilidade, criatividade e personalidade única para cada cliente
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in">
            <WhatsAppButton text="Quero transformar meu ambiente" className="bg-terracotta hover:bg-terracotta/90" />
            <Button 
              variant="outline" 
              className="rounded-full border-2 border-white text-white hover:bg-white/20 transition-all"
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
