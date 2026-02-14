import { useEffect, useState } from "react";

const target = new Date("July 28, 2026 09:00:00").getTime();

const CountdownTimer = () => {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { val: time.d, label: "DAYS" },
    { val: time.h, label: "HOURS" },
    { val: time.m, label: "MINUTES" },
    { val: time.s, label: "SECONDS" },
  ];

  return (
    <div className="mt-10 px-10 py-6 bg-background/60 backdrop-blur-sm">
      <div className="flex gap-10 md:gap-16">
        {boxes.map((b, i) => (
          <div key={b.label} className="flex items-baseline gap-10 md:gap-16">
            <div className="text-center">
              <span className="text-primary text-4xl md:text-6xl font-display leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {b.val}
              </span>
              <p className="text-xs md:text-sm text-light-gold mt-2 tracking-[3px]">
                {b.label}
              </p>
            </div>
            {i < boxes.length - 1 && (
              <span className="text-primary/40 text-4xl md:text-6xl font-display select-none">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
