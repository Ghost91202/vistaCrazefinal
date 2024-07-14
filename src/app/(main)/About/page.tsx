import Image from 'next/image'
import React from 'react'
import Aboutimg from "../../../../public/About.jpg"
import Accordion from '@/components/Accordion/Accordion'
type Props = {}

const page = (props: Props) => {
  return (
      <div className='relative z-10 mb-[100vh] bg-black/80 backdrop-blur-3xl '>
          <div className='p-10'>

          <Image src={Aboutimg} alt="about vistacraze" className='h-96 w-full rounded-3xl '/>
          </div>
          <div  className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 p-10' >
              <div className=' flex flex-col gap-10'>
               <h1 className='sm:text-5xl  flex gap-2 items-center'>
                  <span className='px-2 bg-gray-700 rounded-full text-sm font-semibold text-violet-600'>WHO WE ARE</span>About our Company</h1>
              <p className='sm:text-3xl text-lg text-white/50 '>Let&apos;s get acquainted! We&apos;re not your average digital marketing agency - we&apos;re a team of passionate individuals who eat, sleep, and breathe <span className='text-white'>creativity, innovation, and all things digital</span>. At Vistacraze Marketing agency, we&apos;re on a mission to make your online <span className='text-violet-600 font-semibold'> Dreams come true</span>, one pixel at a time! We&apos;re a bunch of tech-savvy wizards, design enthusiasts, and social media mavens who believe that digital marketing should be fun, exciting, and downright awesome.</p>

              </div>
              <div className='flex items-center'>
                   <Accordion items={[
                                    { title: 'Our History', content: 'Founded in 2024 by Software Engineer Karan Sharma, Vistacraze marketing agency began as a small consultancy serving local businesses in the bustling city of Kanpur. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.' },
                                    { title: 'Our Mission', content: 'At Vistacraze Marketing agency, our mission is to empower businesses to thrive in the digital age through innovative strategies, personalized solutions, and unwavering commitment to excellence. We strive to be trusted partners, delivering tangible results and exceptional experiences that drive growth, inspire confidence, and exceed expectations. With integrity, creativity, and a relentless pursuit of success, we are dedicated to shaping a brighter future for our clients and our community..' },
                                    { title: 'Our Vission', content: 'At Vistacraze Marketing agency, our vision is to be the leading force in shaping the future of digital marketing, revolutionizing the way businesses connect with their audiences and achieve success online. We aspire to be recognized globally for our innovative strategies, exceptional service, and unwavering commitment to client satisfaction. Through continuous growth, collaboration, and dedication to excellence, we aim to empower businesses of all sizes to thrive in the ever-evolving digital landscape.' }
                  ]} />

        </div>

      </div>
       <div className='flex flex-col gap-10 p-10'>
           <h1 className='sm:text-5xl  flex gap-2 items-center'>
                  <span className='px-2 bg-gray-700 rounded-full text-sm font-semibold text-violet-600'>ABOUT FOUNDER</span>Meet The Founder</h1>
                  <h1 className='text-white/50 sm:text-3xl text-xl '>Karan Sharma, <span className='text-white'>the heart</span> of Vistacraze Marketing agency.  Karan&apos;s passion for innovation and dedication to clients have guided our journey. His strategic vision, client-centered approach, and knack for creative solutions shape our commitment to excellence.</h1>
        </div>
    </div>
  )
}

export default page
