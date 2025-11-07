import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award } from "lucide-react";
import playersWithKidsImage from "@/assets/players-with-kids.jpg";

const Community = () => {
  const programs = [
    {
      icon: Users,
      title: "Basketball Academy",
      description: "Year-round camps and clinics for athletes of all ages and skill levels. Professional coaching and skill development in a supportive environment."
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Making a positive impact through charitable initiatives, school visits, and partnerships with local organizations."
    },
    {
      icon: Award,
      title: "Youth Development",
      description: "Empowering the next generation through mentorship programs, scholarships, and educational opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0">
          <img 
            src={playersWithKidsImage} 
            alt="Miami Breeze players with youth"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-primary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Community <span className="text-gradient">Impact</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Building stronger communities through basketball
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-secondary rounded-xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in making a difference in our community. Whether you want to volunteer, participate in programs, or support our initiatives, there's a place for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Volunteer
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
