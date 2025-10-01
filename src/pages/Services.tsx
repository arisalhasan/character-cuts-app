import { motion } from "framer-motion";
import { Scissors, Sparkles, Award, Wind, Baby, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const freshaUrl = "https://www.fresha.com/book-now/palmo-lyh47nvs/services?lid=2760647&eid=4872806&share=true&pId=2670558";

  const services = [
    {
      icon: Scissors,
      title: "Precision Cut",
      description: "Classic and contemporary cuts tailored to your face shape and personal style. Includes consultation and finish styling.",
      price: "From $45",
    },
    {
      icon: Sparkles,
      title: "Skin Fade",
      description: "Smooth, gradual fades with razor-sharp lines. Our signature service combining precision and artistry.",
      price: "From $50",
    },
    {
      icon: Award,
      title: "Beard Trim & Shape-Up",
      description: "Professional beard sculpting with sharp lines, clean edges, and natural definition.",
      price: "From $30",
    },
    {
      icon: Wind,
      title: "Hot Towel Treatment",
      description: "Relaxing hot towel experience with premium oils. The perfect finishing touch to any service.",
      price: "From $15",
    },
    {
      icon: Baby,
      title: "Kids Cut",
      description: "Patient, professional cuts for children 12 and under in a welcoming environment.",
      price: "From $35",
    },
    {
      icon: Heart,
      title: "Full Service Package",
      description: "Complete grooming experience: cut, fade, beard trim, and hot towel. The ultimate in barbershop luxury.",
      price: "From $95",
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "All bookings are made through our Fresha page. Simply click any 'Book on Fresha' button on our site, select your preferred service, barber, and time slot.",
    },
    {
      question: "What's your cancellation policy?",
      answer: "We require 24 hours notice for cancellations. You can manage your booking directly through Fresha. Please refer to our Fresha booking page for full details.",
    },
    {
      question: "What if I'm running late?",
      answer: "Please call us as soon as possible. We'll do our best to accommodate you, but appointments may need to be rescheduled if you're more than 10 minutes late.",
    },
    {
      question: "How should I prepare for my appointment?",
      answer: "Come with clean, dry hair if possible. If you have reference photos or a specific style in mind, bring them along or be ready to discuss them with your barber.",
    },
    {
      question: "Do you offer consultations?",
      answer: "Absolutely! Every service begins with a brief consultation to ensure we understand exactly what you're looking for.",
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium grooming services crafted with precision and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl font-display font-bold mb-4">Ready to book?</h3>
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
  );
};

export default Services;
