import Image from 'next/image'
import React from 'react'
import BgIMG from "../../../public/webdev.png"
import BgIMG1 from "../../../public/14579711_5488082.jpg"
import NavbarDemo from '../navbar/navbar'

type Props = {}

const Blurbg = (props: Props) => {
    return (
        <div className='relative h-auto'>
            <div className=' absolute h-screen overflow-hidden'>
                <Image src={BgIMG1} alt='vi' />

            </div>
            <div className='w-screen  h-screen overflow-hidden backdrop-blur-3xl top-1  absolute'>

                <Image src={BgIMG} alt="vi" width={1000} height={800} className='z-40 absolute top-20 flex rounded-2xl left-0 justify-center items-center backdrop-blur-3xl' />
            </div>

            <div className='absolute top-72 right-10'>
                <div className='flex flex-col text-end gap-5 w-96'> <h1 className='sm:text-4xl bottom-9 top-44'>UI/UX Design Agency</h1>
                    <p className='sm:text-md  pb-10 border-b border-white/30'>User Interface and User Experience Design Agency
                    </p>
                    <p>Vistacraze is an award-winning UI/UX Agency that focuses on creating effective designs based on research and in-depth testing.
                    </p>
                    <div className=' border border-white/40 rounded-full px-3 w-fit mt-20 p-2'>
                        Scroll to explore
                    </div>
                </div>

            </div>
            <div className='relative h-screen'>

            </div>
        </div>
    )
}

export default Blurbg
