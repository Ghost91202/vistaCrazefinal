import React from "react";
import NavbarDemo from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Button } from "@/components/ui/button"
import { MdModeStandby } from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { TbArrowsRandom } from "react-icons/tb";
import { PiMetaLogoDuotone } from "react-icons/pi";
import { GiIronCross } from "react-icons/gi";
import { ThreeDCardDemo } from "@/components/cards/3dcard";
import Stickycards from "@/components/cards/stickycards";
import Blurbg from "@/components/hero/homehero";
import Industries from "@/components/industry/industries";
import Testimonials from "@/components/testimonials/testimonials";
import  Tabs  from "@/components/faq/faq";
import "./globals.css"
import Drawer2 from "@/components/drawer/drawer2";


export default function Home() {
  return (
    <main className="w-[100vw] overflow-x-hidden">
      <div className=" text-white">
        <Blurbg />
        <Stickycards />
        <div className="h-auto relative z-10  bg-black text-gray-950 ">
          <div className="  h-auto sm:pt-20 pt-10 p-5 gap-5 text-center items-center  sm:gap-40 justify-center flex flex-col  font-bold">
            <div>
              <div className="flex flex-col gap-10">
                <div className=" flex flex-col sm:flex-row h-auto gap-10 sm:gap-20 items-start sm:items-center sm:justify-center">
                  <h1 className=" text-white text-start  sm:text-6xl font-sans text-3xl ">Digital marketing
                    <br />
                    <span className="text-violet-600 ">
                      Sunshine Coast</span></h1>
                  <p className="sm:w-1/2 text-white  font-normal text-sm text-justify  sm:text-lg">Our dedicated team of marketing experts has positioned us as a  <span className="font-bold text-violet-600">leading digital marketing agency.</span> With a proven track record of success, we have the skills, experience, and passion to drive your next marketing campaign to new heights!</p>


                </div>
                <div className="flex flex-col gap-20 sm:mb-0  mb-20 items-center justify-center">
                  <div className="flex flex-col text-center sm:w-2/3 sm:items-center sm:justify-center gap-10">
                    <h1 className="text-3xl sm:text-4xl text-white text-start sm:text-center font-sans ">Digital services to establish, build
                      or grow your business...</h1>
                    <p className="text-white font-normal text-justify sm:text-lg">With in-house digital marketing experts based on the coast… we&apos;ve got you covered!</p>
                    <p className="text-md font-normal text-white/60 sm:text-lg  xl:w-2/3">Whether you&apos;re starting digital marketing for the first time, our looking to elevate upon an existing foundation, our team will work with you. From SEO to paid media and web design, not to mention our killer content services – everything we do is geared towards supporting your business goals.</p>
                  </div>
                </div>
              </div>
              <div className="h-full  w-full lg:pt-5 xl:p-20 grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="h-full w-full bg-violet-600 group hover:bg-violet-600 flex flex-col gap-5 lg:gap-4 justify-between xl:gap-20 p-5 text-white border hover:border-white rounded-3xl ">
                  <div className="flex gap-2 sm:flex-colitems-start justify-start ">
                    <MdModeStandby className="text-5xl" />
                    <h1 className="text-3xl font-sans">
                      Google Ads
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Paid media is all about strategically investing in advertising to broaden your brand&apos;s visibility and reach as well as generating leads.</p>
                  <Button className="w-32    hover:border-none mt-10">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col hover:shadow-2xl  shadow shadow-gray-200 gap-5 group hover:bg-violet-500  lg:gap-4 justify-between xl:gap-20 p-5 text-white border hover:border-white rounded-3xl ">
                  <div className="flex gap-2 sm:flex-colitems-start justify-start ">
                    <CgDesignmodo className="text-5xl group-hover:text-white" />
                    <h1 className="text-3xl font-sans group-hover:text-white">
                      Web Design
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start group-hover:text-white">The foundation of virtually all your marketing, a strong UI/UX designed website, backed by a flawless user journey is essential to business growth.</p>
                  <Button className="w-32 hover:bg-violet-600    hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col hover:shadow-2xl  shadow shadow-gray-200 gap-5 group hover:bg-violet-500 lg:gap-4 justify-between xl:gap-20 p-5 text-white border hover:border-white rounded-3xl ">
                  <div className="flex gap-2 sm:flex-col items-start justify-start ">
                    <TbArrowsRandom className="text-5xl group-hover:text-white" />
                    <h1 className="text-3xl font-sans group-hover:text-white">
                      SEO Services
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start group-hover:text-white">Implementing a data-based Search Engine Optimisation Strategy is considered by industry experts, as the best investment for long term marketing return. </p>
                  <Button className="w-32 hover:bg-violet-600   hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col hover:shadow-2xl  shadow shadow-gray-200 gap-5 group hover:bg-violet-500 lg:gap-4 justify-between xl:gap-20 p-5 text-white border hover:border-white rounded-3xl ">
                  <div className="flex gap-2 sm:flex-col items-start justify-start ">
                    <PiMetaLogoDuotone className="text-5xl group-hover:text-white" />
                    <h1 className="text-3xl font-sans group-hover:text-white">
                      Meta Marketing
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light group-hover:text-white text-start">Leverage the power of social media to maximise your online presence and connect with potential customers through Meta Marketing.

                  </p>
                  <Button className="w-32 hover:bg-violet-600   hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <ThreeDCardDemo />
                <div className="h-full w-full  flex flex-col hover:shadow-2xl  shadow shadow-gray-200 gap-5 group hover:bg-violet-500 lg:gap-4 justify-between xl:gap-20 p-5 text-white border hover:border-white rounded-3xl ">
                  <div className="flex gap-2 sm:flex-col items-start justify-start ">
                    <GiIronCross className="text-5xl group-hover:text-white" />
                    <h1 className="text-3xl font-sans group-hover:text-white">
                      CRO
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light group-hover:text-white text-start">Conversion Rate Optimisation becomes critical when you&apos;re looking to convert high intent traffic, into customers by elevating user experience.</p>
                  <Button className="w-32 hover:bg-violet-600   hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>
        <Industries />
        <Tabs />
      </div>
    </main>
  );
}
