import Image from 'next/image'
import React from 'react'
import Ngo from "../../../public/NGo (1).png"
import Tech from "../../../public/tech.png"
import Intertnmt from "../../../public/intertainment.png"
import Real from "../../../public/brand.jpg"
import B2B from "../../../public/b2b.png"

type Props = {}

const industries = (props: Props) => {
  return (
      <div className=' relative z-10 flex flex-col bg-gray-50 text-black items-center justify-center p-5 sm:p-10'>
          <div className='flex flex-col gap-10 items-center  justify-center'>
              <span className='bg-slate-200 text-violet-600 font-medium text-md sm:text-lg p-1 rounded-md px-3'>INDUSTRIES</span>
              <h1 className='sm:text-6xl text-2xl  xl:w-2/3 text-center font-semibold'>Vistacraze <span className='text-violet-600'>
                  Collaborates
              </span>
                  <br/>
                  With Most Industries</h1>
              <p className='xl:w-1/2 text-center'>As a company with over a decade of experience, we at Vistacraze are proud to have worked with many outstanding businesses and industries worldwide. These partnerships have allowed us to expand our knowledge, skills, and expertise, and have helped us to continuously improve our services and deliver excellent results for our clients.</p>
          </div>
          <div className='grid grid-cols-1 gap-5 lg:pt-10 sm:grid-cols-3 xl:p-20'>

              <div className='bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center'>
                  <Image src={Ngo} alt='vistacraze Industries page' className='rounded-md'/>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Not-For-profit</h1>
                      <p className=' font-medium'>All NFP&apos;S receive discount as a token  of our support</p>
                  </div>
              </div>
              <div className='bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center'>
                  <Image src={Tech} alt='vistacraze Industries page' className='rounded-md'/>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Technology</h1>
                      <p className=' font-medium'>Content audit included with all  web design  packages </p>
                  </div>
              </div>
              <div className='bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center'>
                  <Image src={Intertnmt} alt='vistacraze Industries page' className='rounded-md'/>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Professional Services</h1>
                      <p className=' font-medium'>All NFP&apos;S receive discount as a token  of our support</p>
                  </div>
              </div>
              <div className='bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center'>
                  <Image src={Real} alt='vistacraze Industries page' className='rounded-md'/>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Real EState & Construction</h1>
                      <p className=' font-medium'>pioneers in real estate web design  and marketing </p>
                  </div>
              </div>
              <div className='bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center'>
                  <Image src={B2B} alt='vistacraze Industries page' className='rounded-md'/>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>B2B</h1>
                      <p className=' font-medium'>Complete conversion points analysis  included</p>
                  </div>
              </div>
              <div className='bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center'>
                  <Image src={Intertnmt} alt='vistacraze Industries page' className='rounded-md'/>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Entertainment & Media</h1>
                      <p className=' font-medium'>Agency for interactive  design and development</p>
                  </div>
              </div>
              <div className='bg-gray-100 p-2 rounded-md flex flex-col items-center justify-center'>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Health & Wellness</h1>
                      <p className=' font-medium'>Creating user friendly website for health care Industry</p>
                  </div>
              </div>
              <div className='bg-gray-100 p-2 rounded-md flex flex-col items-center justify-center'>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>startUps</h1>
                      <p className=' font-medium'>Specializing  in helping  startUps start their journey</p>
                  </div>
              </div>
              <div className='bg-gray-100 p-2 rounded-md flex flex-col items-center justify-center'>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Entertainment & Media</h1>
                      <p className=' font-medium'>Boost your online sales with perfect website </p>
                  </div>
              </div>
              <div className='bg-gray-100 p-2 rounded-md flex flex-col items-center justify-center'>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Law </h1>
                      <p className=' font-medium'>Portraying  trust  & confidence  through marketing</p>
                  </div>
              </div>
              <div className='bg-gray-100 p-2 rounded-md flex flex-col items-center justify-center'>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Sports & Fitness </h1>
                      <p className=' font-medium'>Web design  that adds excitement to the  business </p>
                  </div>
              </div>
              <div className='bg-gray-100 p-2 rounded-md flex flex-col items-center justify-center'>
                  <div className='p-5 flex flex-col gap-5'>
                      <h1 className='text-md font-semibold'>Education</h1>
                      <p className=' font-medium'>Elevating the impact of marketing  in educational  institutions </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default industries
