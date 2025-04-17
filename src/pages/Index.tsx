
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair leading-tight mb-6">
              Transformando espaços em experiências únicas
            </h1>
            <p className="text-neutral-600 text-lg mb-8">
              Projetos de interiores que refletem sua essência, com sofisticação e personalidade
            </p>
            <Button asChild className="rounded-full px-8">
              <a href="#contact">Agende uma Consulta</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Projetos Selecionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1486718448742-163732cd1544"
              title="Residência Moderna"
              description="Design contemporâneo com elementos naturais"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
              title="Espaço Comercial"
              description="Ambiente corporativo elegante e funcional"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1551038247-3d9af20df552"
              title="Apartamento Minimalista"
              description="Simplicidade e sofisticação em harmonia"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Sofia transformou completamente nossa casa. Cada detalhe foi pensado com muito cuidado e atenção."
              author="Maria Silva"
              role="Cliente Residencial"
            />
            <TestimonialCard
              quote="Profissionalismo excepcional. O resultado superou todas as nossas expectativas."
              author="João Santos"
              role="Cliente Comercial"
            />
            <TestimonialCard
              quote="A consultoria online foi prática e eficiente. As soluções apresentadas foram perfeitas."
              author="Ana Costa"
              role="Cliente Consultoria Online"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-8">Vamos criar algo extraordinário</h2>
            <div className="space-y-4 mb-8">
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                contato@sofiamartinez.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                (11) 99999-9999
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5" />
                São Paulo, SP
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-neutral-600 hover:text-neutral-900">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Sofia Martinez Arquitetura. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
