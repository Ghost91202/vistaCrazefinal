import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Map from "../../assets/usa-map-population-people-vector-21060077.jpg"
import Map2 from "../../assets/download.jpeg"
export default function Section() {
    return (
        <div className="  lg:p-20">
            <div className=" bg-blue-100 flex flex-col gap-10 rounded-2xl p-8 ">
                <div className='flex flex-col gap-10'>
                    <div>
        <h1 className="lg:text-7xl text-3xl flex gap-2 text-slate-950 font-extrabold">We  offer<span className="text-cyan-500  flex">top<IoMdArrowRoundForward className="justify-center font-extrabold items-center mt-2" /> notch</span>
                            services </h1>
                        <h1 className=" text-3xl lg:text-7xl flex flex-col gap-2 text-slate-950 font-extrabold">with creative and
                            <span>unconventional  <span className="text-cyan-500  flex">ideas.</span></span>
                        </h1>
                    </div>
                    <div className="lg:text-3xl lg:w-1/2 text-balance">
                        <h1>At Vista Craze, we&apos;re devoted to customer experience and fostering a positive team culture. When you become a part of our team, you&apos;re joining a group of individuals who genuinely love their work at every step.</h1>
                    </div>
                    <Link href="" className="bg-slate-950 p-2 rounded-2xl flex justify-center items-center text-white w-44 h-16">
                        GO TO VISION
                    </Link>
                </div>
                <div className="bg-blue-50 rounded-2xl p-10 grid grid-cols-1 justify-center lg:grid-cols-3 gap-10">
                    <div className="col-span-1 lg:col-span-1">
                        <Image src={Map} className=" h-32 w-44 mix-blend-darken opacity-50" alt="vistaCraze digital Marketing agency" />
                        <h1 className="text-cyan-400 text-xl flex lg:w-1/2 opacity-50 flex-col font-extrabold">
                            <span className="text-3xl"> 50+</span>
                            TEAM MEMBERS
                            ACROSS THE INDIA</h1>
                    </div>
                    <div>
                        <div className="col-span-1 lg:col-span-1">
                            <Image src={Map2} className=" h-32 w-44 mix-blend-darken opacity-50" alt="vistaCraze digital Marketing agency" />
                            <h1 className="text-cyan-400 text-xl flex lg:w-3/4 opacity-50 flex-col font-extrabold">
                                <span className="text-3xl"> 10+</span>
                                CITIES WHERE VISTACRAZE PROVIDES SERVICES
                            </h1>
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-1">
                        <div>
                            <Image src={Map2} className=" h-32 w-44 mix-blend-darken opacity-50" alt="vistaCraze digital Marketing agency" />
                            <h1 className="text-cyan-400 text-xl flex lg:w-3/4 opacity-50 flex-col font-extrabold">
                                <span className="text-3xl"> 10+</span>
                                CITIES WHERE VISTACRAZE PROVIDES SERVICES
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
