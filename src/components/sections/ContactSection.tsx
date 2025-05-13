
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
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
                  className="flex items-center gap-2 text-neutral-600 hover:text-terracotta transition-colors"
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage 
                      src="/lovable-uploads/cc64aed2-c9d3-4554-af64-74700170853f.png" 
                      alt="Arquiteta Mariana Mello" 
                    />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <span>@arquitetamarianamello</span>
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
  );
};
