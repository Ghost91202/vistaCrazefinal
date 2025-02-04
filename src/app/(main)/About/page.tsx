import Image from 'next/image'
import React from 'react'
import Aboutimg from "../../../../public/About.jpg"
import Accordion from '@/components/Accordion/Accordion'
import Head from 'next/head'

type Props = {}

const page = (props: Props) => {
  return (
    <>

       <Head>
      <title>About  Kravion  Digital marketing agency </title>
      <meta name="description" content="This is my awesome Next.js website." />
      <meta name="Kravion  DIgital marketing agency" content="next.js, SEO, web development" />

         <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://www.kravion.com",
          "@type": "WebSite",
          "name": " Digital marketing agency in banglore ",
          "url": "https://www.kravion.com",
        })}
      </script>
      </Head>

      <div className='relative z-10 mb-[100vh] bg-black/80 backdrop-blur-3xl '>
          <div className='p-10'>

          <Image src={Aboutimg} alt="about Kravion " className='h-96 w-full rounded-3xl '/>
          </div>
          <div  className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 p-10' >
              <div className=' flex flex-col gap-10'>
               <h1 className='sm:text-3xl  flex gap-2 items-center'>
                  <span className='px-2 bg-gray-700 rounded-full text-sm font-semibold text-violet-600'>WHO WE ARE</span>About our Company</h1>
              <p className='lg:text-xl text-lg text-white/50 '>Kravion Digital Marketing Agency is a premier digital marketing firm headquartered in India, specializing in data-driven strategies to elevate brands across key cities, including Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Established on January 10, 2024, by Founder & CEO Karan Sharma and Co-Founder Avantika Nigam, Kravion has rapidly emerged as a trusted partner for businesses seeking tailored digital solutions. The agency combines creativity, technology, and analytics to deliver measurable growth for clients in competitive markets.</p>

              </div>
              <div className='flex items-center'>
                   <Accordion items={[
                                    { title: 'Our History', content: 'Founded in 2024 by Software Engineer Karan Sharma, Kravion  marketing agency began as a small consultancy serving local businesses in the bustling city of Kanpur. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.' },
                                    { title: 'Our Mission', content: 'At Kravion  Marketing agency, our mission is to empower businesses to thrive in the digital age through innovative strategies, personalized solutions, and unwavering commitment to excellence. We strive to be trusted partners, delivering tangible results and exceptional experiences that drive growth, inspire confidence, and exceed expectations. With integrity, creativity, and a relentless pursuit of success, we are dedicated to shaping a brighter future for our clients and our community..' },
                                    { title: 'Our Vission', content: 'At Kravion  Marketing agency, our vision is to be the leading force in shaping the future of digital marketing, revolutionizing the way businesses connect with their audiences and achieve success online. We aspire to be recognized globally for our innovative strategies, exceptional service, and unwavering commitment to client satisfaction. Through continuous growth, collaboration, and dedication to excellence, we aim to empower businesses of all sizes to thrive in the ever-evolving digital landscape.' }
                  ]} />

        </div>

      </div>
       <div className='flex flex-col gap-10 p-10'>
           <h1 className='sm:text-3xl  flex gap-2 items-center'>
                  <span className='px-2 bg-gray-700 rounded-full text-sm font-semibold text-violet-600'>ABOUT FOUNDER</span>Meet The Founder</h1>
                  <h1 className='text-white/50 sm:text-xl text-xl '>Kravion Digital Marketing Agency is a premier digital marketing firm headquartered in Noida India, specializing in data-driven strategies to elevate brands across key cities, including Kanpur, Noida, Delhi, Bangalore, and Chandigarh. Established on January 10, 2024, by Founder & CEO Karan Sharma and Co-Founder Avantika Nigam, Kravion has rapidly emerged as a trusted partner for businesses seeking tailored digital solutions. The agency combines creativity, technology, and analytics to deliver measurable growth for clients in competitive markets.</h1>
        </div>
    </div>
    </>
  )
}

export default page
