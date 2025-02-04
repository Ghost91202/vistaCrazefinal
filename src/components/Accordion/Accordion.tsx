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
    <div className=" w-96 border-1  rounded-xl ">
      {items.map((item, index) => (
        <div key={index} className=" border-gray-400 border-2 rounded-lg ">
          <button
            className="w-full text-left py-4 xl:text-base text-sm lg:text-md  px-2 flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <span className='text-xl '>{item.title}</span>
            <span className='text-3xl '>{activeIndex === index ? '-' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="p-4 xl:text-base w-96 bg-white text-black text-sm lg:text-md ">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
