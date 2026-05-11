"use client";

import CloudContainers from "@/components/cloudContainers";
import Navbar from "@/components/navBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="home-hero" suppressHydrationWarning>
            <div className="home-hero__foreground">
              <Navbar />
              <CloudContainers />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
