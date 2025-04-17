
import { Card } from "./ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="service-card hover:border-terracotta/50 hover:bg-white">
      <div className="text-terracotta mb-4">{icon}</div>
      <h3 className="text-xl font-playfair mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </Card>
  );
};
