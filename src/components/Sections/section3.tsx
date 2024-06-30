
import Image from "next/image"

import { BsArrowUpRight } from "react-icons/bs";
import img1 from "../../assets/img1.avif"


export default function section3() {
    return (
        <div className="p-3 relative">
             <div className=" p-5 relative z-10 ">
                <div className=" absolute rounded-xl mt-10 flex flex-col lg:gap-5 bg-teal-500 p-5 lg:w-1/2 w-full  text-white h-auto  z-5">
                    <div className="lg:text-6xl flex text-2xl font-extrabold ">
                        <h1 className=" flex flex-row  text-xl">FOR STARTUPS<BsArrowUpRight className="text-white hidden"/>
                        </h1>
                    </div>
                    <div className="text-xl lg:text-3xl font-extrabold text-balance pr-10">
                        <h1>
                            YOUR IDEAS, OUR EXPERTISE, INFINITE POSSIBILITIES.

                        </h1>
                    </div>
                    <div className="text-lg font-thin text-balance pr-10">
                        <h1>

                            WELCOME TO VISTA CRAZE, WHERE CREATIVITY MEETS EXPERTISE IN THE WORLD OF DIGITAL SERVICES. AS A DYNAMIC AND INNOVATIVE FREELANCING AGENCY, WE TAKE PRIDE IN DELIVERING TOP-NOTCH SOLUTIONS TAILORED TO MEET THE UNIQUE NEEDS OF OUR CLIENTS.
                        </h1>
                    </div>
                    <div className="bg-white text-slate-950 w-36 flex justify-center items-center rounded-lg font-semibold p-4 ">
                        <button>GET A QUOTE</button>
                    </div>
                </div>
            </div>

            <Image src={img1} alt="VistaCraze digital marketing agency" className=" w-screen mr-20 rounded-2xl h-screen relative -z-2 " />

        </div>

    )
}
