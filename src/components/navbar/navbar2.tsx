// components/Navbar.tsx
"use client"
// components/Navbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (dropdown: string, index: number) => {
    const isOpening = openDropdown !== dropdown;
    setOpenDropdown(isOpening ? dropdown : null);
    if (isOpening) {
      gsap.fromTo(
        dropdownRefs.current[index],
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power1.out' }
      );
    }
  };

  useEffect(() => {
    if (!openDropdown) {
      dropdownRefs.current.forEach((ref) => {
        if (ref) {
          gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: 'power1.out' });
        }
      });
    }
  }, [openDropdown]);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">Brand</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {["Menu 1", "Menu 2", "Menu 3", "Menu 4"].map((menu, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(menu, index)}
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {menu}
              </button>
              <div
                ref={(el) => (dropdownRefs.current[index] = el)}
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden ${
                  openDropdown === menu ? '' : 'hidden'
                }`}
              >
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Submenu 1
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Submenu 2
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Submenu 3
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => toggleDropdown("mobileMenu", -1)}
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Menu
          </button>
          <div
            ref={(el) => (dropdownRefs.current[4] = el)}
            className={`absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-10 overflow-hidden ${
              openDropdown === "mobileMenu" ? '' : 'hidden'
            }`}
          >
            <div className="py-1">
              {["Menu 1", "Menu 2", "Menu 3", "Menu 4"].map((menu, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(menu, index)}
                    className="text-gray-800 px-4 py-2 block w-full text-left"
                  >
                    {menu}
                  </button>
                  <div
                    ref={(el) => (dropdownRefs.current[index + 4] = el)}
                    className={`pl-4 overflow-hidden ${
                      openDropdown === menu ? '' : 'hidden'
                    }`}
                  >
                    <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Submenu 1
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Submenu 2
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Submenu 3
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
