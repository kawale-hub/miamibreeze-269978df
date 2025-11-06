import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const Schedule = () => {
  const games = [
    { date: "Jun 15, 2026", time: "7:00 PM", opponent: "vs Las Vegas Aces", venue: "Home Arena", status: "Upcoming" },
    { date: "Jun 18, 2026", time: "6:30 PM", opponent: "@ Seattle Storm", venue: "Climate Pledge Arena", status: "Upcoming" },
    { date: "Jun 22, 2026", time: "7:00 PM", opponent: "vs New York Liberty", venue: "Home Arena", status: "Upcoming" },
    { date: "Jun 25, 2026", time: "8:00 PM", opponent: "@ Chicago Sky", venue: "Wintrust Arena", status: "Upcoming" },
    { date: "Jun 29, 2026", time: "7:00 PM", opponent: "vs Dallas Wings", venue: "Home Arena", status: "Upcoming" },
    { date: "Jul 2, 2026", time: "7:30 PM", opponent: "vs Minnesota Lynx", venue: "Home Arena", status: "Upcoming" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Game <span className="text-gradient">Schedule</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Don't miss a single moment of the action
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {games.map((game, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{game.date} • {game.time}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{game.opponent}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{game.venue}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                      {game.status}
                    </span>
                    <Button className="bg-accent hover:bg-accent/90">
                      Get Tickets
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
