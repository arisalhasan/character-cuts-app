import { motion } from "framer-motion";
import { MapPin, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">About Palmo</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where tradition meets modern craft
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Palmo was founded on a simple belief: every man deserves a cut with character. We're
              not just about hair—we're about craftsmanship, community, and creating a space where
              you can relax, be yourself, and walk out looking your best.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Our team brings decades of combined experience, a passion for precision, and a
              commitment to consistency. Whether you're here for a quick shape-up or a full grooming
              experience, we take the time to get it right every time.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Walk in as a client. Leave as part of the family.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Award,
              title: "Excellence",
              description: "We never compromise on quality. Every cut is a reflection of our craft.",
            },
            {
              icon: Clock,
              title: "Respect",
              description: "Your time matters. We run on schedule and honor every appointment.",
            },
            {
              icon: MapPin,
              title: "Community",
              description: "More than a service—we're building lasting relationships, one cut at a time.",
            },
          ].map((value, index) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-lg bg-card border border-border/40 hover:border-primary/20 transition-colors"
            >
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Location Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-8 rounded-lg border border-border/40">
              <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location
              </h3>
              <p className="text-foreground/80 mb-2">123 Main Street</p>
              <p className="text-foreground/80 mb-4">Downtown, City 12345</p>
              <p className="text-sm text-muted-foreground">
                Street parking available. Wheelchair accessible entrance.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border/40">
              <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Hours
              </h3>
              <div className="space-y-2 text-foreground/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459253!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Palmo Barbershop Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
