
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovators Inc.",
      text: "Journa has been instrumental in helping us navigate complex financial regulations. Their expertise and attention to detail are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Green Solutions Ltd.",
      text: "The team at Journa provided exceptional valuation services for our merger. Professional, thorough, and reliable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Startup Ventures",
      text: "Their bookkeeping services have streamlined our financial processes. We can now focus on growing our business with confidence.",
      rating: 5
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
    <section className="py-20 lg:py-32">
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
            What Our Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Journa.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 10 }
              }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <motion.div 
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Quote className="h-8 w-8 text-primary/60" />
                  </motion.div>
                  
                  <div className="flex mb-4 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.p 
                    className="text-muted-foreground mb-6 text-center leading-relaxed"
                    whileHover={{ color: "hsl(var(--foreground))" }}
                  >
                    "{testimonial.text}"
                  </motion.p>
                  
                  <div className="text-center">
                    <motion.h4 
                      className="font-semibold text-foreground"
                      whileHover={{ color: "hsl(var(--primary))" }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
