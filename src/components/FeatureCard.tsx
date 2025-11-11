import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link?: string;
}

const FeatureCard = ({ title, description, image, buttonText, link }: FeatureCardProps) => {
  const cardContent = (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 card-gradient opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
        <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-3 transform transition-transform duration-300 group-hover:translate-y-[-4px] leading-tight text-left">
          {title}
        </h3>
        <p className="text-primary-foreground/90 mb-6 text-sm font-body leading-relaxed text-left">
          {description}
        </p>
        <Button 
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full group/btn font-body"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );

  return link ? (
    <Link to={link} className="block">
      {cardContent}
    </Link>
  ) : cardContent;
};

export default FeatureCard;
