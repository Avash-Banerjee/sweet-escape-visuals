import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import combo1 from "@/assets/combo-1.jpg";
import seasonal1 from "@/assets/seasonal-1.jpg";
import celebration1 from "@/assets/celebration-1.jpg";

const specials = [
  { image: combo1, title: "Celebration Boxes", subtitle: "Curated assortments for every occasion", price: "From ₹999" },
  { image: seasonal1, title: "Seasonal Specials", subtitle: "Limited edition festive flavors", price: "From ₹599" },
  { image: celebration1, title: "Party Packages", subtitle: "Birthday setups with cake & décor", price: "From ₹2,499" },
];

const ComboSpecials = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 bg-warm-cream bg-grain">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Specials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Combos & Collections</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((item, i) => (
            <SpecialCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecialCard = ({ item, index }: { item: typeof specials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />

        {/* Price tag */}
        <motion.div
          initial={{ rotate: -3 }}
          whileHover={{ rotate: 0, scale: 1.05 }}
          className="absolute top-4 right-4 glass rounded-lg px-4 py-2"
        >
          <span className="font-serif text-sm text-foreground font-semibold">{item.price}</span>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-serif text-2xl text-warm-cream mb-1">{item.title}</h3>
          <p className="text-warm-cream/70 text-sm">{item.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ComboSpecials;
