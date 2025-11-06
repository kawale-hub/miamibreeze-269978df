import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/arena-background.png";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="WNBA game action"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Hero Content */}
          <div className="lg:col-span-2">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
                2025 SEASON HIGHLIGHTS
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                Historic Season <br />
                <span className="text-gradient">Continues to Shine</span>
              </h1>
              
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
                Experience the electrifying energy of professional women's basketball. Join us as we celebrate another incredible season filled with remarkable performances and unforgettable moments.
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Sidebar Quick Links */}
          <div className="space-y-4">
            <div className="bg-card/10 backdrop-blur-md border border-card-foreground/10 rounded-lg p-6 hover:bg-card/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                Join the Community
              </h3>
              <p className="text-primary-foreground/80 mb-4 text-sm">
                Stay connected with exclusive content and behind-the-scenes access
              </p>
              <Button variant="outline" className="w-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Sign Up Today
              </Button>
            </div>
            
            <div className="bg-card/10 backdrop-blur-md border border-card-foreground/10 rounded-lg p-6 hover:bg-card/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                2026 Season Tickets
              </h3>
              <p className="text-primary-foreground/80 mb-4 text-sm">
                Secure your seats for next season's action
              </p>
              <Button variant="outline" className="w-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
