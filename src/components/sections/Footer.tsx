
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
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
  );
};
