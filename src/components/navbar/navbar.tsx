"use client";
import React, { useState } from "react";
import {  Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

import Image from "next/image";
import Fevicon from "../../../public/fevicon.png"

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Meeting from "../meeting";
import  DrawerPlacement  from "./navmobile";


export default function NavbarDemo() {
  return (
    <Navbar className="top-0" />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div
      className={cn("fixed top-10 reltive items-center flex w-screen  text-white  z-50", className)}
    >
      <div className="flex flex-row w-screen items-center justify-between  sm:px-20 pt-4 p-3  hover:bg-black/50 border-b border-gray-400/30 backdrop-blur-xl bg-black/20">
        <Link href="/" className="flex gap-2 items-start">
          {/* <Image src={Logo} alt="VistaCraze digital marketing agency" width={200} height={100} /> */}
          <Image src={Fevicon} alt="VistaCraze digital marketing agency" width={60} height={100} className="sm:flex" />
          <h1 className="sm:text-3xl text-2xl  -ml-5 -mt-1 flex flex-col font-mono">Vista <span className="absolute ml-4 mt-7 text-violet-600">Craze</span></h1>
        </Link>

        <Menu setActive={setActive} >
          <Link href="/" className="flex items-center py-auto">Home</Link>
          <MenuItem setActive={setActive} active={active} item="Services ">
            <div className="  text-sm text-start grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="WebSite "
                href="/webdesign"
                Listitems1="Web design"
                Listitems2=" website development"
                Listitems3="shopify development"
                Listitems4="Wordpress development"
                Listitems5=""
                Listitems6=""
              />
              <ProductItem
                title="Marketing"
                href="/seo"
                Listitems1="SEO"
                Listitems2="SMM"
                Listitems3="Google Ads"
                Listitems4="FaceBook Ads"
                Listitems5="Instagram Marketing"
                Listitems6="linkedin Ads"
              />
              <ProductItem
                title="Branding"
                href="/uiux"
                Listitems1="Branding"
                Listitems2="Logo design "
                Listitems3="UI & UX"
                Listitems4="Branding strategy"
                Listitems5=""
                Listitems6=""
              />
              <ProductItem
                title=""
                href=""
                Listitems1=""
                Listitems2=""
                Listitems3=""
                Listitems4=""
                Listitems5=""
                Listitems6=""
              />
            </div>
          </MenuItem>
          <div className="flex items-center justify-center text-white hover:underline">

            <Link href="/About" >About</Link>
          </div>


          {/* <Link href="/Contact" className="flex items-center py-auto hover:underline">Contact</Link> */}
          <Link href="#cities" className="flex items-center py-auto hover:underline">City</Link>
        </Menu>
        <Link href="#"  className="text-white sm:flex hidden border rounded-md gap-2   items-center space-x-2 h-8 border-gray-300 justify-center px-2 py-0">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>

          <Meeting title="schedule a Call"/></Link>

        <div className="sm:hidden flex">

        <DrawerPlacement />
        </div>

      </div>

      <div className="z-0 flex ">


        {/* <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className='bla bla bla z-0 bg-red-400'
        >
          <div className="flex h-full pb-5 items-start flex-col text-black">

            <div className=" flex flex-col p-2 pt-10 text-2xl gap-5">

              <Link href="/" className="border-b  pb-5">About</Link>
              <span className="font-semibold" >All services
                <div className="  flex flex-col pl-4 p-2 gap-3">
                   <Link href="/webdesign" className="border-b font-normal    pb-5">Web Design</Link>
              <Link href="/seo" className="border-b font-normal   pb-5">Marketing services</Link>
              <Link href="/uiux" className="border-b font-normal    pb-5">Branding</Link>
             </div>
              </span>
              <Link href="/" className="border-b  pb-5">Contact</Link>
              <Link href="/" className="border-b  pb-5">Our package</Link>
              <Link href="/" className="border-b  pb-5">About</Link>

            </div>
             <Link href="#"  className="text-black  border rounded-full gap-2 mt-10  items-center h-8 border-gray-300 justify-center px-3 flex text-2xl   py-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>

              <Meeting title="schedule a Call"/>
            </Link>
          </div>
        </Drawer> */}
      </div>
    </div>
  );
}
