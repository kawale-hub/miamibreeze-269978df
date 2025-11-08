import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import teamHeaderImage from "@/assets/team-header.png";
import player1Image from "@/assets/player-1.jpg";
import player2Image from "@/assets/player-2.jpg";
import player3Image from "@/assets/player-3.jpg";
import player4Image from "@/assets/player-4.jpg";
import player5Image from "@/assets/player-5.jpg";
import player6Image from "@/assets/player-6.jpg";
import coach1Image from "@/assets/coach-1.jpg";
import coach2Image from "@/assets/coach-2.jpg";
import coach3Image from "@/assets/coach-3.jpg";

const Team = () => {
  const players = [
    { number: "12", name: "Sarah Johnson", position: "Guard", height: "5'9\"", image: player1Image },
    { number: "23", name: "Maya Williams", position: "Forward", height: "6'2\"", image: player2Image },
    { number: "7", name: "Jessica Chen", position: "Center", height: "6'4\"", image: player3Image },
    { number: "15", name: "Amanda Rodriguez", position: "Guard", height: "5'8\"", image: player4Image },
    { number: "31", name: "Taylor Brown", position: "Forward", height: "6'1\"", image: player5Image },
    { number: "5", name: "Nicole Davis", position: "Guard", height: "5'10\"", image: player6Image }
  ];

  const coaches = [
    { name: "Coach Jennifer Martinez", role: "Head Coach", image: coach1Image },
    { name: "Coach Michael Thompson", role: "Assistant Coach", image: coach2Image },
    { name: "Coach Lisa Anderson", role: "Assistant Coach", image: coach3Image }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0">
          <img 
            src={teamHeaderImage} 
            alt="Miami Breeze Team"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/40 to-secondary/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Meet The <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl font-body text-white/90">
            Get to know the incredible Miami Breeze roster of talented athletes
          </p>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-secondary">Roster</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border border-border">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 bg-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold font-heading text-accent-foreground">
                      {player.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold mb-1 text-secondary">{player.name}</h3>
                      <p className="text-muted-foreground font-body text-sm mb-1">{player.position}</p>
                      <p className="text-sm font-body text-foreground">{player.height}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-12 text-secondary">Coaching Staff</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((coach, index) => (
              <Card key={index} className="overflow-hidden text-center border border-border">
                <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-heading font-bold mb-2 text-secondary">{coach.name}</h3>
                  <p className="text-muted-foreground font-body">{coach.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
