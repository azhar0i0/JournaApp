
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setIsSubmitting(false);
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
    hidden: { opacity: 0, y: 30 },
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
        className="py-20 lg:py-32 gradient-subtle"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Get in Touch for Expert <span className="text-primary">Guidance</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              If you have questions or need assistance, please reach out to us. 
              We are here to provide you with professional accounting and financial 
              services tailored to your needs.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", info: "info@journa.ca" },
                    { icon: Phone, title: "Phone", info: "Call for consultation" },
                    { icon: MapPin, title: "Location", info: "Serving clients across Canada" },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-lg"
                        whileHover={{ rotate: 5 }}
                      >
                        <contact.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground">{contact.title}</h3>
                        <p className="text-muted-foreground">{contact.info}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      variants={containerVariants}
                    >
                      <motion.div variants={itemVariants}>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your accounting needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            Sending...
                          </motion.span>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <motion.p 
                      variants={itemVariants}
                      className="text-sm text-muted-foreground text-center"
                    >
                      By clicking Send Message, you agree to our Terms and Conditions.
                    </motion.p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contact;
