"use client"
import React, { useEffect } from "react";
import "./style.css"
const updateGradientAnimation = () => {
  const root = document.documentElement;

  const primaryColor1 = getComputedStyle(root).getPropertyValue("--primary-color-1");
  const primaryColor2 = getComputedStyle(root).getPropertyValue("--primary-color-2");
  const startGradientAnimationValues = `${primaryColor2.trim()}; ${primaryColor1.trim()}; ${primaryColor2.trim()}`;
  const endGradientAnimationValues = `${primaryColor1.trim()}; ${primaryColor2.trim()}; ${primaryColor1.trim()}`;
  const animationDuration = getComputedStyle(root).getPropertyValue("--animation-duration");
  const animationDurationGradient = `${parseFloat(animationDuration) * 2}s`;

  const startGradient = document.getElementById("startGradient");
  const endGradient = document.getElementById("endGradient");
  const startGradientAnimation = document.getElementById("startGradientAnimation");
  const endGradientAnimation = document.getElementById("endGradientAnimation");

  if (startGradient && endGradient && startGradientAnimation && endGradientAnimation) {
    startGradient.setAttribute("stop-color", primaryColor2.trim());
    endGradient.setAttribute("stop-color", primaryColor1.trim());
    startGradientAnimation.setAttribute("values", startGradientAnimationValues);
    endGradientAnimation.setAttribute("values", endGradientAnimationValues);
    startGradientAnimation.setAttribute("dur", animationDurationGradient);
    endGradientAnimation.setAttribute("dur", animationDurationGradient);
  }
};

const GradientComponent: React.FC = () => {
  useEffect(() => {
    updateGradientAnimation();
  }, []);

  return (
    <div className="cell-wrapper absolute">
      <div className="cell-core"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" className="cell">
        <defs>
          <linearGradient id="cell-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop id="startGradient" offset="0%">
              <animate
                id="startGradientAnimation"
                attributeName="stop-color"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop id="endGradient" offset="100%">
              <animate
                id="endGradientAnimation"
                attributeName="stop-color"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
        <path className="cell-path" fill="url(#cell-gradient)"></path>
      </svg>
    </div>
  );
};

export default GradientComponent;
