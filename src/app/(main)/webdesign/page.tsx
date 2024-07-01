"use client";
import Bgblur from "@/components/bgblur/blurbg"
import Stickycard2 from "@/components/cards/stickycard2";
import NavbarDemo from "@/components/navbar/navbar";
import Section2 from "./section/section2";
import Section3 from "./section/section3";
export default function Home() {


  return (
    <div >
      <NavbarDemo />
      <Bgblur />
      <Stickycard2 />
      <Section2 />
      <Section3/>
    </div>
  );
}
