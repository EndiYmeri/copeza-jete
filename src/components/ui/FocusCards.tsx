"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../utils/helpers";

const HandDrawnArrow = ({className}: {className?: string}) => {
  return <svg width="183" height="98" className={cn("w-[40px] h-min", className)} viewBox="0 0 183 98" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M172.751 40.569C172.16 44.9895 167.736 47.9945 163.413 47.3099C163.765 47.34 164.11 47.3701 164.455 47.4C164.782 47.3858 165.115 47.3709 165.442 47.3489C115.25 54.2013 64.892 58.474 14.2129 58.7096C9.5503 59.6246 3.68846 58.9713 1.39456 54.2168C-1.43138 49.2172 2.02199 42.6269 7.77188 42.1553C13.5745 42.8033 19.343 42.3594 25.2556 42.1716C45.2199 41.5204 65.1915 41.5282 85.1188 40.1273C104.965 38.614 124.643 35.5169 144.446 33.6069C153.684 33.8084 173.015 25.1343 172.751 40.569Z" fill="white" />
    <path d="M182.384 45.084C176.91 62.0477 159.807 73.0817 146.239 83.6272C138.628 88.3206 131.863 96.2117 122.686 97.3843C115.57 97.3748 111.675 88.1848 116.939 83.2958C134.624 73.1818 152.673 60.901 165.215 44.3355C150.835 34.6713 135.397 26.5099 122.228 15.0572C114.085 8.39555 124.008 -4.06913 132.331 2.43549C137.197 6.31322 142.175 10.0345 147.172 13.7431C158.136 23.4457 181.789 28.1808 182.384 45.084Z" fill="white" />
  </svg>

}


export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[500px] w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <a href={`/sete/${card.category}`} className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 group gap-3">
          {card.title}
        
          <AnimatePresence>
            {hovered === index && (
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -5, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.6
                }}
                className="ml-[10px]  inline-flex"
              >
                <HandDrawnArrow/>
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  category: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto px-5 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
