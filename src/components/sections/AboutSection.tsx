
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
              Sou arquiteta e artista por natureza, apaixonada por criar espaços que fazem sentido para quem vive neles. À frente da MM Arquitetura, um escritório online com atendimento humanizado e olhar autoral, desenvolvo projetos residenciais e comerciais que aliam estética, funcionalidade e emoção.
            </p>
            <p className="text-neutral-600 mb-4">
              Acredito que arquitetura vai muito além de paredes e medidas — ela carrega histórias, traduz sonhos e transforma a forma como nos sentimos e vivemos o cotidiano. Por isso, meu processo é pautado pela escuta ativa, pelo cuidado em cada detalhe e pelo compromisso em entregar soluções criativas, viáveis e únicas para cada cliente.
            </p>
            <p className="text-neutral-600 mb-6">
              Cada projeto nasce da essência de quem o habita. É assim que coloco em prática meu propósito: arquitetura que reflete você. Uma arquitetura feita com empatia, sensibilidade e responsabilidade, que respeita seus desejos, seu estilo de vida e o momento que você está vivendo. Porque mais do que um espaço bonito, o que realmente importa é criar um lugar que te acolha, que te represente — e que seja, verdadeiramente, seu.
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
