"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "./dashboard";


const InnerReveal = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [graphRunKey, setGraphRunKey] = useState(0);
  const [isGraphActive, setIsGraphActive] = useState(false);
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
          end: "100% top",
          scrub: 1.5,
          pin: true,
          onEnter: () => {
            setIsGraphActive(true);
            setGraphRunKey((k) => k + 1);
          },
          onEnterBack: () => {
            setIsGraphActive(true);
            setGraphRunKey((k) => k + 1);
          },
          onLeave: () => setIsGraphActive(false),
          onLeaveBack: () => setIsGraphActive(false),
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
        <Dashboard graphRunKey={graphRunKey} isGraphActive={isGraphActive} />

        {!isGraphActive && (
          <div className="abs-center md:scale-100 scale-200">
            <div className="play-btn">
              <img
                src="./play.svg"
                alt=""
                className="size-[3vw] ml-[.5vw]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InnerReveal;