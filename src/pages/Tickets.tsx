import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import getYourTicketsImage from "@/assets/get-your-tickets.png";

const Tickets = () => {
  const ticketTypes = [
    {
      title: "Season Tickets",
      price: "$599",
      features: [
        "All 20 home games",
        "Priority seat selection",
        "Exclusive member events",
        "10% merchandise discount",
        "Ticket exchange flexibility"
      ]
    },
    {
      title: "Half Season",
      price: "$349",
      features: [
        "10 select home games",
        "Flexible game selection",
        "Member benefits",
        "5% merchandise discount"
      ]
    },
    {
      title: "Group Tickets",
      price: "From $25",
      features: [
        "Groups of 10+",
        "Discounted rates",
        "Suite options available",
        "Dedicated service rep"
      ]
    },
    {
      title: "Single Game",
      price: "From $35",
      features: [
        "Individual game tickets",
        "All seating sections",
        "Easy online purchase",
        "Mobile ticketing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0">
          <img 
            src={getYourTicketsImage} 
            alt="Miami Breeze arena atmosphere"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Get Your <span className="text-gradient">Tickets</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Experience the thrill of live Miami Breeze basketball. Choose the perfect ticket package for you.
            </p>
          </div>
        </div>
      </section>

      {/* Ticket Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ticketTypes.map((ticket, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">{ticket.title}</h3>
                <div className="text-4xl font-bold text-accent mb-6">{ticket.price}</div>
                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Purchase Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our ticket specialists are here to help you find the perfect seats
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
