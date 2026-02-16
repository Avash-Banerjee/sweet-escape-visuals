import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

import cake1 from "@/assets/cake-1.jpg";
import pastries1 from "@/assets/cozycorner.webp";
import coffee1 from "@/assets/cofee2.webp";
import desserts1 from "@/assets/nicedes.webp";
import cafeInterior1 from "@/assets/bag1.webp";
import beverages1 from "@/assets/bev3.webp";
import breakfast1 from "@/assets/nicebreak.webp";
import savory1 from "@/assets/savory-1.jpg";
import combo1 from "@/assets/savory2.webp";

const images = [
  { src: cake1, caption: "Triple chocolate heaven 🍫" },
  { src: pastries1, caption: "Festive Vibes ☀️" },
  { src: coffee1, caption: "The perfect pour ☕" },
  { src: desserts1, caption: "Dessert o'clock 🍰" },
  { src: cafeInterior1, caption: "Your cozy corner awaits 🛋️" },
  { src: beverages1, caption: "Slurp it  up 🍹" },
  { src: breakfast1, caption: "Breakfast done right 🍳" },
  { src: savory1, caption: "Gourmet bites 🥪" },
  { src: combo1, caption: "Aesthetic Pastas 🖤" },
];

const InstagramWall = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 bg-grain">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">@calcuttabakerycafe</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Follow Our Journey</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <InstaItem key={i} item={img} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/calcuttabakerycafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary text-primary-foreground font-sans text-sm tracking-wider uppercase hover:bg-cocoa-light transition-colors duration-300"
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const InstaItem = ({ item, index }: { item: typeof images[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative aspect-square overflow-hidden rounded-md cursor-pointer"
    >
      <img
        src={item.src}
        alt={item.caption}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-colors duration-500 flex items-center justify-center">
        <p className="text-warm-cream font-sans text-sm text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          {item.caption}
        </p>
      </div>
    </motion.div>
  );
};

export default InstagramWall;
