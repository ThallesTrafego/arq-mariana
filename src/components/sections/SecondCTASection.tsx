
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const SecondCTASection = () => {
  return (
    <section id="cta" className="py-20 px-4 bg-sage/20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-adam mb-6">Pronto para transformar seu espaço?</h2>
        <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
          Entre em contato agora mesmo e vamos iniciar uma conversa sobre como podemos 
          transformar seu espaço com criatividade, funcionalidade e identidade.
        </p>
        <WhatsAppButton 
          text="Solicite um Orçamento" 
          phoneNumber="5555991148008"
          className="text-lg px-8 py-6" 
        />
      </div>
    </section>
  );
};
