
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="process-step">
      <div className="process-step-number">{number}</div>
      <h3 className="font-playfair text-lg mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};
