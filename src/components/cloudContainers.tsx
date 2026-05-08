"use client"

import { useGSAP } from "@gsap/react";
import ClipPathTitle from "./pathTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPinSection from "./innerReveal";
import { tokens } from "@/tokens/colors";

gsap.registerPlugin(ScrollTrigger);

const CloudContainers = () => {
  useGSAP(() => {
    gsap.set(".benefit-section .first-title, .benefit-section .second-title, .benefit-section .third-title, .benefit-section .fourth-title", {
      opacity: 0,
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });


  });


  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <div className="relative z-10 mt-20 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-8 items-center justify-items-center">
            <ClipPathTitle
              title={"AWS"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.gradientPanel}
              className={"first-title"}
              borderColor={tokens.colors.borderPrimary}
            />
            <ClipPathTitle
              title={"GCP"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.gradientPanel}
              className={"second-title translate-y-0! rotate-0!"}
              borderColor={tokens.colors.borderPrimary}
            />
            <ClipPathTitle
              title={"AZURE"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.gradientPanel}
              className={"third-title"}
              borderColor={tokens.colors.borderPrimary}
            />
            <ClipPathTitle
              title={"ORACLE"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.gradientPanel}
              className={"fourth-title"}
              borderColor={tokens.colors.borderPrimary}
            />
          </div>
          <div>
            <hr className="text-orange-500 w-250 -mt-5 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="relative overlay-box mt-30">
        <VideoPinSection />
      </div>

    </section>
  );
};

export default CloudContainers;