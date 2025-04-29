
import { Heart, Sparkles, Star } from "lucide-react";

export const DifferentialsSection = () => {
  return (
    <section id="differentials" className="py-20 px-4 bg-terracotta text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-white/80">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-adam mb-4">Por que escolher a Mariana</h2>
          <p className="text-white/90 max-w-xl mx-auto">
            Compromisso com a excelência e dedicação em cada detalhe do seu projeto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-white/10 rounded-full p-4 inline-flex mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-adam mb-2">Sensibilidade</h3>
            <p className="text-white/80">
              Compreensão profunda das necessidades e desejos de cada cliente para criar espaços verdadeiramente especiais.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-white/10 rounded-full p-4 inline-flex mb-4">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-adam mb-2">Criatividade</h3>
            <p className="text-white/80">
              Soluções inovadoras e personalizadas que transformam desafios em oportunidades únicas de design.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-white/10 rounded-full p-4 inline-flex mb-4">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-adam mb-2">Comprometimento</h3>
            <p className="text-white/80">
              Dedicação total a cada projeto, garantindo que cada detalhe seja executado com excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
