
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp, BarChart3 } from "lucide-react";
import bookkeepingImage from "@/assets/services-bookkeeping.jpg";
import valuationImage from "@/assets/services-valuation.jpg";
import pricingImage from "@/assets/services-pricing.jpg";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping and Accounting Advisory",
      description: "We provide expert guidance on financial regulations and practices to help your business thrive. Regular bookkeeping ensures that all your business finances are accurate and truly reflect its current state.",
      image: bookkeepingImage,
    },
    {
      icon: TrendingUp,
      title: "Company Valuations",
      description: "Our valuation services give you insights into your company's worth, aiding in informed decision-making. This formal assessment provides a defensible opinion of value for strategic transactions.",
      image: valuationImage,
    },
    {
      icon: BarChart3,
      title: "Costing and Pricing Analysis",
      description: "Detailed analysis of product and service costing to identify and allocate all costs. This foundational data enables thorough pricing analysis for establishing profitable pricing structures.",
      image: pricingImage,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Our Specialty Offerings
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our specialty solutions designed to enhance your financial success 
            and drive your business forward.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-primary/20 p-3 rounded-lg backdrop-blur-sm">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-3"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
