"use client"

import { useGSAP } from "@gsap/react";
import ClipPathTitle from "./pathTitle";
import gsap from "gsap";
import VideoPinSection from "./innerReveal";
import { tokens } from "@/tokens/colors";

const CloudContainers = () => {
  useGSAP(() => {
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
          

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"AWS"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.bgSecondary}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"GCP"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.bgSecondary}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"AZURE"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.bgSecondary}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"ORACLE"}
              color={tokens.colors.textPrimary}
              bg={tokens.colors.bgSecondary}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>
      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
      
    </section>
  );
};

export default CloudContainers;