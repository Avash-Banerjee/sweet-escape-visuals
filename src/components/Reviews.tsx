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

  // Duplicate the reviews array to create a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-12 md:py-24 px-4 bg-warm-beige bg-grain overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-accent font-sans text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">What People Say</h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex overflow-hidden py-4">
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: [0, -1035], // Adjust this number based on card width + gap
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Higher = slower movement
                ease: "linear",
              },
            }}
            // Pause on hover for readability
            whileHover={{ animationPlayState: "paused" }}
          >
            {duplicatedReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <div className="bg-card rounded-lg p-5 md:p-8 shadow-md flex flex-col items-center text-center w-[280px] md:w-[320px] shrink-0">
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center mb-3">
        <span className="font-serif text-sm md:text-lg text-primary-foreground">{review.initials}</span>
      </div>

      <div className="flex gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? "fill-accent text-accent" : "text-muted"}
          />
        ))}
      </div>

      <p className="font-sans text-xs md:text-sm leading-relaxed text-muted-foreground mb-3 italic">
        "{review.text}"
      </p>

      <p className="font-serif text-sm md:text-base text-foreground font-medium mt-auto">
        {review.name}
      </p>
    </div>
  );
};

export default Reviews;
