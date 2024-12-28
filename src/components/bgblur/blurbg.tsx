import Image from 'next/image'
import React from 'react'
import BgIMG from "../../../public/webdev.png"
import BgIMG1 from "../../../public/14579711_5488082.jpg"

import "./style.css"
import Link from 'next/link'
type Props = {}

const Blurbg = (props: Props) => {
    return (
        <div className='relative bg-black z-10 h-screen overflow-hidden text-white'>
            <div className=' absolute h-screen overflow-hidden'>
                <Image src={BgIMG1} alt='vi'  className='h-screen'/>

            </div>
            <div className='w-screen z-0  h-screen overflow-hidden xl:bottom-0 flex items-end  absolute'>

                <Image src={BgIMG} alt="vi" width={1000} className=' sm:h-auto lg:h-[90vh] h-[70vh]  z-40 absolute xl:bottom-0   flex rounded-2xl  sm:left-0 sm:justify-center sm:items-center' />
            </div>

            <div className='absolute z-10 bottom-0 right-0  sm:right-10 p-2 sm:pb-5 pb-14'>
                <div className='flex flex-col text-end gap-5 w-96'>
                    <h1 className='sm:text-4xl text-2xl font-semibold bottom-9 top-44'>UI/UX Design Agency</h1>
                    <p className='sm:text-md  pb-10 border-b border-white/30'>User Interface and User Experience Design Agency
                    </p>
                    <p>Kravion  is an award-winning UI/UX Agency that focuses on creating effective designs based on research and in-depth testing.
                    </p>
                    <div className=' border border-white/40 rounded-full px-3 w-fit sm:mt-20 sm:text-md flex text-sm items-end  justify-end right-0 p-2'>
                        <Link href="#sticky">
                        Scroll to explore
                        </Link>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Blurbg
