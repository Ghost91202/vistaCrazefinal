// ButtonWithSlider.tsx
"use client";
import React, { useState } from "react";
import Slider from "./Slider";
import { GoArrowRight } from "react-icons/go";

interface ButtonWithSliderProps {
  button: string;
  title: string;
  desc1: string;
  Img1: string;
  title2: string;
  submenu1: string;
  subdesc1: string;
  submenu2: string;
  subdesc2: string;
  submenu3: string;
  subdesc3: string;
  submenu4: string;
  subdesc4: string;
  submenu5: string;
  subdesc5: string;
  lastdesc: string;
}

const ButtonWithSlider: React.FC<ButtonWithSliderProps> = ( {
  button,
  title,
  desc1,
  Img1,
  title2,
  submenu1,
  subdesc1,
  submenu2,
  subdesc2,
  submenu3,
  subdesc3,
  submenu4,
  subdesc4,
  submenu5,
  subdesc5,
  lastdesc,
} ) => {
  const [ showSlider, setShowSlider ] = useState( false );

  const handleButtonClick = () => {
    setShowSlider( !showSlider );
  };

  return (
    <div>
      <div className="bg-violet-800 flex flex-col justify-center items-center p-10 text-white">
        <button
          onClick={handleButtonClick}
          className="font-serif ring-transparent border-none flex gap-5 text-2xl text-white items-center lg:text-4xl"
        >
          {button} <GoArrowRight />
        </button>
      </div>
      {showSlider && (
        <Slider
          title={title}
          desc1={desc1}
          Img1={Img1}
          title2={title2}
          submenu1={submenu1}
          subdesc1={subdesc1}
          submenu2={submenu2}
          subdesc2={subdesc2}
          submenu3={submenu3}
          subdesc3={subdesc3}
          submenu4={submenu4}
          subdesc4={subdesc4}
          submenu5={submenu5}
          subdesc5={subdesc5}
          lastdesc={lastdesc}
        />
      )}
    </div>
  );
};

export default ButtonWithSlider;
