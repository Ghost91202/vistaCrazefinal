"use client";
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
      <div >
          <div className='flex justify-between items-center bg-black/30 backdrop-blur-2xl border-b '>
              <h1>hello</h1>
          <div className='flex'>
              {['Home', 'About', 'Services', 'Contact'].map((menu) => (
        <div
          key={menu}
          className={styles.menuItem}
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        >
          {menu}
          <div
className={`${styles.drawer} ${activeMenu === menu ? styles.open : ''}`}>
                  <p>

            </p>
          </div>
        </div>
      ))}
          </div>
          <span>
              contact
          </span>
          </div>
    </div>
  );
};

export default Navbar;
