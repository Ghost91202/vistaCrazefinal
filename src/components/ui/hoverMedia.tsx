// components/HoverContent.js
"use client"
import React from 'react';
import { useState } from 'react';
import "../homesections/service/style/style.css"
import Image from 'next/image';

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
      <div className=' w-full  grid sm:grid-flow-col grid-rows-2  '>
                <div>
                    <div className=' absolute'>

                        {isHovered && (
                            <span className="content">
                                {imageUrl && <Image src={imageUrl} alt="Hover Content" className="media" width={350} height={350} />}
                                {/* {videoUrl && (
                                    <video className={styles.media} controls>
                                        <source src={videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )} */}
                            </span>
                        )}
                    </div>
                </div>
                <div className='text-xl sm:text-3xl items-start flex sm:justify-start font-extrabold hover:opacity-100  opacity-30 cursor-pointer'>

                <span className="hoverText">{text}</span>
                </div>
            </div>

    </div>
  );
};

export default HoverContent;
