// components/Navbar.tsx
"use client"
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    menuRefs.current.forEach((menu) => {
      if (menu) {
        gsap.set(menu, { height: 0, opacity: 0 });
      }
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    const menu = menuRefs.current[index];
    if (menu) {
      gsap.to(menu, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power1.inOut' });
    }
  };

  const handleMouseLeave = (index: number) => {
    const menu = menuRefs.current[index];
    if (menu) {
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: 'power1.inOut' });
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">Brand</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {["Menu 1", "Menu 2", "Menu 3", "Menu 4"].map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
                {menu}
              </button>
              <div
                ref={(el) => (menuRefs.current[index] = el)}
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden"
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
          <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
