import React from 'react'

import Image from 'next/image'
import "./stickyCard1.css"
import UXUI from "../../../public/uiux.jpg"
import UXUI2 from "../../../public/uxui2.jpg"
type Props = {}

const stickycard2 = (props: Props) => {
  return (
    <div className='bg-gray-100 relative z-10 w-screen font-sans text-black/80 h-auto' id='sticky'>
      <div className="container h-auto xl:h-[150vh]   sm:w-[60rem] ">
            <div className="sm:sticky bg-white/70 sticky top-10 lg:h-fit xl:h-screen w-screen one">
          <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2'>
            <div className=' flex flex-col gap-10 p-5 sm:p-20'>
              <div className='bg-gray-100 rounded-full p-2 w-fit'>UX/UI</div>
               <h1 className='sm:text-5xl text-xl font-semibold'>What is UX Design?</h1>
          <p className='text-gray-800/60'>User Experience UX Design, on the other hand, goes deeper into the user&apos;s interaction with your product. It is a holistic approach that considers the entire journey a user takes to solve a problem or fulfill a need. UX design involves research to understand user behaviors, needs, and motivations and uses this insight to design a coherent, contextually relevant experience that is not only functional but also user-friendly and accessible.</p>
            </div>
            <div className='sm:p-0 p-5 flex justify-center items-center'>
            <Image src={UXUI} alt="Kravion  uiux page " className='rounded-xl'/>
            </div>
         </div>
            </div>
            <div className="sm:sticky top-5 bg-white/70 pb-10 sm:backdrop-blur-3xl lg:h-fit xl:h-screen w-screen two">
               <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2'>
            <div className=' flex flex-col gap-10 p-5 sm:p-20'>
              <div className='sm:bg-gray-100 bg-gray-200  rounded-full p-2 w-fit'>UX/UI</div>
               <h1 className='sm:text-5xl text-xl font-semibold'>What is UX Design?</h1>
          <p className='text-gray-800/60'>User Experience UX Design, on the other hand, goes deeper into the user&apos;s interaction with your product. It is a holistic approach that considers the entire journey a user takes to solve a problem or fulfill a need. UX design involves research to understand user behaviors, needs, and motivations and uses this insight to design a coherent, contextually relevant experience that is not only functional but also user-friendly and accessible.</p>
            </div>
            <div className='sm:p-20 sm:bg-white  p-5 sm:rounded-2xl'>
            <Image src={UXUI2} alt="Kravion  uiux page " className='rounded-xl'/>
            </div>
         </div>
            </div>

          </div>
    </div>
  )
}

export default stickycard2
