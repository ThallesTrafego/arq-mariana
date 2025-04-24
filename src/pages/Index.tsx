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
  Award,
  Heart
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-century">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/lovable-uploads/297c688e-2350-409e-855b-b717e7b8ed66.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-5xl md:text-6xl font-adam leading-tight mb-6 fade-in">
              Arquitetura que<br />
              reflete você
            </h1>
            <p className="text-xl mb-10 max-w-xl mx-auto font-century fade-in opacity-90">
              Transformando espaços com sensibilidade, criatividade e personalidade única para cada cliente
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in">
              <WhatsAppButton text="Quero transformar meu ambiente" className="bg-terracotta hover:bg-terracotta/90" />
              <Button 
                variant="outline" 
                className="rounded-full border-2 border-white text-white hover:bg-white/20 transition-all"
                onClick={scrollToProjects}
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-terracotta">Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-adam mb-4">Projetos Selecionados</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Conheça alguns dos nossos trabalhos recentes e deixe-se inspirar para o seu próximo projeto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              images={[
                "/lovable-uploads/68b68c7c-c579-45f2-bd69-3d26d9800adb.png",
                "/lovable-uploads/221b2a36-6bbf-426f-b233-2b0af29eeb28.png",
                "/lovable-uploads/fad82554-dcb9-4272-bf20-93f2e7b525b6.png"
              ]}
              title="Área Gourmet Contemporânea"
              category="Residencial"
            />
            
            <ProjectCard
              images={[
                "/lovable-uploads/5f744a1a-f10e-45c7-96e9-7d36fac30e1a.png",
                "/lovable-uploads/3282f8ba-8cf7-4d46-a879-8bc974064e41.png",
                "/lovable-uploads/a7a38df8-53db-4923-a97b-9df694bb868e.png",
                "/lovable-uploads/43e764ba-8ef3-4ba9-b4e5-e8eb980f62d5.png",
                "/lovable-uploads/9c80b04d-8e6e-43f8-a175-b7c8b2b99348.png",
                "/lovable-uploads/bfa60787-db42-4b6b-93ce-d47f126e2d8a.png",
                "/lovable-uploads/809420dd-da50-4a4a-9289-bfd26b2dd4c6.png",
                "/lovable-uploads/c075df1c-aaa9-463d-a898-7287f8c25315.png",
                "/lovable-uploads/9a83e810-b601-4069-a437-56873d09ccc6.png"
              ]}
              title="Projeto de Interiores Residencial"
              category="Residencial"
            />

            <ProjectCard
              images={[
                "/lovable-uploads/9d635749-fa93-414a-b4b5-6e7408b3305f.png",
                "/lovable-uploads/11e0f03a-0b77-45bc-a9af-2e9a78565ffa.png",
                "/lovable-uploads/09a7d156-bfdd-4ec5-a78c-524a5ff657c9.png",
                "/lovable-uploads/717a0912-84d5-4217-bd95-7bea5304f875.png"
              ]}
              title="Free Shop New York"
              category="Comercial"
            />
            <ProjectCard
              images={[
                "/lovable-uploads/c38d876b-ce96-4d10-bbae-c77c961a40cd.png",
                "/lovable-uploads/16658772-15a1-4852-b7fa-c6309d242b58.png",
                "/lovable-uploads/e6511fde-4c7b-4ab8-b6f6-5b052a5b352a.png",
                "/lovable-uploads/fd11c6c0-702b-4d52-a572-0ff688a28f71.png",
                "/lovable-uploads/56163cfd-9168-4a08-afb3-662171b5575e.png"
              ]}
              title="Quadra de Beach Tênis"
              category="Comercial"
            />
            <ProjectCard
              images={[
                "/lovable-uploads/c9afff85-62f7-44d7-a636-cd92252a1fc5.png",
                "/lovable-uploads/8f9914f5-174d-48c4-ae3c-01f07b80b305.png",
                "/lovable-uploads/a1af207e-bc1f-4a9e-83a9-1c88a4c90c74.png",
                "/lovable-uploads/304620a2-5d2a-489a-a3f9-31a87ca92dde.png",
                "/lovable-uploads/8c1810bd-ece9-440d-93d9-9844bf6d880a.png",
                "/lovable-uploads/0fdeeb0c-3dd0-4cee-9f89-f0e261def8a7.png",
                "/lovable-uploads/462cb360-88dd-486c-a80b-f3427b41b964.png",
                "/lovable-uploads/6d298445-e0a3-4328-a8d6-f17ef1e09138.png",
                "/lovable-uploads/ef9b55c8-bba9-4cc3-8f95-6f834aa51d3d.png"
              ]}
              title="Projeto Residencial"
              category="Residencial"
            />
            <ProjectCard
              images={[
                "/lovable-uploads/562e2cf8-f522-4af5-bad9-96b3399d2fc4.png",
                "/lovable-uploads/e2b7258d-ef01-4282-b565-d519f304fea4.png",
                "/lovable-uploads/d310c12d-9b73-45d6-a51c-3e92aa9a5b23.png",
                "/lovable-uploads/fa4386ce-7e4b-4f49-805e-9084b4b8d06a.png"
              ]}
              title="Loja Aloma Zen"
              category="Comercial"
            />
            <ProjectCard
              images={[
                "/lovable-uploads/3d8e6849-1fbd-4fd9-a397-1a9dfe89f2a1.png",
                "/lovable-uploads/d321b2b0-b6ff-4006-ac8f-24e66a9f482a.png",
                "/lovable-uploads/f8c05891-dcec-41ac-9190-268bff31c38f.png",
                "/lovable-uploads/a1274ee9-6fdd-42ec-abab-c930cad73e6b.png",
                "/lovable-uploads/13585f8a-e3e6-4cfb-bc43-1181ca8f02d1.png"
              ]}
              title="Loja Teka"
              category="Comercial"
            />
            <ProjectCard
              images={[
                "/lovable-uploads/22a2a92d-fd77-471a-b369-360c974f7061.png",
                "/lovable-uploads/a57b74ee-2a4f-47a9-b7a3-879950bafcce.png",
                "/lovable-uploads/66a46e2d-1b9e-41ac-8624-8230a32873bf.png",
                "/lovable-uploads/545127d6-c2d8-4cb5-9e36-241f314ef06a.png"
              ]}
              title="Consultório Odontológico"
              category="Comercial"
            />
        <ProjectCard
          images={[
            "/lovable-uploads/271340b3-5a2b-4b54-b41e-51ab3acc0ab4.png",
            "/lovable-uploads/fde1d27b-0f60-41d6-9297-420c658ebc79.png",
            "/lovable-uploads/3389a78c-7e93-4003-8043-d4f2c968250f.png",
            "/lovable-uploads/0926f35e-9fcc-4621-8bd2-10c4f0da5288.png",
            "/lovable-uploads/ba5a3661-573d-488b-8c41-17480cd5d2fc.png",
            "/lovable-uploads/a5320c51-3ef8-4356-8878-00b0da068d32.png",
            "/lovable-uploads/b8a4623e-1e9c-47b9-bb78-f48a3f3a1d8f.png"
          ]}
          title="Apartamento RA"
          category="Residencial"
        />
      </div>
    </div>
  </section>

      <section className="py-12 px-4 bg-terracotta/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-adam mb-6">Pronto para transformar seu ambiente?</h2>
          <p className="text-neutral-600 mb-8">
            Entre em contato agora e vamos criar juntos o projeto dos seus sonhos.
          </p>
          <WhatsAppButton text="Fale com nossa equipe" className="text-lg px-8 py-4 bg-terracotta hover:bg-terracotta/90" />
        </div>
      </section>

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

      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider text-terracotta">Depoimentos</span>
            <h2 className="text-3xl md:text-4xl font-adam mb-4">O que dizem nossos clientes</h2>
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

      <section id="cta" className="py-20 px-4 bg-sage/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-adam mb-6">Pronto para transformar seu espaço?</h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
            Entre em contato agora mesmo e vamos iniciar uma conversa sobre como podemos 
            transformar seu espaço com criatividade, funcionalidade e identidade.
          </p>
          <WhatsAppButton text="Solicite um Orçamento" className="text-lg px-8 py-6" />
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-wider text-terracotta">Contato</span>
            <h2 className="text-3xl md:text-4xl font-adam mb-8">Vamos criar algo extraordinário</h2>
            <div className="flex flex-col space-y-6 mb-8">
              <div className="flex flex-col items-center space-y-6">
                <a 
                  href="mailto:arqmarianamello@gmail.com"
                  className="flex items-center justify-center gap-2 hover:text-terracotta transition-colors"
                >
                  <Mail className="h-5 w-5 text-terracotta" />
                  arqmarianamello@gmail.com
                </a>
                <a 
                  href="tel:+55991148008"
                  className="flex items-center justify-center gap-2 hover:text-terracotta transition-colors"
                >
                  <Phone className="h-5 w-5 text-terracotta" />
                  (55) 99114-8008
                </a>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="h-5 w-5 text-terracotta" />
                  Uruguaiana, RS
                </p>
                <div className="flex items-center justify-center gap-6 pt-4">
                  <a
                    href="https://www.instagram.com/arquitetamarianamello/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-terracotta transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-neutral-600 hover:text-terracotta transition-colors">Política de Privacidade</a>
              <Separator orientation="vertical" className="h-4" />
              <a href="#" className="text-neutral-600 hover:text-terracotta transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Mariana Mello Arquitetura. Todos os direitos reservados.
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
