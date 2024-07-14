import Image from 'next/image'
import React from 'react'
import BgIMG from "../../../public/heroimg.png"
import BgIMG1 from "../../../public/heroimg1.jpg"
import "./style.css"
import Link from 'next/link'
type Props = {}

const Blurbg = (props: Props) => {
    return (
        <div className='relative bg-black z-10 sm:pb-0 pb-80 h-auto w-screen overflow-x-hidden text-white overflow-hidden'>
            <div className=' relative h-auto overflow-hidden lg:h-auto'>
                <Image src={BgIMG1} alt='vi' className='lg:h-auto h-screen' />

            </div>

                <div className='absolute sm:top-40 top-72  left-0 z-10 flex flex-col  justify-between  w-screen gap-10 sm:gap-5 sm:pb-0  p-5 sm:p-20'>
                <div className='flex flex-col text-start gap-5 lg:w-96 xl:w-1/2'>
                    <h1 className='lg:text-5xl xl:text-6xl 2xl:text-7xl md:text-3xl md:bottom-0  text-3xl   bottom-9 '>Empower Business with modern technology solutions
</h1>
                    <p className='sm:text-md  pb-10 border-b border-white/30'>
                    </p>

                    <Link href="/" className='text-sm  sm:text-md bg-violet-600 rounded-md px-3 w-fit sm:mb-10 p-2'>
                       Request a Proposal
                    </Link>
                </div>
                <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 justify-center backdrop-blur-xl p-5 sm:p-10 rounded-xl bg-white/5 gap-10 sm:gap-5  items-center'>
                    <h1 className='text-4xl sm:text-5xl'>Transforming Businesses with <span className='text-violet-500'>Cutting edge solution</span></h1>
                    <h4 className='text-xl md:text-lg lg:text-base'>Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. At Brand Vision, we understand the value of your brand. We provide a range of customized services including branding, website design & development, SEO, marketing consultation, and more</h4>
                </div>

            </div>
        </div>
    )
}

export default Blurbg
