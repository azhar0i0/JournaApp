import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServicesCTAProps {
  onContactUs: () => void;
}

const ServicesCTA = ({ onContactUs }: ServicesCTAProps) => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our dedicated team can support your financial goals with 
            tailored solutions designed for your business success.
          </p>
          <Button size="lg" onClick={onContactUs}>
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;