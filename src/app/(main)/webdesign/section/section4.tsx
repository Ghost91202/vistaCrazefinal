import Image from 'next/image'
import React from 'react'
import chooseplan from "../../../../../public/chooseplan.svg"
import reviwui from "../../../../../public/reviewui.svg"
import sharevision from "../../../../../public/sharevision.png"
type Props = {}

const section4 = (props: Props) => {
  return (
      <div className=' bg-black flex flex-col sm:gap-20 gap-10 sm:p-10 p-5 items-center justify-center'>
          <h1 className='text-3xl  sm:text-7xl text-center w-1/2'>
              Subscribe for
Exceptional Design
          </h1>
          <div className='grid grid-flow-row p-5 grid-cols-3 gap-10'>
 <div className='flex flex-col sm:p-10  gap-5 bg-white text-black  items-start justify-center rounded-3xl '>
              <h1 className=' sm:text-4xl text-start text-2xl '>Choose Your PLan</h1>
              <h2>Choose the perfect plan for your brand. Need a custom solution? DM us.</h2>
            <Image src={chooseplan} alt='vistacraze web design '/>
          </div> <div className='flex flex-col sm:p-10  gap-5 bg-white text-black  items-center justify-center rounded-3xl '>
              <h1 className=' sm:text-4xl text-2xl '>Share
Your Vision</h1>
              <h2>Submit your ideas and watch them transform into premium products.</h2>
            <Image src={sharevision} alt='vistacraze web design '/>
          </div> <div className='flex flex-col sm:p-10  gap-5 bg-white text-black  items-center justify-center rounded-3xl '>
              <h1 className=' sm:text-4xl text-2xl '>Review, Revise
and Enjoy</h1>
              <h2>Your vision is our mission — we'll refine until you're delighted and satisfied.</h2>
            <Image src={reviwui} alt='vistacraze web design '/>
          </div>
         </div>

    </div>
  )
}

export default section4
