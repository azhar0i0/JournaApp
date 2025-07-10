
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Users, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "Over 15 years of experience in providing comprehensive accounting solutions to businesses of all sizes."
    },
    {
      icon: Shield,
      title: "Trusted & Reliable",
      description: "Built on trust and reliability, we ensure your financial data is secure and your compliance requirements are met."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "We understand that every business is unique. Our tailored approach ensures solutions that fit your specific needs."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We respect your time and deadlines. Our efficient processes ensure timely delivery of all services."
    }
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

  return (
    <section className="py-20 lg:py-32 bg-accent/30">
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
            Why Choose Journa?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We combine expertise, technology, and personalized service to deliver 
            exceptional accounting solutions that drive your business success.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <reason.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-3"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    {reason.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
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

export default WhyChooseUs;
