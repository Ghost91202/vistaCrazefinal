// utils/gsap-init.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupSmoothScroll = (): void => {
  gsap.to(window, {
    scrollTo: { y: 0 },
    duration: 0,
  });

  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  });

  gsap.to(window, {
    scrollTo: { y: "max", autoKill: false },
    duration: 1,
    ease: "power3.inOut",
  });
};
