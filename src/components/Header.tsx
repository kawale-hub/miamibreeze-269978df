import { Menu, ShoppingBag, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { name: "Tickets", path: "/tickets" },
    { name: "Team", path: "/team" },
    { name: "Schedule", path: "/schedule" },
    { name: "News", path: "/news" },
    { name: "Community", path: "/community" },
    { name: "Shop", path: "/shop" }
  ];

  return (
    <header className="bg-primary border-b border-primary/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">W</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground">Phoenix</h1>
              <p className="text-xs text-primary-foreground/80">WNBA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary-foreground/90 hover:text-primary-foreground text-sm font-semibold transition-colors duration-200 hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/tickets">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Ticket className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
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
