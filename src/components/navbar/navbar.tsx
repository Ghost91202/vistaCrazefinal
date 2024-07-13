"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";


import Link from "next/link";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Logo from "../../../public/logo.png"



export default function NavbarDemo() {
  return (
    <Navbar className="top-0" />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 reltive items-center flex w-screen  z-50", className)}
    >
      <div className="flex flex-row w-screen justify-between px-5 pt-4 hover:bg-black/50 border-b border-gray-400/30 backdrop-blur-xl bg-black/20">
         <Link href="/">
        <Image src={Logo} alt="VistaCraze digital marketing agency" width={150} height={100} />
      </Link>

      <Menu setActive={setActive} >
        {/* <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/appdevelopment">Web Development</HoveredLink>

            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
            <HoveredLink href="/digitalmarketing">Marketing & Growth </HoveredLink>
          </div>
        </MenuItem> */}

         <Link href="/" className="flex items-center py-auto">About</Link>
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
          <div className="flex items-center justify-center hover:underline">

          <HoveredLink href="/">About</HoveredLink>
          </div>

                <Link href="/" className="flex items-center py-auto hover:underline">Contact</Link>

        </Menu>
         <Link href="/Contact" className="text-white">Request a praposal</Link>
        <div className="sm:hidden flex">

        </div>

 </div>
    </div>
  );
}
