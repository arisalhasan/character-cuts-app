import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const freshaUrl = "https://www.fresha.com/book-now/palmo-lyh47nvs/services?lid=2760647&eid=4872806&share=true&pId=2670558";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Main Street", "Downtown, City 12345"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567"],
      action: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@palmo.barber"],
      action: "mailto:hello@palmo.barber",
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: ["@palmo.barbershop"],
      action: "https://instagram.com/palmo.barbershop",
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to book? We're here to help.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg border border-border/40 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold mb-2">{info.title}</h3>
                    {info.action ? (
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        {info.details.map((detail, i) => (
                          <div key={i}>{detail}</div>
                        ))}
                      </a>
                    ) : (
                      info.details.map((detail, i) => (
                        <div key={i} className="text-foreground/80">
                          {detail}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hours Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-lg border border-border/40 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold">Opening Hours</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Monday - Friday</span>
                  <span className="font-semibold text-primary">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Saturday</span>
                  <span className="font-semibold text-primary">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Sunday</span>
                  <span className="font-semibold text-primary">10:00 AM - 4:00 PM</span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <div className="text-center md:text-right">
                  <p className="text-sm text-muted-foreground mb-3">
                    Walk-ins welcome, but we recommend booking ahead
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.open(freshaUrl, "_blank", "noopener")}
                  >
                    Book on Fresha
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-primary/5 p-12 rounded-lg border border-primary/20"
          >
            <h3 className="text-2xl font-display font-bold mb-4">Ready to book your appointment?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              All bookings are made through Fresha. Choose your service, barber, and time in just a
              few clicks.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open(freshaUrl, "_blank", "noopener")}
            >
              Book on Fresha
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
