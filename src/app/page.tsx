import Navbar from "@/components/navBar";
import { tokens } from "@/tokens/colors";

export default function Home() {
  return (
    <section className="relative h-[300vh] overflow-hidden bg-[#020617] flex items-center justify-center">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <Navbar />

    </section>
  );
}
