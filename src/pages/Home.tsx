import { motion } from "framer-motion";
import { Scissors, Sparkles, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScissorsAnimation from "@/components/ScissorsAnimation";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";

const Home = () => {
  const freshaUrl = "https://www.fresha.com/book-now/palmo-lyh47nvs/services?lid=2760647&eid=4872806&share=true&pId=2670558";

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
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              Cuts with character.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Precision fades, classic shape-ups, and the kind of finish you notice every day.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-10 py-6 h-auto"
              onClick={() => window.open(freshaUrl, "_blank", "noopener")}
            >
              Book on Fresha
            </Button>
          </motion.div>
          <ScissorsAnimation />
        </div>
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
