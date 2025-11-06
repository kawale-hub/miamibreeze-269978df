import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const Team = () => {
  const players = [
    { number: "12", name: "Sarah Johnson", position: "Guard", height: "5'9\"" },
    { number: "23", name: "Maya Williams", position: "Forward", height: "6'2\"" },
    { number: "7", name: "Jessica Chen", position: "Center", height: "6'4\"" },
    { number: "15", name: "Amanda Rodriguez", position: "Guard", height: "5'8\"" },
    { number: "31", name: "Taylor Brown", position: "Forward", height: "6'1\"" },
    { number: "5", name: "Nicole Davis", position: "Guard", height: "5'10\"" }
  ];

  const coaches = [
    { name: "Coach Jennifer Martinez", role: "Head Coach" },
    { name: "Coach Michael Thompson", role: "Assistant Coach" },
    { name: "Coach Lisa Anderson", role: "Assistant Coach" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Meet The <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Get to know our incredible roster of talented athletes
          </p>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Roster</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl font-bold text-accent-foreground">
                    {player.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{player.name}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{player.position}</p>
                    <p className="text-sm">{player.height}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Coaching Staff</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((coach, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                <p className="text-muted-foreground">{coach.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
