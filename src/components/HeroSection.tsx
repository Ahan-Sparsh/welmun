import CountdownTimer from "./CountdownTimer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const ref = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-[5%] md:px-[8%] lg:px-[10%] py-24 overflow-hidden"
    >
      <div ref={ref} className="relative z-[2] flex flex-col items-center reveal-section">
        <h1 className="font-display text-5xl md:text-7xl text-center text-primary">
          Welham Model United Nations
        </h1>
        <div className="gold-divider" />
        <p className="mt-5 text-light-gold text-xl">28 – 30 July 2026</p>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default HeroSection;
