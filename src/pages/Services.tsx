import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesFooter from "@/components/services/ServicesFooter";

const Services = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.href = "/#contact";
    }, 100);
  };

  return (
    <div className="min-h-screen pt-16">
      <Header />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA onContactUs={scrollToContact} />
      <ServicesFooter />
    </div>
  );
};

export default Services;