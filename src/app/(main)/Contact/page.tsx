import Image from 'next/image'
import React from 'react'
import BgIMG1 from "../../../../public/blue-texture_1253-162.jpg"
import Link from 'next/link'
import NavbarDemo from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

type Props = {}

const Blurbg = (props: Props) => {
    return (
        <div>
             <NavbarDemo/>
        <div className='relative h-auto w-screen overflow-x-hidden bg-black  text-white'>
            <div className=' absolute h-screen overflow-hidden'>
                <Image src={BgIMG1} alt='vi' className='h-full' />

            </div>

                <div className='absolute bottom-0  left-0 z-10 flex  justify-between bg2 w-screen gap-10 pb-20 sm:pb-0 p-10'>
                <div className='flex flex-col text-start gap-5 lg:w-96 xl:w-1/2'>
                    <h1 className='lg:text-5xl xl:text-7xl 2xl:text-7xl md:text-3xl md:bottom-0  text-3xl  font-semibold bottom-9 '>Let&apos;s get started with #Vistacraze</h1>
                    <p className='sm:text-md  pb-10 border-b border-white/30'>
                    </p>

                    <Link href="/" className='text-sm  sm:text-md  px-3 w-fit sm:mb-10 p-2'>
                    Contact Us To Discuss Your Inquiry And We&apos;ll Get Back To You Shortly
                    </Link>
                </div>
                <div className='sm:w-1/3 md:w-1/2 xl:w-1/3 font-semibold  items-start gap-10 flex-col justify-end hidden sm:flex pb-20'>
                    <h1 className='sm:text-lg md:text-sm lg:text-2xl font-semibold bg-blend-color border-b-2 border-blue-600 pb-2 '>Our Locations</h1>
                    <h1 className='md:text-sm lg:text-base'>We are Brand Vision, an award-winning Marketing Agency that will offer you transparency and creativity.</h1>
                    <h4 className='md:text-sm lg:text-base'>Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. At Brand Vision, we understand the value of your brand. We provide a range of customized services including branding, website design & development, SEO, marketing consultation, and more</h4>
                </div>

            </div>

            <div className='relative h-screen'>

            </div>
        </div>
            {/* <Footer/> */}
           </div>
    )
}

export default Blurbg
