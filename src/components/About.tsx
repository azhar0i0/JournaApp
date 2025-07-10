import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Shield } from "lucide-react";

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

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With a commitment to excellence, we have built our reputation as a leading 
              accounting firm dedicated to providing exceptional financial services. Our 
              experienced team combines deep industry knowledge with personalized attention 
              to deliver solutions that drive real business results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand that every business is unique, which is why we take the time 
              to understand your specific needs and challenges. Our comprehensive approach 
              ensures that you receive tailored solutions that align with your business 
              objectives and support your long-term success.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;