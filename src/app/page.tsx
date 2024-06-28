import { NavbarDemo } from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero"
import { Cards } from "@/components/cards/card2";
import { CardDemo } from "@/components/cards/card";
import { SpotlightPreview } from "@/components/sections/section1"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button"

import CardGroup from "@/components/cards/Techcards"
import { Footer } from "@/components/footer/footer";
import Service from "@/components/sections/service/service";
import { BackgroundBeamsDemo } from "@/components/hero/background";
import { MdModeStandby } from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { TbArrowsRandom } from "react-icons/tb";
import { PiMetaLogoDuotone } from "react-icons/pi";
import { TbBrandApplePodcast } from "react-icons/tb";
import { GiIronCross } from "react-icons/gi";



export default function Home() {
  const cards = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    // ... more cards
  ];
  return (
    <main>
      <NavbarDemo />


      <div className="absolute inset-0 pt-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">

        <BackgroundBeamsDemo />
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
        <div className="h-auto bg-gray-100 text-slate-950 rounded-3xl">

          <div className="  h-auto sm:pt-20 pt-10 font-serif text-center items-center  sm:gap-40 justify-center flex flex-col  font-bold rounded-3xl">
            <h1 className="w-2/3 text-4xl sm:text-8xl">Top-rated design
              for fast growing
              companies</h1>
            <p className=" text-slate-950 sm:text-xl sm:w-1/2 font-serif text-center items-end justify-end">
              Hello. The top-rated design partner in helping fast-growing companies solve business challenges through design.

            </p>
            <div>
              <div className="h-full w-full p-20 grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="h-full w-full bg-slate-950 flex flex-col gap-20 p-5 text-white border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <MdModeStandby className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      Google Ads
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Paid media is all about strategically investing in advertising to broaden your brand&apos;s visibility and reach as well as generating leads.</p>
                  <Button className="w-32 mt-10">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <CgDesignmodo className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      Web Design
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">The foundation of virtually all your marketing, a strong UI/UX designed website, backed by a flawless user journey is essential to business growth.</p>
                  <Button className="w-32 mt-10 border rounded-ful">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <TbArrowsRandom className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      SEO Services
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Implementing a data-based Search Engine Optimisation Strategy is considered by industry experts, as the best investment for long term marketing return. </p>
                  <Button className="w-32 mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <PiMetaLogoDuotone className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      Meta Marketing
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Leverage the power of social media to maximise your online presence and connect with potential customers through Meta Marketing.

                  </p>
                  <Button className="w-32 mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <TbBrandApplePodcast className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      Branding & Logo
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Creating a strategic brand identity gives you the competitive edge, fostering trust and building an emotional and unforgettable connection with your audience.

                  </p>
                  <Button className="w-32 mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <GiIronCross className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      CRO
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Conversion Rate Optimisation becomes critical when you&apos;re looking to convert high intent traffic, into customers by elevating user experience.</p>
                  <Button className="w-32 mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
              </div>

            </div>

          </div>
          <div>
            <div className="h-screen p-10">
              <div className="h-full w-full border grid grid-flow-row grid-cols-1 sm:grid-cols-2  rounded-3xl">
                <div className=" flex flex-col items-center justify-center">
                  <h1 className=" font-bold text-4xl font-mono">Industries</h1>
                  <p className="sm:w-1/2 w-2/3 text-center">Hello Robo dedicated to guiding growing businesses in crypto, AI, and robotics, making complex tech simple and successful.
                  </p>
                </div>
                <div className="flex justify-end items-end">
                  <div className="absolute mb-20">
                    <Button className="text-4xl p-10 rounded-full shadow hue-rotate-30 -rotate-90       bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 ..."> SAAS </Button>

                    <Button className=" text-3xl p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ... rounded-full shadow backdrop-hue-rotate-15 -rotate-12">
                      HealthCare                    </Button>

                  </div>
                  <div>
                    <Button className="text-4xl p-10 rounded-full shadow backdrop-hue-rotate-15 rotate-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ..."> EGaming </Button>

                    <Button className=" text-3xl p-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 ... rounded-full shadow backdrop-hue-rotate-15 -rotate-12">
                      Robotics                    </Button>

                  </div>
                  <Button className="text-4xl p-10 rounded-full shadow backdrop-hue-rotate-15 rotate-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ..."> FinTech </Button>

                  <Button className=" text-3xl p-10 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 ... rounded-full shadow backdrop-hue-rotate-15 -rotate-12">
                    E-commerce
                  </Button>

                </div>
              </div>
            </div>
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
                  <Cards text="React"/>
                  <Cards  text="Next Js 14"/>
                </div>
                <CardDemo />
                <div className="flex flex-col justify-center gap-0 items-center">
                  <Cards  text="Angular"/>
                  <Cards  text="Vue Js"/>
                </div>
              </div>

            </section>
          </div>

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
