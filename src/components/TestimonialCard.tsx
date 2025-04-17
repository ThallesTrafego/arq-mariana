
import { Card } from "./ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export const TestimonialCard = ({ quote, author, role, image }: TestimonialCardProps) => {
  return (
    <Card className="p-8 hover-scale border border-sage/30 bg-white">
      <div className="mb-6 text-terracotta">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 13H5V10L7 8V5H10V11ZM19 11L17 13H14V10L16 8V5H19V11Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <blockquote className="text-neutral-600 mb-6 italic">{quote}</blockquote>
      <footer className="flex items-center mt-4">
        {image && (
          <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <cite className="not-italic">
          <p className="font-medium text-neutral-900">{author}</p>
          <p className="text-sm text-neutral-500">{role}</p>
        </cite>
      </footer>
    </Card>
  );
};
