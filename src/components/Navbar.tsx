// components/Navbar.tsx
"use client";

import { useState } from 'react';
import Drawer from './Drawer';

const Navbar = () => {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const menus = [
    { title: 'Menu 1', submenu: ['Submenu 1-1', 'Submenu 1-2'] },
    { title: 'Menu 2', submenu: ['Submenu 2-1', 'Submenu 2-2'] },
    { title: 'Menu 3', submenu: ['Submenu 3-1', 'Submenu 3-2'] },
    { title: 'Menu 4', submenu: ['Submenu 4-1', 'Submenu 4-2'] },
  ];

  return (
    <div>
      <nav className="flex justify-around bg-gray-800 text-white p-4">
        {menus.map((menu, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveDrawer(menu.title)}
            onMouseLeave={() => setActiveDrawer(null)}
            className="relative"
          >
            {menu.title}
            {activeDrawer === menu.title && <Drawer submenu={menu.submenu} />}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
