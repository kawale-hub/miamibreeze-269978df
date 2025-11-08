import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Hero Content */}
          <div className="lg:col-span-2">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent/20 text-white rounded-full text-sm font-bold font-body mb-6 backdrop-blur-sm border border-accent/30">
                2025 SEASON HIGHLIGHTS
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Historic Season <br />
                <span className="text-gradient">Continues to Shine</span>
              </h1>
              
              <p className="text-lg font-body text-white/90 mb-8 leading-relaxed max-w-2xl">
                Experience the electrifying energy of professional women's basketball. Join us as we celebrate another incredible season filled with remarkable performances and unforgettable moments.
              </p>
              
              <Link to="/news">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold font-body px-8 py-6 text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Sidebar Quick Links */}
          <div className="space-y-4">
            <div className="bg-card/10 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-card/20 transition-all duration-300">
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Join the Community
              </h3>
              <p className="text-white/80 font-body mb-4 text-sm">
                Stay connected with exclusive content and behind-the-scenes access
              </p>
              <Link to="/community">
                <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 font-body">
                  Sign Up Today
                </Button>
              </Link>
            </div>
            
            <div className="bg-card/10 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-card/20 transition-all duration-300">
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                2026 Season Tickets
              </h3>
              <p className="text-white/80 font-body mb-4 text-sm">
                Secure your seats for next season's action
              </p>
              <Link to="/tickets">
                <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 font-body">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
