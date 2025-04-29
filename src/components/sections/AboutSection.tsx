
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-adam mb-6 text-neutral-800">Sobre mim</h2>
            <div className="space-y-4 text-neutral-600">
              <p>Sou arquiteta e artista por natureza, apaixonada por criar espaços que fazem sentido para quem vive neles. À frente da MM Arquitetura, um escritório online com atendimento humanizado e olhar autoral, desenvolvo projetos residenciais e comerciais que aliam estética, funcionalidade e emoção.</p>
              
              <p>Acredito que arquitetura vai muito além de paredes e medidas — ela carrega histórias, traduz sonhos e transforma a forma como nos sentimos e vivemos o cotidiano. Por isso, meu processo é pautado pela escuta ativa, pelo cuidado em cada detalhe e pelo compromisso em entregar soluções criativas, viáveis e únicas para cada cliente.</p>
              
              <p>Cada projeto nasce da essência de quem o habita. É assim que coloco em prática meu propósito: arquitetura que reflete você. Uma arquitetura feita com empatia, sensibilidade e responsabilidade, que respeita seus desejos, seu estilo de vida e o momento que você está vivendo. Porque mais do que um espaço bonito, o que realmente importa é criar um lugar que te acolha, que te represente — e que seja, verdadeiramente, seu.</p>
            </div>
            
            <div className="mt-8">
              <WhatsAppButton text="Entre em contato" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/b21fb7e4-ba73-41a0-b473-ec489d320bc8.png" 
                alt="Mariana Mello" 
                className="w-full h-auto rounded-xl object-cover hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
