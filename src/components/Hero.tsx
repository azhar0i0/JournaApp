
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="home" className="pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              variants={itemVariants}
              className="text-primary font-semibold text-sm uppercase tracking-wide mb-4"
            >
              Your Trusted Financial Partner
            </motion.p>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Expert Accounting Solutions 
              <motion.span 
                className="text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              > Tailored</motion.span> to Your Needs
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We provide comprehensive accounting services to help your business thrive. 
              From bookkeeping to valuations, our expert team delivers precision and insight 
              for your financial success.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" onClick={scrollToContact}>
                  Get Started Today
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg" onClick={scrollToServices}>
                  Our Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              <motion.img
                src={heroImage}
                alt="Professional accounting services"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-primary/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
