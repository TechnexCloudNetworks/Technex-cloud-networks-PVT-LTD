import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Outer ring (border cursor) */}
      <div
        className="fixed  left-0 w-10 h-10 border border-gray-200 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${pos.x - 1.5}px, ${pos.y - 1.5}px)`,
        }}
      />
    </>
  );
}