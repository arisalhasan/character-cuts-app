import barbershopBg from "@/assets/barbershop-bg.jpg";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${barbershopBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"
      />
    </div>
  );
};

export default AnimatedBackground;
