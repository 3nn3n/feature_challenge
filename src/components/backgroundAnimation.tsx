
"use client";

export default function BackgroundAnimation() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#020617] flex items-center justify-center">

      {/* PARTICLES */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-emerald-300 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>
    </section>
  );
}
