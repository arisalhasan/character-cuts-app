import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, price, index }: ServiceCardProps) => {
  const freshaUrl = "https://www.fresha.com/book-now/palmo-lyh47nvs/services?lid=2760647&eid=4872806&share=true&pId=2670558";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 bg-card border-border/40">
        <CardContent className="p-6">
          <div className="mb-4 text-primary">
            <Icon className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-brass-dark transition-colors relative group"
            >
              See times on Fresha
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
