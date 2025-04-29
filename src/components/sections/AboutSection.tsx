
import { Award, Star, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/c46e4288-35eb-4f1f-b9dd-6cc1944b13a0.png"
              alt="Mariana Mello - Arquiteta"
              className="rounded-lg shadow-xl w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-terracotta/10 rounded-lg"></div>
          </div>
          <div>
            <span className="text-sm uppercase tracking-wider text-terracotta">Conheça</span>
            <h2 className="text-3xl md:text-4xl font-adam mb-6">Mariana Mello</h2>
            <p className="text-neutral-600 mb-4">
              Formada pela Universidade Franciscana (UFN), Mariana Mello dedica sua carreira à 
              criação de ambientes que refletem a personalidade e estilo de vida de seus clientes.
            </p>
            <p className="text-neutral-600 mb-6">
              Com um olhar sensível e atento aos detalhes, ela transforma espaços em experiências 
              únicas, combinando funcionalidade, estética e o DNA de cada cliente em seus projetos.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <Star className="text-terracotta mr-2 h-5 w-5" />
                <span>Projetos Exclusivos</span>
              </div>
              <div className="flex items-center">
                <Award className="text-terracotta mr-2 h-5 w-5" />
                <span>Alta Personalização</span>
              </div>
              <div className="flex items-center">
                <Users className="text-terracotta mr-2 h-5 w-5" />
                <span>Atendimento Dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
