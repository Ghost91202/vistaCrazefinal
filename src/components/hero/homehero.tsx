import Image from 'next/image'
import React from 'react'
import BgIMG from "../../../public/heroimg.png"
import BgIMG1 from "../../../public/heroimg.jpg"
import "./style.css"
import Link from 'next/link'
type Props = {}

const Blurbg = (props: Props) => {
    return (
        <div className='relative h-auto'>
            <div className=' absolute h-screen overflow-hidden'>
                <Image src={BgIMG1} alt='vi' className='h-screen' />

            </div>
            <div className='w-screen  h-screen overflow-hidden   sm:left-40 sm:right-0 z-0 absolute'>

                <Image src={BgIMG} alt="vi" width={1000}  className='z-40 absolute sm:h-auto w-auto top-28 bottom-0 sm:left-40 flex rounded-2xl  justify-center items-center ' />
            </div>
                <div className='absolute bottom-0  left-0 z-10 flex  justify-between bg2 w-screen pb-20 sm:pb-0 p-10'>
                <div className='flex flex-col text-start gap-5 w-96'>
                    <h1 className='sm:text-6xl text-3xl  font-semibold bottom-9 '>Your Vision, Our Digital Expertise</h1>
                    <p className='sm:text-md  pb-10 border-b border-white/30'>
                    </p>

                    <Link href="/" className='text-sm  sm:text-md border border-white/40 rounded-full px-3 w-fit sm:mb-10 p-2'>
                       Request a Proposal
                    </Link>
                </div>
                <div className='sm:w-1/3 font-semibold  items-start gap-10 flex-col justify-end hidden sm:flex pb-20'>
                    <h1 className='sm:text-xl font-semibold bg-blend-color'>vistacraze</h1>
                    <h1>We are Brand Vision, an award-winning Marketing Agency that will offer you transparency and creativity.</h1>
                    <h4>Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. At Brand Vision, we understand the value of your brand. We provide a range of customized services including branding, website design & development, SEO, marketing consultation, and more</h4>
                </div>

            </div>

            <div className='relative h-screen'>

            </div>
        </div>
    )
}

export default Blurbg
