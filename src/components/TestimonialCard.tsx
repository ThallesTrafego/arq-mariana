
import { Card } from "./ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="p-6 hover-scale">
      <blockquote className="text-neutral-600 mb-4">{quote}</blockquote>
      <footer>
        <cite className="not-italic">
          <p className="font-medium text-neutral-900">{author}</p>
          <p className="text-sm text-neutral-500">{role}</p>
        </cite>
      </footer>
    </Card>
  );
};
