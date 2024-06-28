import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CanvasRevealEffectDemo3 } from "@/components/cards/card3revealani";
import { IoLogoReact, IoLogoVue } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

type Props = {};

const Techcards: React.FC<Props> = () => {
  return (
    <div className='h-full w-full flex sm:flex-row flex-col justify-center items-center'>

      <div className="w-2/3 grid grid-flow-row  grid-col-1 sm:grid-cols-3 gap-4">
        <div className='flex gap-4 flex-col'>
          <div className='h-[30vh] group border rounded-3xl w-full flex flex-col justify-center items-center relative'>
        <CanvasRevealEffectDemo3 element={<IoLogoReact className='text-5xl group-hover:text-white' />} />
        <div className=' w-full p-4   items-start justify-start'>
          React
        </div>
      </div>
        <div className='h-[30vh] group border rounded-3xl w-full flex flex-col justify-center items-center relative'>
            <CanvasRevealEffectDemo3 element={<div className=" flex space-x-2">
              <IoLogoVue className='text-5xl group-hover:text-white' />
             <span className='text-5xl group-hover:text-white'> &</span> <FaAngular className='text-5xl group-hover:text-white' />
        </div> } />
        <div className=' w-full p-4   items-start justify-start'>
          Vue & Angular js
        </div>
      </div>
        </div>
      <div className='h-[60vh] group border rounded-3xl w-full flex flex-col justify-center items-center relative'>
        <CanvasRevealEffectDemo3 element={<RiNextjsFill className='text-5xl group-hover:text-white' />} />
        <div className=' w-full p-4   items-start justify-start'>
        NEXT JS
        </div>
      </div>
        <div className=" flex gap-4 flex-col">
          <div className='h-[30vh] group border rounded-3xl w-full flex flex-col justify-center items-center relative'>
        <CanvasRevealEffectDemo3 element={<FaWordpressSimple className='text-5xl group-hover:text-white' />} />
        <div className=' w-full p-4   items-start justify-start'>
          WordPress
        </div>
      </div>
          <div className='h-[30vh] group border rounded-3xl w-full flex flex-col justify-center items-center relative'>
        <CanvasRevealEffectDemo3 element={<FaShopify className='text-5xl group-hover:text-white' />} />
        <div className=' w-full p-4   items-start justify-start'>
          Shopify
        </div>
      </div>

      </div>
      </div>

    </div>
  );
};

export default Techcards;
