// Slider.tsx
import Image from "next/image";
import { FC } from "react";

interface SliderProps {
  title: string;
  desc1: string;
  Img1: string;
  title2: string;
  submenu1: string;
  subdesc1: string;
  submenu2: string;
  subdesc2: string;
  submenu3: string;
  subdesc3: string;
  submenu4: string;
  subdesc4: string;
  submenu5: string;
  subdesc5: string;
  lastdesc: string;
}

const Slider: FC<SliderProps> = ({
  title,
  desc1,
  Img1,
  title2,
  submenu1,
  subdesc1,
  submenu2,
  subdesc2,
  submenu3,
  subdesc3,
  submenu4,
  subdesc4,
  submenu5,
  subdesc5,
  lastdesc,
}) => {
  return (
    <div className="slider-container p-10 lg:p-20 bg-white font-serif text-black w-screen">
      <div className="flex lg:flex-row flex-col gap-20">
        <div className="flex flex-col lg:w-2/5 gap-5">
          <h1 className="lg:text-4xl text-2xl font-medium">{title}</h1>
          <p className="lg:text-xl text-sm">{desc1}</p>
          <Image src={Img1} alt="digital marketing company" className="lg:w-full lg:h-96 rounded-2xl" />
        </div>
        <div className="flex flex-col lg:w-3/5 gap-5">
          <h1 className="flex font-medium lg:text-3xl text-2xl">{title2}</h1>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg lg:text-2xl font-medium">{submenu1}</h1>
            <p className="text-sm lg:text-xl">{subdesc1}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg lg:text-2xl font-medium">{submenu2}</h1>
            <p className="text-sm lg:text-xl">{subdesc2}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg lg:text-2xl font-medium">{submenu3}</h1>
            <p className="text-sm lg:text-xl">{subdesc3}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg lg:text-2xl font-medium">{submenu4}</h1>
            <p className="text-sm lg:text-xl">{subdesc4}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg lg:text-2xl font-medium">{submenu5}</h1>
            <p className="text-sm lg:text-xl">{subdesc5}</p>
          </div>
          <div className="text-xl">
            {lastdesc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
