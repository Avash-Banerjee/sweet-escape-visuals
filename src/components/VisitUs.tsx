import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const VisitUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="visit" className="py-24 px-6 bg-grain">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Find Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Visit the Café</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px]"
          >
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.945419985956!2d88.40693527589632!3d22.581137932328135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b954c8f7d9%3A0x989c6a3449139014!2sCalcutta%20Bakery%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Calcutta Bakery & Café location"
/>
          </motion.div>

          {/* Info card - styled like a postcard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-warm-cream rounded-xl p-8 shadow-lg border border-border relative"
            style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, hsl(30 20% 85% / 0.5) 31px, hsl(30 20% 85% / 0.5) 32px)" }}
          >
            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-accent/30 rounded-sm flex items-center justify-center">
              <span className="font-serif text-xs text-accent/50">STAMP</span>
            </div>

            <h3 className="font-serif text-2xl text-foreground mb-8">You're Invited</h3>

            <div id="contact" className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-sans font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground text-sm">Ground floor, BD 97, Salt Lake Rd, BD Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-sans font-medium text-foreground">Opening Hours</p>
                  <p className="text-muted-foreground text-sm">Mon – Sun: 9:00 AM – 10:30 PM</p>

                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-sans font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground text-sm">096743 91609</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-sans font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">hello@calcuttabakery.cafe</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
