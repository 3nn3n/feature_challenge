"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useCarts } from "../hooks/useCardAPI";
import { useEffect } from "react";

function AnimatedDiff({
  min,
  max,
  delay = 0,
  isActive = false,
}: {
  min: number;
  max: number;
  delay?: number;
  isActive?: boolean;
}) {
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

export default function Card({
  width,
  height,
  isActive = false,
}: { width?: number; height?: number; isActive?: boolean } = {}) {
  const { data } = useCarts();

  const barHeights = [
    { min: data?.carts[0].products[0].price ?? 10, max: data?.carts[0].products[0].total ?? 100, name: data?.carts[0].products[0].title ?? "CPU" },
    { min: data?.carts[5].products[2].price ?? 10, max: data?.carts[5].products[2].total ?? 100, name: data?.carts[5].products[2].title ?? "GPU" },
    { min: data?.carts[1].products[1].price ?? 10, max: data?.carts[1].products[1].total ?? 100, name: data?.carts[1].products[1].title ?? "RAM" },
    { min: data?.carts[0].products[3].price ?? 10, max: data?.carts[0].products[3].total ?? 100, name: data?.carts[0].products[3].title ?? "Disk" },
    { min: data?.carts[1].products[0].price ?? 10, max: data?.carts[1].products[0].total ?? 100, name: data?.carts[1].products[0].title ?? "Net" },
    { min: data?.carts[4].products[2].price ?? 10, max: data?.carts[4].products[2].total ?? 100, name: data?.carts[4].products[2].title ?? "Power" },
  ];

  return (
    <div
      className="chart-card"
      style={{
        ...(width != null ? { width } : {}),
        ...(height != null ? { height } : {}),
      }}
    >
      {barHeights.map((barConfig, i) => (
        <div key={i} className="chart-card__track">
          <motion.div
            className="chart-card__bar"
            animate={{ height: isActive ? [barConfig.min, barConfig.max] : barConfig.min }}
            transition={{
              duration: 5,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
          <span className="chart-card__label">{barConfig.name}</span>
          <span className="chart-card__value">
            <AnimatedDiff min={barConfig.min} max={barConfig.max} delay={i * 0.1} isActive={isActive} />
          </span>
        </div>
      ))}
    </div>
  );
}
