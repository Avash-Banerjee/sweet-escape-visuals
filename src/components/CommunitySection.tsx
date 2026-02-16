import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import celebration1 from "@/assets/celebration-1.jpg";
import cafeInterior2 from "@/assets/cafe-interior-2.jpg";
import cafeDecor1 from "@/assets/cafe-decor-1.jpg";
import combo1 from "@/assets/combo-1.jpg";

const moments = [
  { src: celebration1, caption: "Birthday celebrations", rotation: -3 },
  { src: cafeInterior2, caption: "Café evenings", rotation: 2 },
  { src: cafeDecor1, caption: "Art & ambiance", rotation: -2 },
  { src: combo1, caption: "Gift moments", rotation: 3 },
];

const CommunitySection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 bg-warm-cream bg-grain overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Memories</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Moments at the Café</h2>
        </motion.div>

        {/* Responsive Grid: 2 columns on mobile, auto-flow on larger screens */}
<div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4 md:gap-12">
  {moments.map((moment, i) => (
    <PolaroidCard key={i} moment={moment} index={i} />
  ))}
</div>
      </div>
    </section>
  );
};

const PolaroidCard = ({ moment, index }: { moment: typeof moments[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: moment.rotation }}
      animate={isInView ? { opacity: 1, y: 0, rotate: moment.rotation } : {}}
      whileHover={{ rotate: 0, scale: 1.05, y: -8 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-warm-cream shadow-xl rounded-sm p-3 pb-12 relative cursor-pointer"
      style={{ boxShadow: "0 8px 30px -8px rgba(60, 40, 20, 0.2)" }}
    >
      <img
        src={moment.src}
        alt={moment.caption}
        className="w-[200px] md:w-[240px] h-[200px] md:h-[240px] object-cover"
        loading="lazy"
      />
      <p className="absolute bottom-3 left-0 right-0 text-center font-serif text-sm text-muted-foreground italic">
        {moment.caption}
      </p>
    </motion.div>
  );
};

export default CommunitySection;
