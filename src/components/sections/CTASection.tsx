
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const CTASection = () => {
  return (
    <section className="py-12 px-4 bg-terracotta/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-adam mb-6">Pronto para transformar seu ambiente?</h2>
        <p className="text-neutral-600 mb-8">
          Entre em contato agora e vamos criar juntos o projeto dos seus sonhos.
        </p>
        <WhatsAppButton 
          text="Fale com nossa equipe" 
          phoneNumber="5555991148008"
          className="text-lg px-8 py-4 bg-terracotta hover:bg-terracotta/90" 
        />
      </div>
    </section>
  );
};
