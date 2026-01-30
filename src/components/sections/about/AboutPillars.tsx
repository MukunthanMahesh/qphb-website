'use client'

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, HandHelping, Leaf, ChevronLeft, ChevronRight } from "lucide-react";

const PILLARS = [
  {
    id: 1,
    title: "Health Literacy",
    icon: <BookOpen className="size-6 text-accent" />,
    description: "We empower communities by breaking down barriers to medical knowledge. Our workshops focus on preventative care and hygiene education, ensuring that health outcomes are driven by informed local leadership rather than outside intervention.",
  },
  {
    id: 2,
    title: "Clinical Sustainable Action",
    icon: <HandHelping className="size-6 text-accent" />,
    description: "Moving beyond temporary relief, we facilitate mobile clinics and community health worker (CHW) training. We bridge the gap between immediate medical needs and long-term access by strengthening local healthcare infrastructure and referral systems.",
  },
  {
    id: 3,
    title: "The Empowered Transition",
    icon: <Leaf className="size-6 text-accent" />,
    description: "Our ultimate goal is 'un-dependency.' We work toward the point where a community no longer requires our presence, achieved through economic development, clean water systems, and public health projects that are entirely community-owned.",
  }
];

export function AboutPillars() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextCard = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % PILLARS.length);
  }, []);

  const prevCard = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + PILLARS.length) % PILLARS.length);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextCard, 5000);
      return () => clearInterval(timer);
    }
  }, [nextCard, isHovered]);

  return (
    <section className="py-24 bg-white flex flex-col items-center">
      <h3 className="text-accent font-extrabold tracking-[0.2em] uppercase text-xs mb-16">
        Our Three Pillars
      </h3>

      <div className="relative w-full max-w-6xl flex items-center justify-center gap-4 px-4">
        
   
        <button onClick={prevCard} className="hidden md:block p-4 text-accent/40 hover:text-accent transition-colors">
          <ChevronLeft className="size-10" />
        </button>


        <div 
          className="relative w-full max-w-3xl h-[450px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0, rotateY: direction > 0 ? 45 : -45 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0, rotateY: direction > 0 ? -45 : 45 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              style={{ backfaceVisibility: "hidden" }}
       
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(230, 126, 34, 0.15)" }}
              className="absolute w-full h-full bg-background-secondary rounded-[2.5rem] border border-orange-100 shadow-xl p-10 flex flex-col md:flex-row items-center gap-10 cursor-pointer"
            >
  
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex-shrink-0 p-6 rounded-[1.5rem] bg-white shadow-md border border-orange-50"
              >
                {PILLARS[index].icon}
              </motion.div>

              <div className="flex flex-col text-left">
                <h4 className="text-3xl font-bold text-accent mb-4 tracking-tight">
                  {PILLARS[index].title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {PILLARS[index].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button onClick={nextCard} className="hidden md:block p-4 text-accent/40 hover:text-accent transition-colors">
          <ChevronRight className="size-10" />
        </button>
      </div>

 
      <div className="w-64 h-1 bg-accent/10 mt-16 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-accent"
          animate={{ width: `${((index + 1) / PILLARS.length) * 100}%` }}
        />
      </div>
    </section>
  );
}