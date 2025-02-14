"use client"
// components/Accordion.tsx
import { useState } from 'react';

type AccordionItemProps = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItemProps[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" w-96 border-1 m-2   rounded-xl ">
      {items.map((item, index) => (
        <div key={index} className=" border-gray-400 border m-2 rounded-lg ">
          <button
            className="w-full text-left py-4 xl:text-base text-sm lg:text-base  px-2 flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <span className='text-base '>{item.title}</span>
            <span className='text-xl '>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 xl:text-sm w-96 bg-white text-black text-base lg:text-base ">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
