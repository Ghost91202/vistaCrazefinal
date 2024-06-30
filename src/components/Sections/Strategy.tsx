import Strt from "../../assets/strt.jpg"
import Image from "next/image";
import Link from "next/link";
const Strategy = () => {
  return (
    <div className=" flex lg:flex-row flex-col lg:p-0 ">
      <div className="bg-black flex flex-col gap-5 p-10 lg:p-20">
        <h1 className="text-4xl text-white">
          Winning strategy, expertise, and relentless innovation.
        </h1>
        <div className="text-gray-500 sm:flex justify-between">
          <div className="lg:1/3">
            <div className="py-2 text-lg">
              <Link href="/">Strategy</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Branding</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Creative</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Content</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">OTT & Connected TV</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Paid Social</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Paid Search</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Amazon</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Display & Retargeting</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Retail media</Link>
            </div>
          </div>

          <div className="lg:w-2/4">
            <div className="py-2 text-lg">
              <Link href="/">Streaming Audio</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Grocery eCommerce Marketing</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Influencer</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">SEO</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Email, SMS, & CRM</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">Social Media</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">data Science & Analytics</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">UX Design</Link>
            </div>
            <div className="py-2 text-lg">
              <Link href="/">eCommerce</Link>
            </div>
          </div>
        </div>
        <div className=" w-fit">
          <button className="text-white text-xl py-4 px-10 border hover:bg-red-700 hover:border-red-700 transition-all duration-150">Let&apos;s Connect</button>
        </div>
      </div>

      <div className=" lg:w-1/2 h-auto   flex items-center justify-center">
        <Image
          src={Strt}
          alt="pie bond  digital marketing agency "
          className=" lg:-ml-32 lg:h-3/4 flex justify-center"
        />
      </div>
    </div>
  );
};

export default Strategy;
