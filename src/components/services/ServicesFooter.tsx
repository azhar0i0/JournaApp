
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-secondary text-secondary-foreground py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <motion.h3 
              className="text-2xl font-bold text-primary mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Journa
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-secondary-foreground/80 mb-4 leading-relaxed"
            >
              Your trusted financial partner providing expert accounting solutions 
              tailored to your business needs. We're committed to helping you achieve 
              financial success through precision and expertise.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", to: "/" },
                { name: "Services", to: "/services" },
                { name: "About", to: "/about" },
                { name: "Contact", to: "/contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={link.to}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Bookkeeping", "Company Valuations", "Pricing Analysis", "Financial Advisory"].map((service, index) => (
                <motion.li 
                  key={service}
                  className="text-secondary-foreground/80"
                  whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center"
        >
          <p className="text-secondary-foreground/60">
            © {currentYear} Journa. All rights reserved. Professional accounting services across Canada.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default ServicesFooter;
