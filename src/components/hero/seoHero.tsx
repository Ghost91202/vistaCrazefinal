import React from 'react'
import SeoImg from "../../../public/seo.jpg"
import Image from 'next/image'
import Googlereview from "../../../public/googlereview.png"
import Trustpilot from "../../../public/trustpilot.png"
import Link from 'next/link'

type Props = {}

const seoHero = (props: Props) => {
  return (
      <div className='relative h-[50vh] lg:h-screen'>

          <Image src={SeoImg} alt=" seo vistacraze digital marketing agency "  className='absolute z-0 h-[50vh] lg:h-screen  '/>
          <div className='flex top-32    sm:top-44 lg:top-32 xl:top-24 z-10 absolute text-white flex-col items-center gap-5  lg:gap-10 lg:p-20 justify-center'>

              <h1 className='lg:text-6xl lg:w-4/5 text-3xl font-semibold  text-center'>An SEO Agency That Helps Businesses Win Page One Rankings</h1>
              <div className='lg:text-md flex gap-10'> <span className='border-r-2 pr-8 border-blue-600'>
                  Ranking </span>
                  <span className='border-r-2 pr-8 border-blue-600'>Transparent</span>
                  <span>Effient</span></div>
              <div className='flex items-center justify-center gap-10'>
                  <Image src={Googlereview} alt='google review vistacraze' className='lg:w-[10vw] ' width={100}/>
                  <Image src={Trustpilot} alt='google review vistacraze' className='lg:w-[10vw]' width={200} />

              </div>
              <div>
              <Link href="/" className='bg-gray-100 rounded-md text-black font-semibold px-3 py-1 hover:bg-transparent hover:border border-white hover:text-white'>                      Schedule a Call
 </Link>
                  </div>
          </div>
    </div>
  )
}

export default seoHero
