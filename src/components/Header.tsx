
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();

  const menuItems = [
    { name: "Projetos", href: "#projects" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  const MenuItems = () => (
    <>
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-neutral-700 hover:text-terracotta transition-colors font-century"
        >
          {item.name}
        </a>
      ))}
    </>
  );

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="block w-32">
              <img 
                src="/lovable-uploads/eac2bf34-a694-4856-8ab5-2b71afac2228.png"
                alt="Mariana Mello Arquitetura e Decoração"
                className="w-full"
              />
            </a>
          </div>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <MenuItems />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center space-x-8">
              <MenuItems />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
