"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import B2b from "../../../public/b2b.png"
import Healthcare from "../../../public/Healthcare.png"
import Education from "../../../public/education.png"
import IGaming from "../../../public/Igaming.png"
export default function NavbarDemo() {
  return (
    <Navbar className="top-0" />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-full mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/appdevelopment">Web Development</HoveredLink>
            {/* <HoveredLink href="/interface-design">Interface Design</HoveredLink> */}
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
            <HoveredLink href="/digitalmarketing">Marketing & Growth </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Industry">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="B2B"
              href=""
              src={B2b.src}
              description=""
            />
            <ProductItem
              title="Education"
              href=""
              src={Education.src}
              description=""
            />
            <ProductItem
              title="HealthCare"
              href=""
              src={Healthcare.src}
              description=""
            />
            <ProductItem
              title="IGaming"
              href=""
              src={IGaming.src}
              description=""
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Company">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">About</HoveredLink>
            <HoveredLink href="/">Our Package</HoveredLink>
            <HoveredLink href="/">Team</HoveredLink>

          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
