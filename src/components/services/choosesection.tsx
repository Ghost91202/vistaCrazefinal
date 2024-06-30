
import { FaSearchLocation } from "react-icons/fa";

export default function Choose(  ) {
    return (
        <div className="w-screen lg:pb-10 p-10 lg:p-20">
            <div className="flex flex-col gap-5 lg:gap-10">
                 <div className=" flex flex-col gap-5    ">
                <h1 className="font-semibold lg:text-5xl">Why Choose Pie-bond for SEO Services?</h1>
                <p>We&apos;re the largest SEO services agency in India for a good reason. With nearly 20 years in the industry, we have built a team of 250 highly-qualified SEO professionals who worke with hundreds of businesses to improve their Google ranking, website traffic, brand awareness, and online revenue.</p>
                <p>We are known for responding quickly to algorithm updates, making pivots in a timely manner, and providing full transparency in our client communication.</p>
            </div>
            <div className=" grid grid-flow-row grid-cols-1 justify-between gap-5 lg:grid-cols-2">
                <div className=" bg-emerald-500/40 flex flex-col lg:p-10 rounded-2xl lg:h-68 gap-5  justify-between items-center">
                    <FaSearchLocation className=" lg:text-5xl text-cyan-500" />
                    <div className="flex flex-col gap-5">
                        <h1 className="lg:text-4xl flex font-semibold justify-center">Discover</h1>
                        <p className=" text-center ">Discover The first step is audience discovery – who are they, what do they need, and how can you help?</p>
                    </div>
                </div>
                <div className=" bg-emerald-500/40 flex flex-col lg:p-10 rounded-2xl lg:h-68 gap-5 justify-between items-center">
                    <FaSearchLocation className=" lg:text-5xl text-cyan-500" />
                    <div className="flex flex-col gap-5">
                        <h1 className="lg:text-4xl flex font-semibold justify-center">Discover</h1>
                        <p className=" text-center ">Discover The first step is audience discovery – who are they, what do they need, and how can you help?</p>
                    </div>
                </div>
            </div>
            <div className=" grid grid-flow-row grid-cols-1 justify-between gap-5 lg:grid-cols-3">
                <div className=" bg-emerald-500/40 flex flex-col lg:p-10 rounded-2xl lg:h-68 gap-5  justify-between items-center">
                    <FaSearchLocation className=" lg:text-5xl text-cyan-500" />
                    <div className="flex flex-col gap-5">
                        <h1 className="lg:text-4xl flex font-semibold justify-center">Discover</h1>
                        <p className=" text-center ">Discover The first step is audience discovery – who are they, what do they need, and how can you help?</p>
                    </div>
                </div>
                <div className=" bg-emerald-500/40 flex flex-col lg:p-10 rounded-2xl lg:h-68 gap-5 justify-between items-center">
                    <FaSearchLocation className=" lg:text-5xl text-cyan-500" />
                    <div className="flex flex-col gap-5">
                        <h1 className="lg:text-4xl flex font-semibold justify-center">Discover</h1>
                        <p className=" text-center ">Discover The first step is audience discovery – who are they, what do they need, and how can you help?</p>
                    </div>
                </div>
                <div className=" bg-emerald-500/40 flex flex-col lg:p-10 rounded-2xl lg:h-68 gap-5 justify-between items-center">
                    <FaSearchLocation className=" lg:text-5xl text-cyan-500" />
                    <div className="flex flex-col gap-5">
                        <h1 className="lg:text-4xl flex font-semibold justify-center">Discover</h1>
                        <p className=" text-center ">Discover The first step is audience discovery – who are they, what do they need, and how can you help?</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
