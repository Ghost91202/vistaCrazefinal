"use client"

// components/TextReveal.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal: React.FC<{ text: string }> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );
    }
  }, [text]);

  return (
    <div ref={textRef} className="text-3xl font-bold p-5">
      {text.split(' ').map((word, index) => (
        <span key={index} className="word inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
