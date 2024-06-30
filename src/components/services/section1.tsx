
import { IoShieldCheckmark } from "react-icons/io5";

export default function Section1(  ) {
    return (
        <div className="p-10 lg:pb-10 lg:p-20">
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl lg:text-5xl font-semibold">Customized and Targeted SEO Services for a Stronger Search Engine Presence.</h1>
                <div className="lg:p-10 text-xl  flex flex-col lg:flex-row gap-2 row-span-3">
                    <div className="flex bg-gray-200 p-10 rounded-xl  text-balance gap-2 items-center "> <IoShieldCheckmark  className="text-cyan-500 text-5xl lg:text-7xl"/>    Timely pivots to accommodate algorithm updates and industry trends</div>
                <div className="flex bg-gray-200 p-10 rounded-xl  text-balance gap-2 items-center "> <IoShieldCheckmark  className="text-cyan-500 text-5xl lg:text-7xl"/> Customized SEO plans to address the unique needs of your business</div>
                <div className="flex bg-gray-200 p-10 rounded-xl  text-balance gap-2 items-center "> <IoShieldCheckmark  className="text-cyan-500 text-5xl lg:text-7xl"/> Detailed and precise projections for ensuring our clients’ success</div>

                </div>

                <div className="lg:pl-10 text-xl  flex flex-col lg:flex-row gap-2 row-span-3">
                    <div className="flex bg-gray-200 p-10 rounded-xl  text-balance gap-2 items-center "> <IoShieldCheckmark  className="text-cyan-500 text-4xl lg:text-7xl"/> Dedicated teams for your account management</div>
                <div className="flex bg-gray-200 p-10 rounded-xl  text-balance gap-2 items-center "> <IoShieldCheckmark  className="text-cyan-500 text-4xl lg:text-7xl"/> Transparent reporting and seamless communication</div>
                </div>
            </div>
        </div>
    )
}
