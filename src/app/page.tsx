import NavbarDemo from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Cards } from "@/components/cards/card2";
import { CardDemo } from "@/components/cards/card";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/ui/button"
import IMG from "../../public/profile.jpg"
import { BackgroundBeamsDemo } from "@/components/hero/background";
import { MdModeStandby } from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { TbArrowsRandom } from "react-icons/tb";
import { PiMetaLogoDuotone } from "react-icons/pi";
import { TbBrandApplePodcast } from "react-icons/tb";
import { GiIronCross } from "react-icons/gi";
import { CardStackDemo } from "@/components/cards/cardbundle";
import Image from "next/image";
import { ThreeDCardDemo } from "@/components/cards/3dcard";
import React from "../../public/React.png"
import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVue } from "react-icons/io5";
import Service from "@/components/homesections/service/service";
import { FlipWordsDemo } from "@/components/assets/FlipWords";

export default function Home() {




  return (
    <main>
      <NavbarDemo />


      <div className="absolute inset-0 pt-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">

        <BackgroundBeamsDemo />
        <div className="h-full py-20  flex  flex-col items-center justify-center  p-5  gap-10  text-white">

          <FlipWordsDemo />
          <div className="flex flex-col md:text-2xl text-lg items-start gap-10 sm:-mt-20 sm:w-1/2 text-center  justify-center">
            <span >
              Big multinational companies or small local brands. Partner approach with one universal goal - to create authentic, functional, and beautiful design.
            </span>

            <svg className="animate-bounce w-6 h-6 ...">
                <IoIosArrowRoundForward className="rotate-90 sm:text-6xl"/>
            </svg>

          </div>

        </div>
        <div className="h-auto bg-gray-100 text-slate-950 rounded-3xl">

          <div className="  h-auto sm:pt-20 pt-10 p-5 gap-5 text-center items-center  sm:gap-40 justify-center flex flex-col  font-bold rounded-3xl">
            <h1 className="sm:w-2/3 text-4xl sm:text-8xl font-mono">Top-rated design
              for <span className=" bg-blue-600 text-white rotate-45 ">fast</span> growing
              companies</h1>
            <p className=" text-slate-950 font-normal text-lg  sm:w-1/2  text-center items-end justify-end">
              Hello. The top-rated design partner in helping fast-growing companies solve business challenges through design.

            </p>
            <div>
              <div className="flex flex-col gap-10 sm:gap-20">

                <div className=" flex flex-col sm:flex-row h-auto p-10 gap-10 sm:gap-20 items-start sm:items-center sm:justify-center">

                  <h1 className=" text-slate-950 text-start  sm:text-6xl font-mono text-3xl ">Digital marketing
                    <br />
                    <span className="text-blue-600 ">
                      Sunshine Coast</span></h1>
                  <p className="sm:w-1/2  font-normal text-sm text-justify  sm:text-lg">Our dedicated team of marketing experts has positioned us as a  <span className="font-bold">leading digital marketing agency.</span> With a proven track record of success, we have the skills, experience, and passion to drive your next marketing campaign to new heights!</p>
                  <Button className="text-black sm:hidden flex rounded-full text-sm  sm:text-3xl sm:p-2 px-1 border"> Our Package...</Button>


                </div>
                <div className="flex flex-col gap-20 sm:mb-0  mb-20 items-center justify-center">
                  <Button className="text-black sm:flex hidden  rounded-full text-xl sm:text-3xl sm:p-2 px-2 border"> Our Package...</Button>
                  <div className="flex flex-col text-center p-10 sm:w-2/3 sm:items-center sm:justify-center gap-10">
                    <h1 className="text-3xl sm:text-4xl text-start sm:text-center font-mono ">Digital services to establish, build
                      or grow your business...</h1>
                    <p className=" font-normal text-justify sm:text-lg">With in-house digital marketing experts based on the coast… we&apos;ve got you covered!</p>
                    <p className=" font-normal text-justify sm:text-lg">Whether you&apos;re starting digital marketing for the first time, our looking to elevate upon an existing foundation, our team will work with you. From SEO to paid media and web design, not to mention our killer content services – everything we do is geared towards supporting your business goals.</p>
                  </div>
                </div>
              </div>
              <div className="h-full w-full sm:p-20 grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="h-full w-full bg-slate-950 group hover:bg-blue-600 flex flex-col gap-20 p-5 text-white border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <MdModeStandby className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      Google Ads
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Paid media is all about strategically investing in advertising to broaden your brand&apos;s visibility and reach as well as generating leads.</p>
                  <Button className="w-32 hover:bg-slate-950 hover:text-white  hover:border-none mt-10">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col  hover:bg-slate-950 group hover:text-white gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <CgDesignmodo className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      Web Design
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">The foundation of virtually all your marketing, a strong UI/UX designed website, backed by a flawless user journey is essential to business growth.</p>
                  <Button className="w-32 hover:bg-blue-600 hover:text-white  hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col hover:bg-slate-950 group hover:text-white gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <TbArrowsRandom className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      SEO Services
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Implementing a data-based Search Engine Optimisation Strategy is considered by industry experts, as the best investment for long term marketing return. </p>
                  <Button className="w-32 hover:bg-blue-600 hover:text-white  hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col hover:bg-slate-950 group hover:text-white gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <PiMetaLogoDuotone className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      Meta Marketing
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Leverage the power of social media to maximise your online presence and connect with potential customers through Meta Marketing.

                  </p>
                  <Button className="w-32 hover:bg-blue-600 hover:text-white  hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <ThreeDCardDemo />
                <div className="h-full w-full  flex flex-col hover:bg-slate-950 group hover:text-white gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <GiIronCross className="text-5xl" />
                    <h1 className="text-4xl font-mono">
                      CRO
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Conversion Rate Optimisation becomes critical when you&apos;re looking to convert high intent traffic, into customers by elevating user experience.</p>
                  <Button className="w-32 hover:bg-blue-600 hover:text-white  hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
              </div>

            </div>

          </div>
          <div>
            {/* ++++++++++++++++++++++++++++++ INDUSTRIES +++++++++++++++++++++++++++ */}
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
                <div className="flex flex-col justify-center">
                  <Cards
                    text="React"
                    Ico={
                      <FaReact className="text-4xl" />

                    } />
                  <Cards text="Next Js 14"
                    Ico={<RiNextjsFill className="text-4xl" />} />
                </div>
                <CardDemo />
                <div className="flex flex-col justify-center gap-0 items-center">
                  <Cards text="Angular" Ico={<FaAngular className="text-4xl" />} />
                  <Cards text="Vue Js" Ico={<IoLogoVue className="text-4xl" />} />
                </div>
              </div>

            </section>
          </div>

        </div>

        <div>
          {/* <FollowingPointer/> */}
        </div>
        <Service />
        <div className="bg-gray-100 h-auto w-full  ">
          <div className="grid grid-flow-row grid-cols-1 p-10 gap-10 sm:grid-cols-3 sm:gap-32 sm:p-20">
            <div className="bg-white p-10 rounded-3xl h-96  flex flex-col  justify-between">
              <Link href="/" className=" flex items-center ml-40">
                <Image src={IMG} alt="vistaCraze" width={150} height={150} className="rounded-full " />
              </Link>
              <h1 className="text-black ">
                Karan Sharma
                <p className="text-black/50">Founder</p>
              </h1>

            </div>
            <div className="text-slate-950 flex flex-col justify-center items-center">
              <h1 className="sm:text-6xl text-4xl font-mono font-bold">VistaCraze</h1>
              <p className="text-sm font-mono text-center">Made of members with backgrounds at Nike, Apple and Google, Hello Robo team mirrors real-world expertise derived from design industry leaders.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl h-96  flex flex-col  justify-between">
              <Link href="/" className=" flex items-center ml-40">
                <Image src={IMG} alt="vistaCraze" width={150} height={150} className="rounded-full " />
              </Link>
              <h1 className="text-black ">
                Karan Sharma
                <p className="text-black/50">Founder</p>
              </h1>

            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full text-slate-950  flex items-center flex-col sm:gap-20 justify-center h-auto">
          <h1 className="text-3xl sm:w-2/3 font-mono font-bold sm:text-6xl text-center flex justify-center items-center sm:mt-20">Smart investments, major results: our partners agree</h1>

          <CardStackDemo />

          {/* <StickyScrollRevealDemo/> */}


          {/* <div>
            <div className="h-[40rem]  overflow-y-auto flex justify-between relative space-x-40 rounded-md p-10">
              <div className="div relative flex items-start px-4 flex-col">

                   <Cards text="React" /><Cards text="React" /><Cards text="React" /><Cards text="React" />
              </div>
            <div className="hidden lg:block  w-80 r sticky top-10 border bg-white p-10 rounded-3xl h-96   flex-col  justify-between overflow-hidden">
          <h1>hello</h1>
            </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </div>
    </main>
  );
}
