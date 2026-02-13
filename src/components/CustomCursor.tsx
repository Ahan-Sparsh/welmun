import { useEffect, useRef } from "react";

interface CustomCursorProps {
  isIntroVisible: boolean;
}

const CustomCursor = ({ isIntroVisible }: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      const target = e.target as HTMLElement;
      const clickable = target.closest("a, .card-hover, button, .swipe-btn");

      if (isIntroVisible) {
        cursor.style.borderColor = "hsl(15, 30%, 12%)";
        cursor.style.transform = clickable
          ? "translate(-50%,-50%) scale(0.6)"
          : "translate(-50%,-50%) scale(1)";
      } else {
        cursor.style.borderColor = "hsl(42, 45%, 56%)";
        cursor.style.transform = clickable
          ? "translate(-50%,-50%) scale(0.6)"
          : "translate(-50%,-50%) scale(1)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isIntroVisible]);

  return (
    <div
      ref={cursorRef}
      className="fixed w-[18px] h-[18px] border-2 rounded-full pointer-events-none z-[9999]"
      style={{
        borderColor: isIntroVisible ? "hsl(15, 30%, 12%)" : "hsl(42, 45%, 56%)",
        backgroundColor: "transparent",
        transform: "translate(-50%,-50%)",
        transition: "0.05s ease, transform 0.1s ease, border-color 0.2s ease",
      }}
    />
  );
};

export default CustomCursor;
