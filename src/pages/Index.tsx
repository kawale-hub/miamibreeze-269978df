import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import kaseyaCenterImage from "@/assets/kaseya-center.jpg";
import groupJerseysImage from "@/assets/group-jerseys.jpg";
import academyImage from "@/assets/academy.jpg";
import jerseysRackImage from "@/assets/jerseys-rack.jpg";
import instaPageImage from "@/assets/insta-page.png";

const Index = () => {
  const features = [
    {
      title: "Season Tickets",
      description: "2026 Season Ticket Memberships On Sale Now",
      image: kaseyaCenterImage,
      buttonText: "Join the Family"
    },
    {
      title: "Group Experiences",
      description: "Enjoy Discounted Tickets for Your Squad, Book Your Outing Today",
      image: groupJerseysImage,
      buttonText: "Plan Your Visit"
    },
    {
      title: "Basketball Academy",
      description: "Year-Round Basketball Camps and Clinics for Athletes of All Ages",
      image: academyImage,
      buttonText: "Learn & Grow"
    },
    {
      title: "Shop Merch",
      description: "Show your team spirit with official gear and apparel",
      image: jerseysRackImage,
      buttonText: "Shop Now"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Features Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Follow Us <span className="text-gradient">@miamibreeze</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <img 
              src={instaPageImage} 
              alt="Miami Breeze Instagram Feed"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Stay In The Loop
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest Miami Breeze news, exclusive content, and special offers delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 border-t border-primary-foreground/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-primary-foreground mb-4">Team</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Roster</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Coaches</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Front Office</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-foreground mb-4">Tickets</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Season Tickets</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Single Game</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Group Sales</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-foreground mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Academy</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Outreach</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Foundation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-foreground mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Social Media</a></li>
                <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Miami Breeze WNBA. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
