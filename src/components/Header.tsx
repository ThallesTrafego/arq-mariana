
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

export const Header = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header only at the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <header 
      className={`fixed w-full bg-white/80 backdrop-blur-sm z-50 transition-all duration-300 ${
        isVisible ? "top-0 opacity-100" : "-top-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="block w-48">
              <img 
                src="/lovable-uploads/11586276-04f3-4c9c-826a-83edf3c6a686.png"
                alt="Mariana Mello Arquitetura e Interiores"
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
