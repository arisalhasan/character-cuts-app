import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  index: number;
}

const ReviewCard = ({ name, rating, review, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card border-border/40 hover:border-primary/20 transition-colors duration-300">
        <CardContent className="p-6">
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <p className="text-foreground/90 mb-4 text-sm leading-relaxed">&ldquo;{review}&rdquo;</p>
          <p className="text-sm font-semibold text-muted-foreground">— {name}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ReviewCard;
