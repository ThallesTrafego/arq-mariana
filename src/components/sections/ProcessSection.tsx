
import { ProcessStep } from "@/components/ProcessStep";

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-terracotta">Metodologia</span>
          <h2 className="text-3xl md:text-4xl font-adam mb-4">Como trabalhamos</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Um processo transparente e colaborativo para criar espaços que você vai amar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep 
            number={1}
            title="Briefing Inicial"
            description="Entendemos suas necessidades, preferências e o que deseja transmitir com o espaço."
          />
          <ProcessStep 
            number={2}
            title="Projeto Conceitual"
            description="Desenvolvemos ideias iniciais e apresentamos conceitos visuais para aprovação."
          />
          <ProcessStep 
            number={3}
            title="Detalhamento"
            description="Elaboramos especificações técnicas e selecionamos materiais e mobiliário."
          />
          <ProcessStep 
            number={4}
            title="Execução"
            description="Acompanhamos a implementação para garantir que tudo saia conforme planejado."
          />
        </div>
      </div>
    </section>
  );
};
