import Image from "next/image";
import sec5 from "../../assets/sec5.avif"
import sec52 from "../../assets/sec52.avif"
import sec53 from "../../assets/sec53.avif"
export default function section5() {
    return (
        <div className="flex flex-col lg:flex-row p-10 gap-5 lg:gap-44 h-auto lg:h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="flex text-3xl lg:text-7xl font-extrabold text-slate-950 lg:flex-col">
                    OUR<span>PROCESS</span>
                </h1>
                <p className="w-96 lg:text-2xl font-bold         ">
                  Our Digital Marketing campaigns drive Awareness, Traffic, and boost Cross-Channel sales.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
                <div>
                    <Image src={sec53} alt="vistaCraze" className=" h-96 rounded-lg" />
                    <div className=" flex flex-col font-extrabold pl-2 mb-20 absolute z-10 text-white lg:text-6xl justify-end ">
                <div className="absolute">
                    <h1>T </h1>
                    <h1>A</h1>
                    <h1>R</h1>
                    <h1>G</h1>
                    <h1>E</h1>
                     <h1 className="flex ">T <span className="text-sm flex w-52 -mt-5">We create winning brand strategies and craft culture-driven stories and content.
</span></h1>

                </div>
            </div>
                </div>
                <div>
                    <Image src={sec52} alt="vistaCraze" className=" lg:h-3/4 lg:w-72 rounded-lg" />
                    <div className=" flex flex-col font-extrabold pl-2 mb-20 absolute z-10 text-white lg:text-6xl justify-end ">
                <div className="absolute">
                    <h1>L </h1>
                    <h1>A</h1>
                    <h1>U</h1>
                    <h1>N</h1>
                    <h1>C</h1>
                     <h1 className="flex ">H <span className=" text-base flex lg:w-52 -mt-10">High Performance Marketing across Social, Search, Display, Video, Mail, and more.</span></h1>

                </div>
            </div>
                </div>
                <div>
                    <Image src={sec5} alt="vistaCraze" className=" h-full w-72 rounded-lg" />
                    <div className=" flex flex-col font-extrabold pl-2 mb-20 absolute z-10 text-white lg:text-6xl justify-end ">
                <div className="absolute">
                    <h1>G </h1>
                    <h1>R</h1>
                    <h1>O</h1>
                     <h1 className="flex ">W <span className="text-xl flex w-52 -mt-6"> Measure and optimize LCV, CPA, and ROAS.</span></h1>

                </div>
            </div>
                </div>
            </div>
        </div>
    )
}
