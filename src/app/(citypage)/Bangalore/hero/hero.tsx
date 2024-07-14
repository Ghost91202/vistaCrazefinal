import Image from 'next/image'
import React from 'react'
// import BgIMG from "../../../public/hero img.png"
import BgIMG1 from "../../../../../public/bangalore.jpg"
import "../../../../"
import Link from 'next/link'
type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='relative h-auto w-screen overflow-x-hidden text-white'>
            <div className=' absolute h-screen overflow-hidden'>
                <Image src={BgIMG1} alt='vi' className='h-screen w-screen ' />

            </div>
            {/* <div className='w-screen  h-screen lg:justify-center flex lg:items-center  sm:left-40 sm:right-0 z-0 absolute'>

                <Image src={BgIMG} alt="vi" width={900}  className='z-40 absolute sm:h-auto w-auto  sm:w-auto  h-[40vh] lg:-left-32 top-28 bottom-0 2xl:left-96 flex rounded-2xl ' />
            </div> */}
                <div className='absolute bottom-0  left-0 z-10 flex  justify-between citybg2 w-screen gap-10 pb-20 sm:pb-0 p-10'>
                <div className='flex flex-col text-start gap-5 lg:w-96 xl:w-1/2'>
                    <h1 className='lg:text-5xl xl:text-7xl 2xl:text-7xl md:text-3xl md:bottom-0  text-3xl  font-semibold bottom-9 '>Bangalore Marketing Agency</h1>
                    <p className='sm:text-md  pb-10 border-b border-white/30'>
                    </p>

                    <Link href="/" className='text-sm  sm:text-md border border-white/40 rounded-full px-3 w-fit sm:mb-10 p-2'>
                       Request a Proposal
                    </Link>
                </div>
                <div className='sm:w-1/3 md:w-1/2 xl:w-1/3 font-semibold  items-start gap-10 flex-col justify-end hidden sm:flex pb-20'>
                    <h1 className='sm:text-lg md:text-sm lg:text-2xl font-semibold bg-blend-color'>vistacraze</h1>
                    <h1 className='md:text-sm lg:text-base'>We are Vistacraze, Marketing Agency that will offer you transparency and creativity.</h1>
                    <h4 className='md:text-sm lg:text-base'>Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. At Brand Vision, we understand the value of your brand. We provide a range of customized services including branding, website design & development, SEO, marketing consultation, and more</h4>
                </div>

            </div>

            <div className='relative h-screen'>

            </div>
        </div>
    )
}

export default Hero
