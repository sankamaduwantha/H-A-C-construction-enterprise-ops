"use client";

import { useRef } from "react";

function SpotlightCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900 p-6 justify-center transition duration-300 hover:border-[#C9A24B]/50 hover:bg-zinc-800/50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        // style={{
        //   background:
        //     "radial-gradient(150px circle at var(--x, 50%) var(--y, 50%), #e4b652, transparent 60%)",
        // }}
      />
      <div className="relative z-10">{children}</div>
      
    </div>
  );
}

export default SpotlightCard;