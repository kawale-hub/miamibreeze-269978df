import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamPlayingImage from "@/assets/team-playing-kaseya.png";

const News = () => {
  const articles = [
    {
      title: "Historic Season Continues with Record-Breaking Performance",
      excerpt: "The team delivered another spectacular performance, setting new franchise records and thrilling fans with an unforgettable display of basketball excellence.",
      date: "November 5, 2025",
      category: "Game Recap"
    },
    {
      title: "Community Outreach Program Reaches Milestone",
      excerpt: "Our basketball academy celebrates reaching 1,000 young athletes through community programs, making a lasting impact on youth development.",
      date: "November 3, 2025",
      category: "Community"
    },
    {
      title: "Star Player Named Player of the Week",
      excerpt: "Exceptional performance on the court earns recognition from the league, highlighting the incredible talent on our roster.",
      date: "November 1, 2025",
      category: "Player News"
    },
    {
      title: "Season Ticket Memberships for 2026 Now Available",
      excerpt: "Don't miss your chance to secure the best seats for next season. Early bird pricing available for a limited time.",
      date: "October 28, 2025",
      category: "Announcements"
    },
    {
      title: "Behind the Scenes: Training Camp Day 1",
      excerpt: "Get an exclusive look at what goes into preparing for an elite professional basketball season.",
      date: "October 25, 2025",
      category: "Behind the Scenes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0">
          <img 
            src={teamPlayingImage} 
            alt="Miami Breeze basketball action"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Latest <span className="text-gradient">News</span>
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Stay updated with the latest team news and stories
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="group">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
