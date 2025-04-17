
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  phoneNumber?: string;
  className?: string;
}

export const WhatsAppButton = ({ text = "Fale Conosco", phoneNumber = "5511999999999", className }: WhatsAppButtonProps) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Button 
      onClick={handleClick} 
      className={`bg-terracotta hover:bg-terracotta/90 text-white rounded-full ${className}`}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      {text}
    </Button>
  );
};
