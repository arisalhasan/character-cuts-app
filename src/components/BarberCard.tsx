import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BarberCardProps {
  name: string;
  image: string;
  specialties: string[];
  bio: string;
  index: number;
}

const BarberCard = ({ name, image, specialties, bio, index }: BarberCardProps) => {
  const freshaUrl = "https://www.fresha.com/book-now/palmo-lyh47nvs/services?lid=2760647&eid=4872806&share=true&pId=2670558";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ 
        y: -8,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group bg-card border-border/40 hover:border-primary/30 hover:bg-card/80 backdrop-blur-sm">
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${name} - Barber at Palmo`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-display font-bold mb-2">{name}</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {specialties.map((specialty, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{bio}</p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => window.open(freshaUrl, "_blank", "noopener")}
          >
            Book with {name.split(" ")[0]}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BarberCard;
