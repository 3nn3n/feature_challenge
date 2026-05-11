"use client";

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
      <div className="benefit-section__container">
        <div className="col-center">
          <div className="benefit-section__title-grid">
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
              className={"second-title"}
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
            <hr className="benefit-section__divider" />
          </div>
        </div>
      </div>

      <div className="overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default CloudContainers;
