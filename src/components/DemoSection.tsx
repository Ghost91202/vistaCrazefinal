// components/DemoSection.tsx
"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollMagic from 'scrollmagic';
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

const DemoSection: React.FC = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Build tween
    const tween = gsap.fromTo(
      ".animate4",
      { left: 700 },
      { left: 0, ease: "back.out(1.7)", stagger: 0.15, duration: 2 }
    );

    // Build scene
    new ScrollMagic.Scene({ triggerElement: "#trigger4", duration: 300 })
      .setTween(tween)
      .addIndicators({ name: "staggering" }) // Add indicators (requires plugin)
      .addTo(controller);

    // Cleanup function to remove the controller and scene
    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <section className="demo" style={{ overflowX: "hidden" }}>
      <div className="spacer s1"></div>
      <div id="trigger4" className="spacer s1"></div>
      <div className="spacer s0"></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}>
        <p>Tchoo Tchoo!</p>
        <a href="#" className="viewsource">view source</a>
      </div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="animate4 box2 black outline" style={{ left: "700px" }}></div>
      <div className="spacer s2"></div>
    </section>
  );
};

export default DemoSection;
