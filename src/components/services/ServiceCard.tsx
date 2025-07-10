import { Service } from "@/types/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {service.fullDescription}
      </p>
    </div>
  );
};

export default ServiceCard;