"use client";

import React, { useState } from 'react';
import { FaRocket, FaRegBuilding } from 'react-icons/fa';
import { AiOutlineRise } from 'react-icons/ai';
import rocketBackground from '../../assets/sert.jpg'; // Replace with the correct path to your background image

const cardData = [
  {
    icon: <FaRocket />,
    title: 'For',
    title2: 'Startups',
    description: 'Accelerate growth with tailored strategies for emerging market presence.',
  },
  {
    icon: <AiOutlineRise />,
    title: 'For',
    title2: 'Businesses',
    description: 'Boost visibility, engage customers, and drive revenue through targeted campaigns.',
  },
  {
    icon: <FaRegBuilding />,
    title: 'For',
    title2: 'Enterprises',
    description: 'Scale efficiently with comprehensive digital solutions and data-driven strategies.',
  },
];

const Card = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`group bg-gray-300 px-10 py-5 lg:w-1/3 my-10 hover:rounded-2xl relative ${
            hoveredIndex === index ? 'hover:bg-black' : ''
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`py-10 text-4xl ${
              hoveredIndex === index ? 'text-white' : 'text-black'
            }`}
          >
            {card.icon}
          </div>

          <div className="py-5">
            <div
              className={`text-3xl pt-24  hover:rounded-2xl font-semibold ${
                hoveredIndex === index ? 'text-white' : 'text-black'
              }`}
            >
              {card.title}
            </div>
            <div
              className={`text-3xl pb-5  hover:rounded-2xl font-semibold ${
                hoveredIndex === index ? 'text-white' : 'text-black'
              }`}
            >
              {card.title2}
            </div>
            <div
              className={`text-lg ${
                hoveredIndex === index ? 'text-white' : 'text-black'
              }`}
            >
              {card.description}
            </div>
          </div>

          {hoveredIndex === index && (
            <div
              className="absolute  hover:rounded-2xl inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url(${rocketBackground})` }}
            ></div>
          )}
        </div>
      ))}
    </>
  );
};

export default Card;
