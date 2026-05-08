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

      gsap.from(".benefit-connector-path", {
        strokeDasharray: 20,
        strokeDashoffset: 10,
  
        scrollTrigger: {
          trigger: ".benefit-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
  });


  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <div className="mt-20 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-8 items-center justify-items-center">
            <ClipPathTitle
              title={"AWS"}
              color={"#E8F2FF"}
              bg={"radial-gradient(circle at 50% 0%, rgba(45,102,196,0.35), rgba(10,20,65,0.95) 62%)"}
              className={"first-title"}
              borderColor={"#4F93FF"}
            />
            <ClipPathTitle
              title={"GCP"}
              color={"#E8F2FF"}
              bg={"radial-gradient(circle at 50% 0%, rgba(45,102,196,0.35), rgba(10,20,65,0.95) 62%)"}
              className={"second-title translate-y-0! rotate-0!"}
              borderColor={"#4F93FF"}
            />
            <ClipPathTitle
              title={"AZURE"}
              color={"#E8F2FF"}
              bg={"radial-gradient(circle at 50% 0%, rgba(45,102,196,0.35), rgba(10,20,65,0.95) 62%)"}
              className={"third-title"}
              borderColor={"#4F93FF"}
            />
            <ClipPathTitle
              title={"ORACLE"}
              color={"#E8F2FF"}
              bg={"radial-gradient(circle at 50% 0%, rgba(45,102,196,0.35), rgba(10,20,65,0.95) 62%)"}
              className={"fourth-title"}
              borderColor={"#4F93FF"}
            />
          </div>
          <div className="relative h-[340px] sm:h-[280px] xl:h-[210px] w-full max-w-[1600px] px-4 pointer-events-none">
            {/* Mobile (1) */}
            <svg
              className="absolute inset-0 h-full w-full sm:hidden"
              viewBox="0 0 100 1000"
              fill="none"
              preserveAspectRatio="none"
            >
              <path className="benefit-connector-path" 
              d="M50 40 V980" stroke={tokens.colors.colorPath} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path className="benefit-connector-path" 
              d="M50 250 V980" stroke={tokens.colors.colorPath} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path className="benefit-connector-path" 
              d="M50 460 V980" stroke={tokens.colors.colorPath} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path className="benefit-connector-path" 
              d="M50 670 V980" stroke={tokens.colors.colorPath} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>

            {/* Tablet (2) */}
            <svg
              className="absolute inset-0 hidden h-full w-full sm:block xl:hidden"
              viewBox="0 0 1000 1000"
              fill="none"
              preserveAspectRatio="none"
            >
              <path 
              className="benefit-connector-path" 
              d="M250 40 V980" 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path 
              className="benefit-connector-path" 
              d="M750 40 V980" 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path 
              className="benefit-connector-path" 
              d="M250 470 V980" 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path 
              className="benefit-connector-path" 
              d="M750 470 V980" 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>

            {/* Desktop (4 ) */}
            <svg
              className="absolute inset-0 hidden h-full w-full xl:block"
              viewBox="0 0 1600 900"
              fill="none"
              preserveAspectRatio="none"
            >
              <path 
              className="benefit-connector-path" 
              d="M180 -40 V1260 " 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path 
              className="benefit-connector-path" 
              d="M590 -40 V860 " 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path 
              className="benefit-connector-path" 
              d="M1010 -40 V860 " 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path 
              className="benefit-connector-path" 
              d="M1420 -40 V860 " 
              stroke={tokens.colors.colorPath} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
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