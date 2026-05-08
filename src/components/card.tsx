"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useCarts } from "../hooks/useCardAPI";
import { useEffect } from "react";


function AnimatedDiff({ min, max, delay = 0 }: { min: number; max: number; delay?: number }) {
  const diff = Math.max(0, max - min);
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    const controls = animate(count, diff, {
      duration: 5,
      delay,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [count, diff, delay]);
  return <motion.span>{rounded}</motion.span>;
}


export default function Card({ width, height }: { width?: number; height?: number } = {}) {
  const { data, loading, error } = useCarts();
  
  console.log(data);
  // Define different heights and names for each bar
  const barHeights = [
    { min: data?.carts[0].products[0].price ?? 10, max: data?.carts[0].products[0].total ?? 100, name: data?.carts[0].products[0].title ?? "CPU" },
    { min: data?.carts[5].products[2].price ?? 10, max: data?.carts[5].products[2].total ?? 100, name: data?.carts[5].products[2].title ?? "GPU" },
    { min: data?.carts[1].products[1].price ?? 10, max: data?.carts[1].products[1].total ?? 100, name: data?.carts[1].products[1].title ?? "RAM" },
    { min: data?.carts[0].products[3].price ?? 10, max: data?.carts[0].products[3].total ?? 100, name: data?.carts[0].products[3].title ?? "Disk" },
    { min: data?.carts[1].products[0].price ?? 10, max: data?.carts[1].products[0].total ?? 100, name: data?.carts[1].products[0].title ?? "Net" },
    { min: data?.carts[4].products[2].price ?? 10, max: data?.carts[4].products[2].total ?? 100, name: data?.carts[4].products[2].title ?? "Power" },
  ];

  return (
    <div style={{ width: width || "100vw", height: height || "100vh", backgroundColor: "#f0f0f0", borderRadius: 8, boxShadow: "0 2px 4px rgba(0,0,0,0.1)", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "12px", borderColor: "#2bfb33", borderWidth: 3, borderStyle: "solid", padding: "15px" }}>
      {barHeights.map((barConfig, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <motion.div
            style={{
              width: "100px",
              backgroundColor: "#2bfb33",
              borderRadius: "4px",
            }}
            animate={{ height: [barConfig.min, barConfig.max ] }}
            transition={{
              duration: 5,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
          <span className="text-xs text-gray-700 text-align-center">
            {barConfig.name} - <AnimatedDiff min={barConfig.min} max={barConfig.max} delay={i * 0.1} />
          </span>
        </div>
      ))}
    </div>
  );
}