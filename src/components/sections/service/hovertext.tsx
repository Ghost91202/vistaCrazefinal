// components/HoverContent.tsx (assuming TypeScript file)
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import './style/style.css'
interface HoverContentProps {
  text: string;
  imageUrl: string;
}

const HoverContent: React.FC<HoverContentProps> = ({ text, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hoverContainer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-full grid sm:grid-flow-col  grid-rows-2'>
        <div className='relative '>
          {isHovered && (
            <span className="content">
              {imageUrl && <Image src={imageUrl} alt="Hover Content" className="media rounded-3xl" width={400} height={400}/>}
              {/* Add video support if needed */}
            </span>
          )}
        </div>
        <div className='text-3xl sm:text-6xl items-start flex  justify-start font-extrabold hover:opacity-100 opacity-30 cursor-pointer'>
          <span className="hoverText">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default HoverContent;
