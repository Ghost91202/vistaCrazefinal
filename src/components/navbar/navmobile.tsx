"use client";
// src/components/RightDrawer.tsx
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { IoIosMenu, IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';

const RightDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="flex">
        <IoIosMenu className="text-2xl" />
      </button>
      <div
        className={`fixed z-50 top-0 right-0 w-64 h-screen bg-black text-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex flex-col gap-5 text-2xl">
          <button
            onClick={toggleDrawer}
            className="p-2 w-fit bg-violet-600 text-white rounded-lg mb-4"
          >
            <RxCross2 />
          </button>

          <Link href="/" className="flex items-center bg-white/10 backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
            Home <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
          <h1 className="text-violet-600 font-semibold">All Services</h1>
          <div className="flex flex-col gap-5 text-lg items-start pl-2">
            <Link href="/webdesign" className="flex items-center bg-white/10 backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
              Web Design <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
            <Link href="/webdevelopment" className="flex items-center bg-white/10 backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
              Web Development <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
            <Link href="/uiux" className="flex items-center bg-white/10 backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
              UI/UX <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
            <Link href="/seo" className="flex items-center bg-white/10 backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
              SEO <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </div>
          <Link href="/About" className="flex items-center bg-white/10 backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
            About <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
          <Link href="/" className="flex items-center bg-white/10 backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
            Contact <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightDrawer;
