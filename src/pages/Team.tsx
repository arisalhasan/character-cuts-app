import { motion } from "framer-motion";
import BarberCard from "@/components/BarberCard";

const Team = () => {
  const barbers = [
    {
      name: "John",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      specialties: ["Fades", "Classic Cuts", "Beard Design"],
      bio: "With over 12 years of experience, John specializes in precision fades and modern styling. His attention to detail and personable approach have made him a client favorite.",
    },
    {
      name: "Mark",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop",
      specialties: ["Shape-Ups", "Skin Fades", "Hot Towel"],
      bio: "Mark brings a meticulous eye to every cut. Known for his razor-sharp lines and smooth fades, he takes pride in making every client look their absolute best.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Meet the Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skilled barbers dedicated to delivering exceptional service every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {barbers.map((barber, index) => (
            <BarberCard key={barber.name} {...barber} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
