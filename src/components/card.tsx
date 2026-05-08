"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useCarts } from "../hooks/useCardAPI";
import { useEffect } from "react";
import { tokens } from "@/tokens/colors";


function AnimatedDiff({ min, max, delay = 0, isActive = false }: { min: number; max: number; delay?: number; isActive?: boolean }) {
  const diff = Math.max(0, max - min);
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    if (!isActive) {
      count.set(0);
      return;
    }

    const controls = animate(count, diff, {
      duration: 5,
      delay,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [count, diff, delay, isActive]);
  return <motion.span>{rounded}</motion.span>;
}


export default function Card({ width, height, isActive = false }: { width?: number; height?: number; isActive?: boolean } = {}) {
  const { data, loading, error } = useCarts();

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
    <div style={{ width: width || "100%", minWidth: "720px", height: height || "40vh", background: tokens.colors.gradientPanel, borderRadius: 16, boxShadow: tokens.colors.shadowInsetGlow, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "12px", borderColor: tokens.colors.borderPrimary, borderWidth: 1, borderStyle: "solid", padding: "1px" }}>
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
              width: "84px",
              backgroundColor: tokens.colors.chartBar,
              borderRadius: "4px",
            }}
            animate={{ height: isActive ? [barConfig.min, barConfig.max] : barConfig.min }}
            transition={{
              duration: 5,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
          <span className="text-xs text-(--color-text-primary) text-align-center h-6">
            {barConfig.name}
          </span>
          <span className="text-sm text-(--color-text-secondary) mb-2">
          <AnimatedDiff min={barConfig.min} max={barConfig.max} delay={i * 0.1} isActive={isActive} />
          </span>
        </div>
      ))}
    </div>
  );
}