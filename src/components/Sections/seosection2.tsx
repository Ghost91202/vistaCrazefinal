import React from 'react'
import Seo from "../../../public/seo.png"
import Image from 'next/image'
import TextReveal from '../gsap/TextReveal'

type Props = {}

const seosection2 = (props: Props) => {
    return (
        <div className='h-auto lg:h-screen bg-slate-950 text-white grid grid-flow-row grid-cols-1 p-5 lg:grid-cols-2 items-center lg:gap-10 gap-5 lg:p-20'>

            <div className='flex  flex-col gap-10'>
                <span className=' backdrop-blur-lg bg-gray-700/40 rounded-xl w-fit px-3 py-1 text-sm '>
                    Top SEO Agency
                </span>
                <h1 className='lg:text-6xl text-3xl  font-semibold '>
                    <TextReveal text=" Your Trusted SEO
                    Agency for Real Results"/>

                </h1>
                <p> Our top priority is to increase the online visibility of your brand by developing and implementing tailored Search Engine Optimization (SEO) strategies.

                </p>
                <p>Understanding your brand&apos;s unique value, we focus on targeted keyword optimization, on-page enhancements, and quality link building to improve your website&apos;s search engine rankings, ensuring your brand achieves lasting digital growth.

                </p>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>
                            Increase Organic Traffic
                        </span>

                        <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>
                            Create Brand Awereness
                        </span>
                    </div>

                    <div className='flex gap-5'> <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>
                        Generate Leads and increase Sales
                    </span>
                        <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>

                            Improve Local Search Visibility
                        </span>
                    </div>

                </div>
            </div>
            <div className='lg:h-2/3 h-[30vh]  relative overflow-hidden  bg-blue-700/40 rounded-lg p-20'>
                <Image src={Seo} alt=' vistacraze digital marketing agency' className='rounded-xl z-10 absolute lg:w-[35vw] w-[75vw] h-[40vh] lg:h-[50vh]' />
                <span className='bg-blue-800/20 absolute w-full h-full top-8 lg:top-14 rounded-lg backdrop-blur-lg left-5 lg:left-8 right-0 z-0 lg:w-[40vw] lg:h-[50vh]'>
                </span>
            </div>

        </div>
    )
}

export default seosection2
