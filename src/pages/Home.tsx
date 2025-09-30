import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, Sparkles, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";

const Home = () => {
  const freshaUrl = "https://www.fresha.com/book-now/palmo-lyh47nvs/services?lid=2760647&eid=4872806&share=true&pId=2670558";
  
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const services = [
    {
      icon: Scissors,
      title: "Precision Cut",
      description: "Classic and modern cuts tailored to your style",
      price: "From $45",
    },
    {
      icon: Sparkles,
      title: "Skin Fade",
      description: "Smooth, gradual fades with razor-sharp lines",
      price: "From $50",
    },
    {
      icon: Award,
      title: "Beard Trim & Shape-Up",
      description: "Sharp lines and sculpted definition",
      price: "From $30",
    },
  ];

  const reviews = [
    {
      name: "Marcus T.",
      rating: 5,
      review: "Best fade I've ever had. Clean, precise, and the atmosphere is top-notch.",
    },
    {
      name: "James L.",
      rating: 5,
      review: "Consistent quality every single time. Worth every penny.",
    },
    {
      name: "David R.",
      rating: 5,
      review: "The barbers here really take their time and care about the details.",
    },
    {
      name: "Chris M.",
      rating: 5,
      review: "Professional service, great vibe. This is my go-to spot now.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 py-32 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-6"
            >
              <motion.span 
                className="inline-block text-primary font-display text-xl md:text-2xl mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(var(--primary) / 0.3)",
                    "0 0 40px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--primary) / 0.3)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✂️ Palmo Barbershop
              </motion.span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-block"
              >
                Cuts with
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="inline-block text-primary"
              >
                character.
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Precision fades, classic shape-ups, and the kind of finish you notice every day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-10 py-6 h-auto relative overflow-hidden group"
                onClick={() => window.open(freshaUrl, "_blank", "noopener")}
              >
                <span className="relative z-10">Book on Fresha</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert craftsmanship in every cut, fade, and trim
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Why Choose Palmo</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: Scissors,
                title: "Craft",
                description: "Trained professionals with years of experience delivering precision cuts",
              },
              {
                icon: Award,
                title: "Consistency",
                description: "The same high-quality service, every single visit",
              },
              {
                icon: Users,
                title: "Community",
                description: "More than a barbershop—a place where you belong",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {reviews.map((review, index) => (
              <ReviewCard key={review.name} {...review} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a
              href={freshaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-brass-dark transition-colors inline-flex items-center gap-2 group"
            >
              Read more reviews on Fresha
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready for your next cut?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Book your appointment today and experience the Palmo difference
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-background text-foreground hover:bg-background/90"
              onClick={() => window.open(freshaUrl, "_blank", "noopener")}
            >
              Book on Fresha
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
