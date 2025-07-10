
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Shield, CheckCircle, Lightbulb, HandHeart, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality accounting services with precision and expertise.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships with our clients as trusted financial partners.",
    },
    {
      icon: Target,
      title: "Results",
      description: "Focused on helping your business achieve its financial goals and maximize success.",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Maintaining the highest standards of confidentiality and professional integrity.",
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Proven Methodology",
      description: "Our systematic approach ensures accuracy and compliance while delivering actionable insights for your business growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We leverage the latest technology and best practices to streamline your financial processes and reduce complexity.",
    },
    {
      icon: HandHeart,
      title: "Personalized Service",
      description: "Every client receives tailored attention with solutions designed specifically for their unique business needs and goals.",
    },
    {
      icon: Zap,
      title: "Proactive Support",
      description: "We don't just react to problems – we anticipate challenges and provide strategic guidance to keep you ahead.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen pt-16">
      <Header />
      
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-20 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants}>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              >
                About <span className="text-primary">Journa</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-6 leading-relaxed"
              >
                With a commitment to excellence, we have built our reputation as a leading 
                accounting firm dedicated to providing exceptional financial services. Our 
                experienced team combines deep industry knowledge with personalized attention 
                to deliver solutions that drive real business results.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                We understand that every business is unique, which is why we take the time 
                to understand your specific needs and challenges. Our comprehensive approach 
                ensures that you receive tailored solutions that align with your business 
                objectives and support your long-term success.
              </motion.p>
            </motion.div>

            {/* Values Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-500 hover:border-primary/20 group">
                    <CardContent className="p-6">
                      <motion.div 
                        className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.8 }
                        }}
                      >
                        <value.icon className="h-8 w-8 text-accent-foreground group-hover:text-primary transition-colors duration-500" />
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {value.title}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20 bg-accent/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Journa</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what sets us apart and makes us the ideal partner for your financial success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group"
              >
                <Card className="hover:shadow-2xl transition-all duration-500 h-full border-l-4 border-l-primary/20 hover:border-l-primary group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-transparent">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-all duration-500 group-hover:shadow-lg"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.15,
                          transition: { duration: 0.8 }
                        }}
                      >
                        <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {item.title}
                        </motion.h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;
