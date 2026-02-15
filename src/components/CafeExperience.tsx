import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import cafeInterior1 from "@/assets/cafe-interior-1.jpg";
import cafeInterior2 from "@/assets/cafe-interior-2.jpg";
import cafeDecor1 from "@/assets/cafe-decor-1.jpg";

const blocks = [
  {
    image: cafeInterior1,
    alt: "Cozy brick-walled seating area",
    title: "Warmth in Every Corner",
    text: "Sink into plush velvet seats surrounded by exposed brick and warm pendant lights. Every corner is designed to make you linger a little longer.",
    reverse: false,
  },
  {
    image: cafeInterior2,
    alt: "Café with fairy lights and customers",
    title: "The Social Brew",
    text: "Where conversations flow as freely as the coffee. A space that brings people together over shared tables, shared stories, and shared plates.",
    reverse: true,
  },
  {
    image: cafeDecor1,
    alt: "Vintage wall décor and photographs",
    title: "A Gallery of Moments",
    text: "Our walls tell stories — of the city, of art, of the many moments shared over cups of chai and slices of cake.",
    reverse: false,
  },
];

const ExperienceBlock = ({ block, index }: { block: typeof blocks[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${block.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16`}
    >
      <motion.div
        initial={{ opacity: 0, x: block.reverse ? 60 : -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2"
      >
        <div className="overflow-hidden rounded-lg">
          <img
            src={block.image}
            alt={block.alt}
            className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <div className="w-12 h-[1px] bg-accent" />
        <h3 className="font-serif text-3xl md:text-4xl text-foreground">{block.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-lg">{block.text}</p>
      </motion.div>
    </div>
  );
};

const CafeExperience = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 bg-warm-cream bg-grain">
      <div className="container mx-auto space-y-24">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">The Space</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Experience the Café</h2>
        </motion.div>

        {blocks.map((block, i) => (
          <ExperienceBlock key={i} block={block} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CafeExperience;
