import MacbookScrollDemo from "@/components/Macbook"
import { NavbarDemo } from "@/components/navbar/navbar";
import {HeroScrollDemo} from "@/components/hero/hero"
import { Cards } from "@/components/cards/card2";
import { CardDemo } from "@/components/cards/card";
import { SpotlightPreview } from "@/components/sections/section1"
export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <div className="absolute inset-0  h-full w-full items-center px-5 py-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">

        <HeroScrollDemo />
        <div className="h-auto flex p-5  text-white">
        <span className="text-[70px] w-auto font-bold -space-y-0">Back to the simple,
            intuitive, and inspiring.</span>
      {/* <MacbookScrollDemo/> */}
        </div>
        <div className="h-   ">
          <div className="border p-10 flex flex-col h-full text-white items-center justify-center border-gray-700 rounded-3xl gap-5 ">
            <h1 className=" lg:text-5xl font-bold">
              Everything you need for authentication

            </h1>
            <p className=" text-center w-1/2 text-xl">Ever feel like authentication requirements change with the season? Clerk keeps up with the latest trends and security best practices.</p>
            <section className="flex">
              <div className="flex  items-center p-10 gap-5 justify-center float-bottom">
                <div className="flex flex-col items-center">
                   <Cards />
               <Cards />
              </div>
            <CardDemo/>
               <div className="flex flex-col justify-center gap-0 items-center">
                   <Cards />
               <Cards />
              </div>
               </div>

            </section>
          </div>
          <SpotlightPreview/>
        </div>
      </div>
   </main>
  );
}
