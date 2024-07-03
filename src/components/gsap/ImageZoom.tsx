// components/ImageZoom.tsx
"use client"
// components/ImageZoomIn.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import ExampleImage from '../../../public/brand.jpg'; // Replace with your image path

gsap.registerPlugin(ScrollTrigger);

const ImageZoomIn: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, {
        scale: 1
      }, {
        scale: 1.3,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });
    }
  }, []);

  return (
    <div ref={imageRef} className="relative w-full h-screen ">
      <Image
        src={ExampleImage}
        alt="Zoomable Image"

        className="p-20 -mt-32 rounded-3xl"
      />
    </div>
  );
};

export default ImageZoomIn;
