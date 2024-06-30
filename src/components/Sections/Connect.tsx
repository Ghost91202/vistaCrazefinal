import Image from "next/image";
import Contimg from "../../assets/contjpg.jpg"
const Connect = () => {
  return (
    <div className=" grid grid-flow-row grid-cols-1 lg:h-auto h-auto sm:grid-cols-2 ">
      <div className=" lg:h-auto   ">
        <Image
          src={Contimg}
          alt="best seo digital marketing agency"
          className="w-full h-full"
          
        />
      </div>
      <div className=" text-white flex md:justify-center">
        <div className="bg-black text-white lg:w-1/2 h-full md:flex md:flex-col md:justify-center">
           <div className="py-4 text-center text-4xl md:px-20 px-6">A Culture Built Around Winning.</div>
        <div className="py-10 text-center text-xl md:px-16 px-6">We are passionate about helping our clients outperform the competition. With over 16 years experience and 180+ industry awards, we partner with brands we believe in to accelerate growth.</div>
        <div className="py-4 text-center"><button className="py-4 px-10 border text-xl hover:bg-red-700 hover:border-red-700 transition-all duration-150">Let&apos;s Connect</button></div>
        </div>
        <div className="bg-white text-gray-100 sm:hidden md:hidden lg:w-1/2 lg:flex hidden items-center">
          <h1 className=" lg:text-9xl rotate-90  w-full flex">PIE BOND</h1>
        </div>
      </div>

    </div>
  );
};

export default Connect;
