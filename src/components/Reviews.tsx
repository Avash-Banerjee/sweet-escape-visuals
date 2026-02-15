import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ananya Roy",
    initials: "AR",
    rating: 5,
    text: "The warmest corner in the city. Their chocolate truffle cake is pure magic — every bite feels like a celebration. We keep coming back for the atmosphere as much as the food.",
  },
  {
    name: "Siddharth Mehta",
    initials: "SM",
    rating: 5,
    text: "Perfect spot for lazy Sunday mornings. The croissants are flaky, the coffee is strong, and the playlist is always on point. It genuinely feels like a second living room.",
  },
  {
    name: "Priya Dasgupta",
    initials: "PD",
    rating: 4,
    text: "Stumbled in for a quick chai and stayed for two hours. The savory platters are underrated — fresh, generous, and beautifully plated. A hidden gem in every sense.",
  },
];

const Reviews = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 bg-warm-beige bg-grain">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">What People Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-card rounded-lg p-8 shadow-md flex flex-col items-center text-center"
    >
      {/* Avatar */}
      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-5">
        <span className="font-serif text-lg text-primary-foreground">{review.initials}</span>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? "fill-accent text-accent" : "text-muted"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-6 italic">
        "{review.text}"
      </p>

      {/* Name */}
      <p className="font-serif text-base text-foreground font-medium">{review.name}</p>
    </motion.div>
  );
};

export default Reviews;
