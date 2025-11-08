import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import scheduleHeaderImage from "@/assets/schedule-header.png";

const Schedule = () => {
  const games = [
    { date: "Dec 3, 2025", opponent: "Las Vegas Aces", time: "7:00 PM", location: "Home", result: "-" },
    { date: "Dec 6, 2025", opponent: "Phoenix Mercury", time: "7:30 PM", location: "Away", result: "-" },
    { date: "Dec 10, 2025", opponent: "Seattle Storm", time: "8:00 PM", location: "Home", result: "-" },
    { date: "Dec 13, 2025", opponent: "Minnesota Lynx", time: "6:00 PM", location: "Away", result: "-" },
    { date: "Dec 17, 2025", opponent: "Chicago Sky", time: "7:00 PM", location: "Home", result: "-" },
    { date: "Dec 20, 2025", opponent: "New York Liberty", time: "7:30 PM", location: "Away", result: "-" },
    { date: "Dec 23, 2025", opponent: "Los Angeles Sparks", time: "8:00 PM", location: "Home", result: "-" },
    { date: "Dec 27, 2025", opponent: "Connecticut Sun", time: "7:00 PM", location: "Home", result: "-" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${scheduleHeaderImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-secondary/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-heading font-bold text-white mb-4">
            Game Schedule
          </h1>
          <p className="text-xl font-body text-white/90 max-w-2xl mx-auto">
            Don't miss a single game this season
          </p>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12 text-secondary">
              Upcoming <span className="text-gradient">Games</span>
            </h2>

            <div className="space-y-4">
              {games.map((game, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold font-body text-accent px-3 py-1 bg-accent/10 rounded-full">
                          {game.location}
                        </span>
                        <span className="text-sm font-body text-muted-foreground">{game.date}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-secondary mb-1">
                        vs {game.opponent}
                      </h3>
                      <p className="text-muted-foreground font-body">{game.time}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {game.result !== "-" && (
                        <span className="text-lg font-bold font-body text-primary">
                          {game.result}
                        </span>
                      )}
                      <Link to="/tickets">
                        <Button className="bg-accent hover:bg-accent/90 font-body font-semibold">
                          Buy Tickets
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
