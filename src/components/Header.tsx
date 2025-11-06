import { Menu, ShoppingBag, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    "Tickets",
    "Team",
    "Schedule",
    "News",
    "Community",
    "Shop"
  ];

  return (
    <header className="bg-primary border-b border-primary/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">W</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">Phoenix</h1>
              <p className="text-xs text-primary-foreground/80">WNBA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-semibold transition-colors duration-200 hover:text-accent"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Ticket className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
