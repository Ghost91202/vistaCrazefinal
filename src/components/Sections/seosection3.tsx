import React from 'react'
import Image from 'next/image'
import Icon1 from "../../../public/ctmrIcon.png"
import Icon2 from "../../../public/icon-1.png"
import Icon3 from "../../../public/icon-2.png"
import Icon4 from "../../../public/Icon-3.png"
import TextReveal from '../gsap/TextReveal'
import "./style/style.css"


type Props = {}

const Seosection3 = (props: Props) => {
  return (
      <div className='bg-slate-950 h-auto text-white lg:pb-20 lg:h-screen seosection3 flex flex-col lg:p-20 p-5 gap-20 lg:gap-20 justify-between'>
          <div className=' flex gap-10 flex-col'>

          <span className='bg-gray-700/40 w-fit px-3 py-1 rounded-md'>
            Serach Engine Optimization Services
              </span>
              <h1 className=' lg:text-6xl   font-semibold lg:w-2/3 text-3xl '>
                  <TextReveal text="Why choose Vistcraze as your SEO Agency?"/>

              </h1>
          </div>
          <div className='grid grid-flow-row  gap-10 lg:p-10 grid-cols-1 lg:grid-cols-4'>
              <div className=' flex gap-5 flex-col justify-between'>
                  <Image  src={Icon1} alt="" width={80}/>
                  <h1 className='lg:text-2xl font-semibold  '>Dedicated SEO Project Manager</h1>
                  <p>At Vistacraze, you will benefit from a dedicated SEO project manager who is fully informed about your objectives and progress, ensuring you receive frequent updates.</p>
              </div>
              <div className=' flex gap-5 flex-col justify-between'>
                  <Image  src={Icon2} alt="" width={80}/>
                  <h1 className='lg:text-2xl font-semibold  '>Comprehensive Reporting</h1>
                  <p>Our SEO packages include detailed monthly and quarterly reports, highlighting your traffic growth, effective keywords, and comparative industry performance.</p>
              </div>
              <div className=' flex gap-5 flex-col justify-between'>
                  <Image  src={Icon3} alt="" width={80}/>
                  <h1 className='lg:text-2xl font-semibold  '>Advanced Technology for SEO</h1>
                  <p>By partnering with us for your SEO needs, you gain access to the latest and most precise tracking and reporting technologies, ensuring optimal return on your investment.</p>
              </div>
              <div className=' flex gap-5 flex-col justify-between'>
                  <Image  src={Icon4} alt="" width={80}/>
                  <h1 className='lg:text-2xl font-semibold  '>Tailored SEO Strategies</h1>
                  <p>Brand Vision rejects one-size-fits-all solutions. We design customized SEO plans specifically tailored to your business goals, industry, and location after thorough analysis.</p>
              </div>

          </div>

    </div>
  )
}

export default Seosection3
