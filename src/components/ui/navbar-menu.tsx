"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative flex  items-center">

      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:bg-gray-700 p-2 rounded-xl hover:underline   text-white hover:opacity-[0.9] "
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.4rem)]  transform -translate-x-1/2 ">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-slate-950 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl "
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full "
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative   text-white  "
    >



      <div className="relative sm:flex hidden border border-transparent  shadow-input text-center float-right  justify-center space-x-8 ">

        {children}
      </div>



    </nav>
  );
};

export const ProductItem = ({
  title,
  Listitems1,
  Listitems2,
  Listitems3,
  Listitems4,
  Listitems5,
  Listitems6,
  href,

}: {
  title: string;
  Listitems1: string;
  Listitems2: string;
  Listitems3: string;
  Listitems4: string;
  Listitems5: string;
  Listitems6: string;
  href: string;
}) => {
  return (
    <Link href={href} className="flex">

      <div>
        <h4 className="text-xl font-bold mb-1 text-black  dark:text-white">
          {title}
        </h4>
        <ul className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          <li>{Listitems1}</li>
          <li>{Listitems2}</li>
          <li>{Listitems3}</li>
          <li>{Listitems4}</li>
          <li>{Listitems5}</li>
          <li>{Listitems6}</li>

        </ul>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
