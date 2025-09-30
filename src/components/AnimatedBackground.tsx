import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const element = canvasRef.current;
    if (!element) return;

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (element) {
        const time = Date.now() * 0.0001;
        const x = 50 + Math.sin(time) * 10;
        const y = 50 + Math.cos(time * 0.7) * 10;
        element.style.backgroundPosition = `${x}% ${y}%`;
      }
    };

    animate();

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            linear-gradient(
              135deg,
              hsl(var(--hero-gradient-start)) 0%,
              hsl(var(--hero-gradient-end)) 50%,
              hsl(220, 22%, 14%) 100%
            )
          `,
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute inset-0 bg-noise opacity-20"
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(227, 186, 80, 0.02) 40px,
              rgba(227, 186, 80, 0.02) 80px
            )
          `,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
