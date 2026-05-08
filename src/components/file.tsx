"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import Card from "./card";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./dashboard";


const InnerReveal = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [graphRunKey, setGraphRunKey] = useState(0);
  const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
const clip = !mounted
  ? "circle(6% at 50% 50%)" // same on server + first client paint
  : isMobile
    ? "circle(100% at 50% 50%)"
    : "circle(6% at 50% 50%)";


  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
          onEnter: () => setGraphRunKey((k) => k + 1),
          onEnterBack: () => setGraphRunKey((k) => k + 1),
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: clip,
        }}
        className="size-full video-box"
      >
        <Dashboard />

      </div>
    </section>
  );
};

export default InnerReveal;