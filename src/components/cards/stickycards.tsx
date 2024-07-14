import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Seo1 from "../../../public/seo.svg"
import B2B from "../../../public/b2b.png"
import "./stickyCard1.css"

type Props = {}

const Stickycards = (props: Props) => {
    return (
        <div className='bg-black relative z-10  sm:mt-0 font-sans  h-auto'>
            <div className='  flex flex-col gap-10 sm:gap-20 sm:pt-40  items-center sm:p-20 '>
                 <div className='text-4xl  sm:text-9xl  text-white font-bold font-mono  opacity-20 '>
                        OUR SERVICES
                    </div>
                <div className="xl:h-fit h-auto flex flex-col gap-5   relative ">
                    {/* <h1 className=' sm:mt-20 lg:text-4xl xl:text-5xl  text-2xl sm:font-bold p-5'>How can we help you?</h1> */}
                    <div className='grid grid-flow-row gap-10 grid-cols-1 sm:p-0   sm:grid-cols-3'>
                        <div className='bg-black/10 backdrop-blur-3xl border   p-5 lg:p-4 xl:p-10 flex flex-col justify-between   rounded-2xl  h-auto w-full gap-5 lg:gap-5 xl:gap-10'>
                            <div className='flex flex-col gap-10'>

                                <h1 className='xl:text-3xl lg:text-2xl sm:text-xl text-lg sm:font-bold border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Web Design & Development</h1>

                                <p className='text-md sm:text-lg text-white/50'>Every web design project at vistacraze stands out as unique, receiving unparalleled attention and care. Our team, composed of award-winning web designers and web developers, is renowned for its ability to craft visually striking websites. These sites are not only a feast for the eyes but also excel in functionality, effectively meeting their intended objectives.</p>

                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='lg:gap-3 xl:gap-5 flex font-sans  flex-col'>
                                    <div className='flex gap-2 text-white/50'>
                                        <Link href='/' className=' border rounded-full border-gray-600 sm:text-md px-3 text-xs   p-1'>WordPress</Link>
                                        <Link href='/' className=' border rounded-full border-gray-600 sm:text-md px-3 text-xs  p-1'>Webflow</Link>
                                        <Link href='/' className=' border rounded-full border-gray-600 sm:text-md px-3 text-xs  p-1'>Ui/Ux</Link>
                                    </div>

                                    <div className='flex gap-2 text-white/50'> <Link href='/' className=' border rounded-full border-gray-600 sm:text-md px-3 text-xs  p-1'>Custom Design</Link>
                                        <Link href='/' className=' border rounded-full border-gray-600 sm:text-md px-3 text-xs  p-1'>Testing</Link>
                                        <Link href='/' className=' border rounded-full border-gray-600 sm:text-md px-3 text-xs text-slate-500  p-1'>And More</Link></div>
                                </div>
                                <div className='w-full flex justify-between border-t border-gray-200 text-white xl:pt-10 p-2'>
                                    <Link href='/' className=' rounded-full  sm:text-md px-3 text-xs bg-violet-700 text-white/50/80 p-1'>Web Design Service </Link>
                                    <Link href='/' className='  sm:text-md px-3 text-xs bg-violet-700 rounded-3xl  p-1'> View works</Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col  w-full gap-5 lg:gap-5 xl:gap-10'>
                            <div className='bg-black/10 border   p-5 lg:p-4 xl:p-10    rounded-2xl  w-full flex flex-col gap-5'>

                                <h1 className='xl:text-3xl lg:text-2xl sm:text-xl text-lg sm:font-bold border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>seo</h1>
                                <p className='text-md sm:text-lg text-white/50'>Boost your online visibility with vistacraze&apos;s premier SEO services. Our expert strategists optimize your website to climb the rankings, attract your target audience, and increase engagement. Unleash your potential and outshine competitors with our tailored SEO solutions.</p>

                                <div>
                                    <Image src={Seo1} alt='vistacraze' />

                                </div>
                                <div className='border-t border-gray-200 pt-10'>

                                    <Link href='/' className=' border rounded-full border-gray-600 bg-violet-700 sm:text-md px-3 text-xs  w-44 text-white font-medium p-2 '>see plans </Link>
                                </div>
                            </div>
                            <div className='bg-black/70 backdrop-blur-3xl pt-3 pl-3  rounded-2xl '>
                                <Image src={B2B} alt='' className=' rounded-2xl' />
                                <div className='flex flex-col items-end absolute bottom-5 left-5'>
                                    <Link href='/' className=' border rounded-full border-gray-600 sm:text-md text-xs bg-black/10  px-3 text-white/50 '>Feature work </Link>
                                    <h1 className='sm:text-md px-3 text-xs border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-2 text-white hover:border-l-4 group'>Web Design & Development</h1>
                                </div>
                            </div>

                        </div>

                        <div className='bg-black/10 border p-5 lg:p-4 xl:p-10  justify-between  rounded-2xl gap-5 h-auto w-full flex flex-col lg:gap-5 xl:gap-10'>
                            <div>

                                <h1 className='xl:text-3xl lg:text-2xl sm:text-xl text-lg sm:font-bold border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Brand Research & Strategy</h1>
                            </div>
                            <p className='text-white/50 text-md sm:text-lg'>At vistacraze, our brand research and strategy services form the cornerstone of effective branding. We conduct in-depth analysis of competitors, market trends, and target audiences to inform decision-making. Our strategic framework includes developing brand personas, tone, voice, and mission statements, ensuring consistent and impactful brand communication aligned with clients&apos; business objectives.</p>


                            <div className=' gap-5 flex font-sans flex-col'>
                                <div className='flex flex-col gap-2 text-white/50'>
                                    <Link href='/' className=' border rounded-full w-fit border-gray-600 sm:text-md px-3 text-xs  p-1'>Brand Positioning</Link>

                                    <Link href='/' className=' border rounded-full border-gray-600 w-fit  sm:text-md px-3 text-xs  p-1'>Competitor Analysis</Link>
                                    <Link href='/' className='w-fit border rounded-full border-gray-600 sm:text-md px-3 text-xs  p-1'>Market Trend Analysis</Link>
                                </div>

                                <div className='flex flex-col gap-2 text-white/50'> <Link href='/' className=' border rounded-full w-fit border-gray-600 sm:text-md px-3 text-xs  p-1'>Brand messaging Frame work</Link>
                                    <Link href='/' className=' border rounded-full border-gray-600 w-fit sm:text-md px-3 text-xs  p-1'>Brand voice and Tone</Link>
                                    <Link href='/' className=' border rounded-full border-gray-600 w-fit sm:text-md px-3 text-xs text-white/50  p-1'>Brand value and promise</Link></div>
                            </div>
                            <div className='w-full flex justify-between border-t border-gray-200 pt-10'>
                                <Link href='/' className=' rounded-full  sm:text-md px-3 text-xs bg-violet-700  p-1'> Learn More</Link>
                            </div>
                        </div>

                    </div>
                    {/* <div className=' grid grid-flow-row   grid-cols-1 lg:grid-cols-2 h-fit gap-5 xl:grid-cols-4'>
                        <div className='bg-black/10 border  p-4  justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Consultation & Audit</h1>
                            <p className="text-white/50 text-md sm:text-lg">We assist you in finding tailored solutions for your business through personalized one-on-one sessions.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-md px-3 text-xs  te/50 font-medium p-1 bg-violet-700 '>Learn more </Link>
                            </div>
                        </div>
                        <div className='bg-black/10 border  p-4 justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>
                                Graphic
                                Design
                            </h1>
                            <p className="text-white/50 text-md sm:text-lg">We craft impactful marketing visuals and illustrations to ensure your brand&apos;s success and recognition.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-md text-xs  w-44  font-medium p-1 px-3 bg-violet-700 '>Learn more </Link>
                            </div>
                        </div>
                        <div className='bg-black/10 border  p-4 justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Content
                                Marketing</h1>
                            <p className="text-white/50 text-md sm:text-lg">We create unique content, adding value, boosting organic reach, and engaging your target audience.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-md text-xs  w-44  font-medium p-1 px-3 bg-violet-700 '>Learn more </Link>
                            </div>
                        </div>
                        <div className='bg-black/10 border  p-4 justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>

                                User Interface
                                & User Experience</h1>
                            <p className="text-white/50 text-md sm:text-lg">Our strategies prioritize user-centric design, ensuring intuitive digital experiences for optimal satisfaction.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-md text-xs  w-44  font-medium p-1 px-3 bg-violet-700 '>Learn more </Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Stickycards
