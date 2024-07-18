
import { Button } from "@/components/ui/button"
import { MdModeStandby } from "react-icons/md";
import { CgDesignmodo } from "react-icons/cg";
import { TbArrowsRandom } from "react-icons/tb";
import { PiMetaLogoDuotone } from "react-icons/pi";
import { GiIronCross } from "react-icons/gi";
import { ThreeDCardDemo } from "@/components/cards/3dcard";
import Stickycards from "@/components/cards/stickycards";
import Industries from "@/components/industry/industries";
import Testimonials from "@/components/testimonials/testimonials";
import  Tabs  from "@/components/faq/faq";
import Hero from "./hero/hero";
import Head from 'next/head';



export default function Home() {




  return (
    <>
       <Head>
      <title>Digital marketing agency in banglore</title>
      <meta name="description" content="This is my awesome Next.js website." />
      <meta name="SEO DIgital marketing agency" content="next.js, SEO, web development" />

         <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://www.Vistacraze.in",
          "@type": "WebSite",
          "name": " Digital marketing agency in banglore ",
          "url": "https://www.Vistacraze.in",
        })}
      </script>
      </Head>
    <main className="w-[100vw] relative z-50 overflow-x-hidden">
      <div >
        {/* <BackgroundBeamsDemo /> */}
        {/* <div className="h-full py-20  flex  flex-col items-center justify-center  p-5  gap-10  text-white">
          <RiWordpressFill className=" absolute left-30 sm:left-60 top-24 text-9xl opacity-20" />
          <RiSeoLine className=" absolute left-30 right-40 top-70 text-9xl opacity-20" />
          <SiGoogleads className=" absolute left-30 sm:right-40 right-70 sm:top-20 text-9xl opacity-20"/>
          <FaMeta className=" absolute left-30 right-70 top-70 bottom-10 text-9xl opacity-20"/>
          <FlipWordsDemo/>
          <div className="flex flex-col md:text-2xl text-lg items-start gap-10 -mt-20 sm:w-1/2 text-center  justify-center">
            <span >
              Big multinational companies or small local brands. Partner approach with one universal goal - to create authentic, functional, and beautiful design.
            </span>

            <div className="animate-bounce mt-10 w-full flex items-center justify-center">
                <IoIosArrowRoundForward className=" text-4xl border w-10 h-10 flex items-center justify-center  rounded-full bg-gray-500 backdrop-blur-xl sm:text-6xl rotate-90"/>
            </div>

          </div>

        </div> */}
        <Hero/>
              {/* <Infinitecarousel/> */}

        <Stickycards />
        <div className="h-auto bg-gray-100 text-slate-950 ">

          <div className="  h-auto sm:pt-20 pt-10 p-5 gap-5 text-center items-center  sm:gap-40 justify-center flex flex-col  font-bold">
            <div>
              <div className="flex flex-col gap-10">

                <div className=" flex flex-col sm:flex-row h-auto gap-10 sm:gap-20 items-start sm:items-center sm:justify-center">

                  <h1 className=" text-slate-950 text-start  sm:text-6xl font-sans text-3xl ">Digital marketing
                    <br />
                    <span className="text-blue-600 ">
                      Sunshine Coast</span></h1>
                  <p className="sm:w-1/2  font-normal text-sm text-justify  sm:text-lg">Our dedicated team of marketing experts has positioned us as a  <span className="font-bold">leading digital marketing agency.</span> With a proven track record of success, we have the skills, experience, and passion to drive your next marketing campaign to new heights!</p>


                </div>
                <div className="flex flex-col gap-20 sm:mb-0  mb-20 items-center justify-center">
                  <div className="flex flex-col text-center sm:w-2/3 sm:items-center sm:justify-center gap-10">
                    <h1 className="text-3xl sm:text-4xl text-start sm:text-center font-sans ">Digital services to establish, build
                      or grow your business...</h1>
                    <p className=" font-normal text-justify sm:text-lg">With in-house digital marketing experts based on the coast… we&apos;ve got you covered!</p>
                    <p className="text-md font-normal text-gray-600 sm:text-lg  xl:w-2/3">Whether you&apos;re starting digital marketing for the first time, our looking to elevate upon an existing foundation, our team will work with you. From SEO to paid media and web design, not to mention our killer content services – everything we do is geared towards supporting your business goals.</p>
                  </div>
                </div>
              </div>
              <div className="h-full w-full lg:pt-5 xl:p-20 grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-10">
                <div className="h-full w-full bg-slate-950 group hover:bg-blue-600 flex flex-col lg:gap-4 justify-between xl:gap-20 p-5 text-white border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <MdModeStandby className="text-5xl" />
                    <h1 className="text-4xl font-sans">
                      Google Ads
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Paid media is all about strategically investing in advertising to broaden your brand&apos;s visibility and reach as well as generating leads.</p>
                  <Button className="w-32    hover:border-none mt-10">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col   group  lg:gap-4 justify-between xl:gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <CgDesignmodo className="text-5xl" />
                    <h1 className="text-4xl font-sans">
                      Web Design
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">The foundation of virtually all your marketing, a strong UI/UX designed website, backed by a flawless user journey is essential to business growth.</p>
                  <Button className="w-32 hover:bg-blue-600   hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col  group  lg:gap-4 justify-between xl:gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <TbArrowsRandom className="text-5xl" />
                    <h1 className="text-4xl font-sans">
                      SEO Services
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Implementing a data-based Search Engine Optimisation Strategy is considered by industry experts, as the best investment for long term marketing return. </p>
                  <Button className="w-32 hover:bg-blue-600   hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <div className="h-full w-full  flex flex-col  group  lg:gap-4 justify-between xl:gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <PiMetaLogoDuotone className="text-5xl" />
                    <h1 className="text-4xl font-sans">
                      Meta Marketing
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Leverage the power of social media to maximise your online presence and connect with potential customers through Meta Marketing.

                  </p>
                  <Button className="w-32 hover:bg-blue-600   hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
                <ThreeDCardDemo />
                <div className="h-full w-full  flex flex-col  group  lg:gap-4 justify-between xl:gap-20 p-5 text-slate-950 border rounded-3xl ">
                  <div className="flex flex-col items-start justify-start ">
                    <GiIronCross className="text-5xl" />
                    <h1 className="text-4xl font-sans">
                      CRO
                    </h1>

                  </div>
                  <p className="text-md sm:text-lg font-light  text-start">Conversion Rate Optimisation becomes critical when you&apos;re looking to convert high intent traffic, into customers by elevating user experience.</p>
                  <Button className="w-32 hover:bg-blue-600   hover:border-none mt-10 border rounded-full">
                    Read More
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </div>
        <Industries />
        <Testimonials/>
        <Tabs />
      </div>
    </main>
    </>
  );
}
