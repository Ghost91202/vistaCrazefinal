import MacbookScrollDemo from "@/components/Macbook"
import { NavbarDemo } from "@/components/navbar/navbar";
import { HeroScrollDemo } from "@/components/hero/hero"
import { Cards } from "@/components/cards/card2";
import { CardDemo } from "@/components/cards/card";
import { SpotlightPreview } from "@/components/sections/section1"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CanvasRevealEffectDemo3 } from "@//components/cards/card3revealani.tsx"
import {FollowingPointer} from "@/components/cards/followingPointer"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import CardGroup from "@/components/cards/Techcards"
import { Footer } from "@/components/footer/footer";
import Service from "@/components/sections/service/service";
import { BackgroundBeamsDemo } from "@/components/hero/background";

const items = [
  <div style={{ backgroundColor: 'lightcoral', height: '300px' }}>Slide 1</div>,
  <div style={{ backgroundColor: 'lightblue', height: '300px' }}>Slide 2</div>,
  <div style={{ backgroundColor: 'lightgreen', height: '300px' }}>Slide 3</div>
];


export default function Home() {
  return (
    <main>
      <NavbarDemo />

      <div className="absolute inset-0  h-full w-full items-center px-5 py-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
        <BackgroundBeamsDemo/>
        <HeroScrollDemo />
        <div className="h-full py-20  flex sm:flex-row flex-col  p-5 sm:gap-0 gap-20  text-white">
          <span className="text-5xl md:text-[80px] w-auto font-bold -space-y-0">Back to the simple,
            intuitive, and inspiring.</span>
          <div className="flex flex-col md:text-2xl text-lg items-start gap-10 justify-end">
            <span >
              Big multinational companies or small local brands. Partner approach with one universal goal - to create authentic, functional, and beautiful design.
            </span>
            <Link href="/" className="group flex items-center justify-center gap-5 hover:underline pb-2 p-2 hover:gap-4 transition-all duration-300 ease-out ">
              <span className="text-2xl font-medium">Let&apos;s talk</span>
              <IoIosArrowRoundForward className="rounded-full p-1 text-5xl bg-gray-800 group-hover:bg-slate-600 transition-colors duration-800 ease-out" />
            </Link>
          </div>

        </div>
        <div className="">
          <div className="border p-10 flex flex-col h-full text-white items-center justify-center border-gray-700 rounded-3xl gap-5 ">
            <h1 className="text-4xl text-center sm:text-3xl lg:text-5xl font-bold">
              Everything you need for authentication

            </h1>
            <p className=" text-center sm:w-1/2 text-xl">Ever feel like authentication requirements change with the season? Clerk keeps up with the latest trends and security best practices.</p>
            <section className="flex">
              <div className="flex lg:flex-row flex-col items-center p-10 gap-5 justify-center float-bottom">
                <div className="flex flex-col items-center">
                  <Cards />
                  <Cards />
                </div>
                <CardDemo />
                <div className="flex flex-col justify-center gap-0 items-center">
                  <Cards />
                  <Cards />
                </div>
              </div>

            </section>
          </div>

        </div>
        <div>
          <SpotlightPreview />
          {/* <CanvasRevealEffectDemo3 /> */}
          <CardGroup/>
        </div>
        <div>
          {/* <FollowingPointer/> */}
        </div>
        <Service />

      <Footer />
      </div>
    </main>
  );
}
