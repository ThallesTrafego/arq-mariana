
import { TestimonialCard } from "@/components/TestimonialCard";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TestimonialsSection = () => {
  return (
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
  );
};
