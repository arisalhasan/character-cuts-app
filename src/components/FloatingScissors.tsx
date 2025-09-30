import { motion } from "framer-motion";

const FloatingScissors = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.04]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ 
            opacity: [0, 0.04, 0.04, 0],
            y: ["0vh", "110vh"],
          }}
          transition={{
            duration: 25 + i * 5,
            delay: i * 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${20 + i * 30}%`,
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M30 90 L60 60 M90 30 L60 60"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="25" cy="95" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="95" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M60 60 L60 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingScissors;
