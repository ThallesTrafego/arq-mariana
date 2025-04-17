
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Home,
  Building2,
  Paintbrush,
  MonitorSmartphone,
  Star,
  Sparkles,
  Clock,
  Users,
  Award
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486718448742-163732cd1544')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-5xl md:text-6xl font-playfair leading-tight mb-6 text-terracotta">
              Transformando espaços em experiências memoráveis
            </h1>
            <p className="text-neutral-600 text-lg mb-10 max-w-xl mx-auto">
              Projetos de interiores que não apenas transformam ambientes, mas elevam a qualidade de vida das pessoas que os habitam
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton text="Agende uma Consulta" />
              <Button variant="outline" className="rounded-full border-terracotta text-terracotta hover:bg-terracotta/10">
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551516594-56cb78394645" 
                alt="Sofia Martinez" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <span className="text-sm uppercase tracking-wider text-terracotta">Conheça</span>
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">Sofia Martinez</h2>
              <p className="text-neutral-600 mb-4">
                Com mais de 10 anos de experiência transformando espaços em ambientes únicos, 
                Sofia Martinez combina conhecimentos técnicos e sensibilidade estética para 
                criar projetos que refletem a personalidade de cada cliente.
              </p>
              <p className="text-neutral-600 mb-6">
                Formada em Arquitetura com especialização em Design de Interiores,
                Sofia acredita que cada ambiente influencia diretamente nosso bem-estar e 
                produtividade, aplicando princípios da psicologia do espaço em todos os seus projetos.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center">
                  <Star className="text-terracotta mr-2 h-5 w-5" />
                  <span>Formação Internacional</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-terracotta mr-2 h-5 w-5" />
                  <span>Premiações no setor</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-terracotta mr-2 h-5 w-5" />
                  <span>+200 projetos realizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-terracotta">Serviços</span>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">O que oferecemos</h2>
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

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-terracotta">Metodologia</span>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Como trabalhamos</h2>
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-terracotta">Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Projetos Selecionados</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Conheça alguns dos nossos trabalhos recentes e deixe-se inspirar para o seu próximo projeto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1486718448742-163732cd1544"
              title="Residência Serenidade"
              description="Design contemporâneo com elementos naturais"
              category="Residencial"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
              title="Escritório Moderno"
              description="Ambiente corporativo elegante e funcional"
              category="Comercial"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1551038247-3d9af20df552"
              title="Apartamento Minimalista"
              description="Simplicidade e sofisticação em harmonia"
              category="Residencial"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8"
              title="Café Boutique"
              description="Espaço acolhedor com personalidade única"
              category="Comercial"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1617098900591-3f90928e8c54"
              title="Casa de Campo"
              description="Integração com a natureza e conforto"
              category="Residencial"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
              title="Loft Industrial"
              description="Estilo urbano com toques de sofisticação"
              category="Residencial"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="rounded-full border-terracotta text-terracotta hover:bg-terracotta/10">
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 px-4 bg-terracotta text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-white/80">Diferenciais</span>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Por que nos escolher</h2>
            <p className="text-white/90 max-w-xl mx-auto">
              Valores que orientam nosso trabalho e nos destacam no mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white/10 rounded-full p-4 inline-flex mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair mb-2">Personalização Única</h3>
              <p className="text-white/80">
                Cada projeto é único, como a personalidade de cada cliente.
                Trabalhamos para criar espaços que refletem quem você é.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white/10 rounded-full p-4 inline-flex mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair mb-2">Compromisso com Prazos</h3>
              <p className="text-white/80">
                Entendemos o valor do seu tempo e trabalhamos para garantir
                que cada etapa seja concluída no prazo estabelecido.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white/10 rounded-full p-4 inline-flex mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-playfair mb-2">Excelência em Detalhes</h3>
              <p className="text-white/80">
                São os pequenos detalhes que fazem grandes diferenças.
                Nossa atenção a cada elemento torna seu espaço especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-terracotta">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">O que dizem nossos clientes</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              A satisfação de quem confiou em nosso trabalho para transformar seus espaços.
            </p>
          </div>
          
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  quote="Sofia transformou completamente nossa casa. Cada detalhe foi pensado com muito cuidado e atenção, criando um ambiente que realmente reflete nossa personalidade."
                  author="Maria Silva"
                  role="Cliente Residencial"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  quote="O projeto do nosso escritório superou todas as expectativas. Além de esteticamente impecável, a funcionalidade de cada espaço foi pensada estrategicamente."
                  author="João Santos"
                  role="Cliente Comercial"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  quote="A consultoria online foi prática e eficiente. As soluções apresentadas transformaram meu apartamento com um orçamento acessível e sem grandes intervenções."
                  author="Ana Costa"
                  role="Cliente Consultoria Online"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <TestimonialCard
                  quote="Profissionalismo, criatividade e eficiência definem o trabalho da Sofia. Nossa casa agora é exatamente como sonhávamos, mas muito melhor do que conseguíamos imaginar."
                  author="Pedro Oliveira"
                  role="Cliente Residencial"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-4 bg-sage/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">Pronto para transformar seu espaço?</h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
            Entre em contato agora mesmo e vamos iniciar uma conversa sobre como podemos 
            transformar seu ambiente em um espaço que você vai amar.
          </p>
          <WhatsAppButton text="Solicite um Orçamento" className="text-lg px-8 py-6" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-wider text-terracotta">Contato</span>
            <h2 className="text-3xl md:text-4xl font-playfair mb-8">Vamos criar algo extraordinário</h2>
            <div className="space-y-6 mb-8">
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-terracotta" />
                contato@sofiamartinez.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-terracotta" />
                (11) 99999-9999
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-terracotta" />
                São Paulo, SP
              </p>
            </div>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-neutral-600 hover:text-terracotta transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-terracotta transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sofia Martinez Arquitetura. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-terracotta transition-colors">Política de Privacidade</a>
              <Separator orientation="vertical" className="h-4" />
              <a href="#" className="text-neutral-500 hover:text-terracotta transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
