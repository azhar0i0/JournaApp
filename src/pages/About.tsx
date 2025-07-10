
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Shield, TrendingUp, Clock, CheckCircle, Globe } from "lucide-react";

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

  const achievements = [
    {
      icon: TrendingUp,
      number: "500+",
      title: "Clients Served",
      description: "Successfully managed finances for over 500 businesses across various industries.",
    },
    {
      icon: Clock,
      number: "15+",
      title: "Years Experience",
      description: "Over a decade and a half of expertise in professional accounting services.",
    },
    {
      icon: CheckCircle,
      number: "98%",
      title: "Client Satisfaction",
      description: "Consistently high client satisfaction rate through personalized service.",
    },
    {
      icon: Globe,
      number: "24/7",
      title: "Support Available",
      description: "Round-the-clock support to address your financial needs whenever they arise.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Senior Partner & CPA",
      description: "15+ years in corporate accounting with expertise in tax optimization and financial strategy.",
    },
    {
      name: "Michael Chen",
      role: "Financial Analyst",
      description: "Specializes in business valuations and market analysis with an MBA in Finance.",
    },
    {
      name: "Emily Rodriguez",
      role: "Tax Specialist",
      description: "Expert in tax compliance and planning for both individuals and businesses.",
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.div 
                        className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="h-8 w-8 text-accent-foreground" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
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

      {/* Achievements Section */}
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
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <motion.div 
                      className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <achievement.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
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
