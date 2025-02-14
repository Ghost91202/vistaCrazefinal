"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu, IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

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
      {/* Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <IoIosMenu className="text-2xl text-gray-800" />
      </button>

      {/* Drawer */}
      <div
        className={`fixed z-50 top-0 right-0 w-64 h-screen bg-black/95 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out backdrop-blur-sm`}
      >
        <div className="p-6 flex flex-col gap-6">
          {/* Close Button */}
          <button
            onClick={toggleDrawer}
            className="p-2 w-fit bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-200 self-end"
          >
            <RxCross2 className="text-xl" />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 hover:text-violet-400 transition-all duration-200 group"
              onClick={handleLinkClick}
            >
              <span>Home</span>
              <IoIosArrowRoundForward className="text-2xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>

            <h2 className="text-violet-600 font-semibold text-lg mt-4">All Services</h2>
            <div className="flex flex-col gap-3 pl-2">
              <Link
                href="/webdesign"
                className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 hover:text-violet-400 transition-all duration-200 group"
                onClick={handleLinkClick}
              >
                <span>Web Design</span>
                <IoIosArrowRoundForward className="text-2xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </Link>
              <Link
                href="/uiux"
                className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 hover:text-violet-400 transition-all duration-200 group"
                onClick={handleLinkClick}
              >
                <span>UI/UX</span>
                <IoIosArrowRoundForward className="text-2xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </Link>
              <Link
                href="/seo"
                className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 hover:text-violet-400 transition-all duration-200 group"
                onClick={handleLinkClick}
              >
                <span>SEO</span>
                <IoIosArrowRoundForward className="text-2xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </Link>
            </div>

            <Link
              href="/about"
              className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 hover:text-violet-400 transition-all duration-200 group"
              onClick={handleLinkClick}
            >
              <span>About</span>
              <IoIosArrowRoundForward className="text-2xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 hover:text-violet-400 transition-all duration-200 group"
              onClick={handleLinkClick}
            >
              <span>Contact</span>
              <IoIosArrowRoundForward className="text-2xl transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RightDrawer;
