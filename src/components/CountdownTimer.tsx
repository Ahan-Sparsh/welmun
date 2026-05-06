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
    { val: time.d, label: "Days" },
    { val: time.h, label: "Hours" },
    { val: time.m, label: "Minutes" },
    { val: time.s, label: "Seconds" },
  ];

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-2 md:gap-4">
      {boxes.map((b) => (
        <div
          key={b.label}
          className="flex flex-col items-center justify-center min-w-[64px] md:min-w-[96px] px-3 md:px-5 py-3 md:py-4 rounded-xl border border-primary/20 bg-secondary/30 backdrop-blur-sm"
        >
          <span className="text-primary text-3xl md:text-5xl font-display leading-none tabular-nums">
            {pad(b.val)}
          </span>
          <span className="text-[9px] md:text-[11px] tracking-[3px] uppercase text-light-gold mt-2">
            {b.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
