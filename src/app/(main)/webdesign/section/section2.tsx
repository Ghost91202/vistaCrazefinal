import TextReveal from '@/components/gsap/TextReveal'
import React from 'react'

type Props = {}

const section2 = (props: Props) => {
  return (
    <div className='flex h-auto relative text-white flex-col xl:gap-20 p-5 gap-10 xl:p-20 bg-black'>
      <h1 className='xl:text-6xl text-4xl lg:hidden  text-white
                         font-semibold'>
Websites That
Push New Limits</h1>
      <h1 className='xl:text-6xl xl:w-1/2  lg:flex hidden font-semibold'>
        <TextReveal text='Websites That
              Push New Limits'/></h1>
      <div className='flex gap-10 lg:flex-row flex-col justify-between'>
        <span className=' rounded-full w-fit h-fit px-3 py-1 bg '>Our Excellence
        </span>
        <div className="grid grid-flow-col lg:w-2/3 xl:w-2/3  grid-rows-3 gap-10 pb-5  justify-between  ">
          <div className='grid grid-flow-row lg:grid-cols-2 grid-cols-1 xl:pb-5 gap-10 border-b'>
            <h1 className='lg:text-2xl text-2xl xl:text-3xl '>Deep Industry Experience and
              Client-Centric Approach</h1>
            <p>At Vistacraze, we strategically utilize our deep industry expertise to develop custom website solutions tailored to each client&apos;s unique needs. Rather than adopting a one-size-fits-all approach, we meticulously design every website to align precisely with your specific business objectives and challenges. This client-centric approach ensures that every project is not just executed with precision but is also a perfect fit for your business, setting you apart in your market.</p>
          </div>
          <div className='grid grid-flow-row lg:grid-cols-2 grid-cols-1 gap-10 xl:pb-5 border-b'>
            <h1 className='lg:text-2xl text-2xl xl:text-3xl'> Senior-Level
              Expertise at Every Step</h1>
            <p>We ensure that every project is overseen by senior professionals from start to finish. Vistacraze team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations.</p>
          </div>
          <div className='grid grid-flow-row lg:grid-cols-2 grid-cols-1 xl:pb-5 gap-10 border-b'>
            <h1 className='lg:text-2xl text-2xl xl:text-3xl'>Trend-Driven and
              Customized Designed</h1>
            <p>At Vistacraze, we stay ahead of the curve by closely following the latest design trends, ensuring our web solutions are not only modern but also visionary. Each project is a unique creation, meticulously tailored to reflect each client&apos;s distinct brand identity, industry, and business goals. Our  custom and trend-responsive designs guarantees that your website not only stands out in your industry but also remains effective and relevant as market dynamics evolve.

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section2
