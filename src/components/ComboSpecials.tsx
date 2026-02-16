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
    // Reduced py-24 to py-12 and px-6 to px-4 for mobile
    <section className="py-12 md:py-24 px-4 md:px-6 bg-warm-cream bg-grain">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          // Reduced margin-bottom from 16 to 8
          className="text-center mb-8 md:mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-2">Specials</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">Combos & Collections</h2>
        </motion.div>

        {/* Keeping it as grid-cols-1 for stacking, but reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={item.image}
          alt={item.title}
          // SQUASHED HEIGHT: h-[180px] on mobile is much shorter/landscape
          className="w-full h-[180px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />

        {/* Compact Price tag */}
        <div className="absolute top-2 right-2 glass rounded px-2 py-1">
          <span className="font-serif text-xs text-foreground font-semibold">{item.price}</span>
        </div>

        {/* Tighter padding for content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-serif text-xl text-warm-cream">{item.title}</h3>
          <p className="text-warm-cream/80 text-xs">{item.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ComboSpecials;
