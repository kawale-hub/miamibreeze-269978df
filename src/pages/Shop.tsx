import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import jerseysRackImage from "@/assets/jerseys-rack.jpg";
import jerseyHomeImage from "@/assets/jersey-home.png";
import jerseyAwayImage from "@/assets/jersey-away.png";
import hispanicHeritageJerseyImage from "@/assets/hispanic-heritage-jersey.png";
import hoodieImage from "@/assets/hoodie.png";
import capImage from "@/assets/cap.png";
import shortsImage from "@/assets/shorts.png";
import backpackImage from "@/assets/backpack.png";
import classicTeeImage from "@/assets/classic-tee.png";

const Shop = () => {
  const categories = [
    { name: "Jerseys", items: "25 items" },
    { name: "Apparel", items: "40 items" },
    { name: "Accessories", items: "30 items" },
    { name: "Collectibles", items: "15 items" }
  ];

  const featuredProducts = [
    { name: "Home Jersey", price: "$85", category: "Jerseys", image: jerseyHomeImage },
    { name: "Away Jersey", price: "$85", category: "Jerseys", image: jerseyAwayImage },
    { name: "Hispanic Heritage Jersey", price: "$95", category: "Jerseys", image: hispanicHeritageJerseyImage },
    { name: "Team Hoodie", price: "$65", category: "Apparel", image: hoodieImage },
    { name: "Team Cap", price: "$30", category: "Accessories", image: capImage },
    { name: "Practice Shorts", price: "$45", category: "Apparel", image: shortsImage },
    { name: "Team Backpack", price: "$55", category: "Accessories", image: backpackImage },
    { name: "Classic Tee", price: "$35", category: "Apparel", image: classicTeeImage }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0">
          <img 
            src={jerseysRackImage} 
            alt="Miami Breeze merchandise"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Official <span className="text-gradient">Merchandise</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Show your team pride with official gear
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.items}</p>
              </button>
            ))}
          </div>

          {/* Featured Products */}
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-semibold">{product.category}</span>
                  <h3 className="text-xl font-bold mb-2 mt-1">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <Button className="bg-accent hover:bg-accent/90">
                      Add to Cart
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

export default Shop;
