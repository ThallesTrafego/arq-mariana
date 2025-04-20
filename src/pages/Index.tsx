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
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-century">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/lovable-uploads/57000fe7-b7b1-4087-8f5a-ff90ffc6d9d1.png")',
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
              <WhatsAppButton text="Agende uma Consulta" />
              <Button 
                variant="outline" 
                className="rounded-full border-white text-white hover:bg-white/10"
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551516594-56cb78394645" 
                alt="Mariana Mello" 
                className="rounded-lg shadow-xl"
              />
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
              description="Espaço aconchegante que integra churrasqueira, cozinha e área de estar, com acabamentos em madeira e concreto aparente."
              category="Residencial"
            />
            <ProjectCard
              images={[
                "/lovable-uploads/61433c20-4aaa-4215-b1d1-eee33f0aa034.png",
                "/lovable-uploads/6e92effa-dff1-47fd-a207-acee87753131.png",
                "/lovable-uploads/349dacf8-f89a-4687-9fe3-af3fb37d6efe.png",
                "/lovable-uploads/3ddaf93f-f75c-42d0-9837-ec5d9b99ea53.png",
                "/lovable-uploads/b4401e35-7320-453c-a634-91807f80a081.png",
                "/lovable-uploads/c145e0a4-b02d-42d7-9f14-134fc84d3bbc.png"
              ]}
              title="Projeto de Interiores Residencial"
              description="Projeto completo de interiores com closet, suíte e home office integrados, priorizando funcionalidade e elegância em tons neutros e acabamentos em madeira."
              category="Residencial"
            />
          </div>
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
          <h2 className="text-3xl md:text-4xl font-adam mb-6">Pronto para transformar seu espa��o?</h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
            Entre em contato agora mesmo e vamos iniciar uma conversa sobre como podemos 
            transformar seu ambiente em um espaço que você vai amar.
          </p>
          <WhatsAppButton text="Solicite um Orçamento" className="text-lg px-8 py-6" />
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-wider text-terracotta">Contato</span>
            <h2 className="text-3xl md:text-4xl font-adam mb-8">Vamos criar algo extraordinário</h2>
            <div className="space-y-6 mb-8">
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-terracotta" />
                contato@marianamello.com
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-terracotta" />
                (55) 99999-9999
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-terracotta" />
                Santa Maria, RS
              </p>
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
