"use client";
import Bgblur from "@/components/bgblur/blurbg"
import Stickycard2 from "@/components/cards/stickycard2";
import Section2 from "./section/section2";
import Section3 from "./section/section3";
import Industries from "@/components/industry/industries";
import Faq from "@/components/faq/faq"
export default function Home() {


  return (
    <div >
      <Bgblur />
      <Stickycard2 />
      <Section2 />
      <Section3 />
      <Industries />
      <Faq/>
    </div>
  );
}
