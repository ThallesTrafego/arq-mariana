
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
          className="text-neutral-700 hover:text-neutral-900 transition-colors"
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
          <a href="/" className="text-2xl font-playfair font-medium">
            Sofia Martinez
          </a>

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
