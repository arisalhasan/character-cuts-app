import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FloatingScissors = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const scissors = containerRef.current.querySelectorAll(".floating-scissor");
      scissors.forEach((scissor, index) => {
        const speed = (index + 1) * 0.02;
        const x = (e.clientX * speed) / 10;
        const y = (e.clientY * speed) / 10;
        
        (scissor as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-scissor absolute opacity-[0.03]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.03, 0.03, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            delay: i * 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M30 90 L60 60 M90 30 L60 60"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="25" cy="95" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="95" cy="25" r="8" stroke="currentColor" strokeWidth="3" fill="none" />
            <path d="M60 60 L60 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingScissors;
