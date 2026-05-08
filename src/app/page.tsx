"use client"

import CloudContainers from "@/components/cloudContainers";
import Navbar from "@/components/navBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })
  return (
    <main>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section className="relative min-h-screen bg-(--color-surface-base) overflow-hidden" suppressHydrationWarning>
          {/* background*/}
        
          {/* <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] rounded-full bg-white animate-pulse"
                style={{
                  top: `${Number(Math.random().toFixed(2)) * 100}%`,
                  left: `${Number(Math.random().toFixed(2)) * 100}%`,
                  opacity: Number(Math.random().toFixed(2)),
                }}
              />
            ))}
          </div> */}



          {/* foreground  */}
          <div className="relative z-10">
            <Navbar />
            <CloudContainers />
          </div>
        </section>
      </div>
    </div>
  </main>
  );
}
