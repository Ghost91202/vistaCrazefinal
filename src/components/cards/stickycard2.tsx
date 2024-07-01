import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import "./stickyCard1.css"
import UXUI from "../../../public/uiux.jpg"
import UXUI2 from "../../../public/uxui2.jpg"
type Props = {}

const stickycard2 = (props: Props) => {
  return (
    <div className='bg-gray-100 rel w-screen font-sans text-black/80 h-auto'>
      <div className="container w-[60rem] ">
            <div className="sticky bg-white/70 h-screen w-screen one">
          <div className='grid grid-flow-row grid-cols-2'>
            <div className=' flex flex-col gap-10 p-20'>
              <div className='bg-gray-100 rounded-full p-2 w-fit'>UX/UI</div>
               <h1 className='sm:text-5xl font-semibold'>What is UX Design?</h1>
          <p className='text-gray-800/60'>User Experience (UX) Design, on the other hand, goes deeper into the user&apos;s interaction with your product. It is a holistic approach that considers the entire journey a user takes to solve a problem or fulfill a need. UX design involves research to understand user behaviors, needs, and motivations and uses this insight to design a coherent, contextually relevant experience that is not only functional but also user-friendly and accessible.</p>
            </div>
            <div>
            <Image src={UXUI} alt="vistacraze uiux page " className='rounded-3xl'/>
            </div>
         </div>
            </div>
            <div className="sticky top-5 bg-white/70 backdrop-blur-3xl h-screen w-screen two">
               <div className='grid grid-flow-row grid-cols-2'>
            <div className=' flex flex-col gap-10 p-20'>
              <div className='bg-gray-100 rounded-full p-2 w-fit'>UX/UI</div>
               <h1 className='sm:text-5xl font-semibold'>What is UX Design?</h1>
          <p className='text-gray-800/60'>User Experience (UX) Design, on the other hand, goes deeper into the user&apos;s interaction with your product. It is a holistic approach that considers the entire journey a user takes to solve a problem or fulfill a need. UX design involves research to understand user behaviors, needs, and motivations and uses this insight to design a coherent, contextually relevant experience that is not only functional but also user-friendly and accessible.</p>
            </div>
            <div className='p-20 bg-white mt-20  rounded-2xl'>
            <Image src={UXUI2} alt="vistacraze uiux page " className='rounded-3xl'/>
            </div>
         </div>
            </div>

          </div>
    </div>
  )
}

export default stickycard2
