
import { ServiceCard } from "@/components/ServiceCard";
import { Building2, Home, MonitorSmartphone, Paintbrush } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-terracotta">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-adam mb-4">O que oferecemos</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Soluções completas para transformar qualquer espaço em um ambiente funcional, 
            confortável e esteticamente harmonioso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Projetos Residenciais" 
            description="Transformações completas ou parciais para casas e apartamentos, criando ambientes que refletem seu estilo de vida."
            icon={<Home className="h-8 w-8" />}
          />
          <ServiceCard 
            title="Espaços Comerciais" 
            description="Projetos estratégicos para lojas, escritórios e estabelecimentos que potencializam sua marca e experiência do cliente."
            icon={<Building2 className="h-8 w-8" />}
          />
          <ServiceCard 
            title="Reformas" 
            description="Revitalizações que transformam estruturas existentes em espaços modernos e funcionais sem grandes intervenções."
            icon={<Paintbrush className="h-8 w-8" />}
          />
          <ServiceCard 
            title="Consultoria Online" 
            description="Orientação profissional à distância, com soluções práticas para quem deseja renovar ambientes sem um projeto completo."
            icon={<MonitorSmartphone className="h-8 w-8" />}
          />
        </div>
      </div>
    </section>
  );
};
