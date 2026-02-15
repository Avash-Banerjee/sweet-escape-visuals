import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import cake1 from "@/assets/cake-1.jpg";
import pastries1 from "@/assets/pastries-1.jpg";
import coffee1 from "@/assets/coffee-1.jpg";
import desserts1 from "@/assets/desserts-1.jpg";
import cafeInterior1 from "@/assets/cafe-interior-1.jpg";
import beverages1 from "@/assets/beverages-1.jpg";

const items = [
  { src: cake1, alt: "Rich chocolate layer cake", caption: "Signature Cakes", span: "row-span-2" },
  { src: pastries1, alt: "Assorted croissants and pastries", caption: "Fresh Pastries", span: "" },
  { src: coffee1, alt: "Latte art in ceramic cup", caption: "Specialty Coffee", span: "" },
  { src: cafeInterior1, alt: "Cozy café corner with brick walls", caption: "Our Space", span: "" },
  { src: desserts1, alt: "Elegant dessert platter", caption: "Sweet Indulgences", span: "" },
  { src: beverages1, alt: "Fresh smoothie bowls", caption: "Refreshments", span: "col-span-2 md:col-span-1" },
];

const GridItem = ({ item, index }: { item: typeof items[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.span}`}
    >
      <div className="relative w-full h-full min-h-[250px] md:min-h-[300px]">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <p className="font-serif text-lg text-warm-cream">{item.caption}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SignatureGrid = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="gallery" className="py-24 px-6 bg-grain">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Visual Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Our Signature Collection</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {items.map((item, i) => (
            <GridItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureGrid;
