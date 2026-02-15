import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import breakfast1 from "@/assets/breakfast-1.jpg";
import desserts1 from "@/assets/desserts-1.jpg";
import beverages1 from "@/assets/beverages-1.jpg";
import savory1 from "@/assets/savory-1.jpg";

const categories = [
  { image: breakfast1, title: "Breakfast Spreads", description: "Start your day with golden toasts, eggs, and fresh juice" },
  { image: desserts1, title: "Dessert Platters", description: "Indulge in curated dessert experiences" },
  { image: beverages1, title: "Beverage Selections", description: "From craft lattes to fresh smoothie bowls" },
  { image: savory1, title: "Savory Bites", description: "Gourmet sandwiches, bruschettas, and more" },
];

const MenuShowcase = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="menu" className="py-24 bg-grain">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">What We Serve</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">The Menu</h2>
        </motion.div>
      </div>

      {/* Horizontal scroll slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="w-4 shrink-0 md:w-[calc((100vw-1400px)/2)]" />
        {categories.map((cat, i) => (
          <MenuCard key={i} item={cat} index={i} />
        ))}
        <div className="w-4 shrink-0 md:w-[calc((100vw-1400px)/2)]" />
      </div>
    </section>
  );
};

const MenuCard = ({ item, index }: { item: typeof categories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="snap-center shrink-0 w-[320px] md:w-[380px] group"
    >
      <div className="relative overflow-hidden rounded-xl glass shadow-lg">
        <div className="relative h-[280px] md:h-[340px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
        </div>
        <div className="p-6 relative">
          <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuShowcase;
