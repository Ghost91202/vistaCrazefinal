import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Seo1 from "../../../public/seo.svg"
import B2B from "../../../public/b2b.png"
import { BsArrowRightShort } from "react-icons/bs";

type Props = {}

const Stickycards = (props: Props) => {
    return (
        <div className='bg-gray-200 font-sans text-black/80 h-auto'>
            <div className='  flex flex-col sm:flex-row '>
                <div className=" flex flex-col lg:gap-5 xl:gap-10  h-full p-5 sm:m-20 lg:m-5 lg:w-72 pt-10 gap-5 sticky top-40 ">
                    <div className='bg-gray-300 rounded-md text-xs font-medium sm:text-md w-fit  p-1 px-4 text-black'>
                        OUR SERVICES
                    </div>
                    <div className="font-semibold text-lg sm:text-xl text-black">Creative Solutions Crafted
                        To Help You Achieve The
                        Perfect Digital Presence
                    </div>
                    <Link href="/" className='w-fit sm:p-2 p-1 flex gap-4 justify-center items-center rounded-full bg-blue-600 text-white text-md  px-3 lg:w-60'>Request a Proposal <BsArrowRightShort/></Link>
                    <Link href="/" className='border-b w-fit  flex gap-4 justify-center items-center text-semibold pb-2'>Contact Us <BsArrowRightShort/></Link>
                </div>
                <div className="xl:h-fit h-auto sm:overflow-y-auto flex flex-col gap-5 pb-20  relative ">
                    <h1 className=' sm:mt-20 lg:text-4xl xl:text-5xl  text-2xl font-semibold sm:font-bold p-5'>How can we help you?</h1>
                    <div className='grid grid-flow-row gap-10 grid-cols-1 sm:p-0   sm:grid-cols-2 mt-10'>
                        <div className='bg-white p-5 lg:p-4 xl:p-16    rounded-2xl  h-auto w-full flex flex-col gap-5 lg:gap-5 xl:gap-10'>
                            <div>

                                <h1 className='xl:text-4xl lg:text-2xl sm:text-xl text-lg font-semibold sm:font-bold border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Web Design & Development</h1>
                            </div>
                            <p className='text-sm sm:text-md'>Every web design project at Brand Vision stands out as unique, receiving unparalleled attention and care. Our team, composed of award-winning web designers and web developers, is renowned for its ability to craft visually striking websites. These sites are not only a feast for the eyes but also excel in functionality, effectively meeting their intended objectives.</p>
                            <p className='text-sm sm:text-md text-slate-600'>Every web design project at Brand Vision stands out as unique, receiving unparalleled attention and care. Our team, composed of award-winning web designers and web developers, is renowned for its ability to craft visually striking websites. These sites are not only a feast for the eyes but also excel in functionality, effectively meeting their intended objectives.</p>

                            <div className='lg:gap-3 xl:gap-5 flex font-sans  flex-col'>
                                <div className='flex gap-2 text-black'>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs   p-1'>WordPress</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Webflow</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Ui/Ux</Link>
                                </div>

                                <div className='flex gap-2 text-black'> <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Custom Design</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Testing</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs text-slate-500  p-1'>And More</Link></div>
                            </div>
                            <div className='w-full flex justify-between border-t border-gray-200 xl:pt-10 p-2'>
                                <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs bg-gray-300 text-black/80 p-1'>Web Design Service </Link>
                                <Link href='/' className='  sm:text-sm px-3 text-xs text-slate-600  p-1'> View works</Link>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-5 lg:gap-5 xl:gap-10'>
                            <div className='bg-white p-5 lg:p-4 xl:p-16    rounded-2xl  w-full flex flex-col gap-5'>

                                <h1 className='xl:text-4xl lg:text-2xl sm:text-xl text-lg font-semibold sm:font-bold border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>seo</h1>
                                <p className='text-sm sm:text-md'>Boost your online visibility with Brand Vision&apos;s premier SEO services. Our expert strategists optimize your website to climb the rankings, attract your target audience, and increase engagement. Unleash your potential and outshine competitors with our tailored SEO solutions.</p>

                                <div>
                                    <Image src={Seo1} alt='vistacraze' />

                                </div>
                                <div className='border-t border-gray-200 pt-10'>

                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs bg-gray-200 w-44 text-black font-medium p-2 '>see plans </Link>
                                </div>
                            </div>
                            <div className='bg-black/70 backdrop-blur-3xl pt-3 pl-3  rounded-2xl '>
                                <Image src={B2B} alt='' className=' rounded-2xl' />
                                <div className='flex flex-col items-end absolute bottom-5 left-5'>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm text-xs bg-white px-3 text-black '>Feature work </Link>
                                    <h1 className='sm:text-sm px-3 text-xs border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-2 text-white font-semibold hover:border-l-4 group'>Web Design & Development</h1>
                                </div>
                            </div>

                        </div>
                        <div className='bg-white p-5 lg:p-4 xl:p-16    rounded-2xl h-auto w-full gap-5 flex flex-col lg:gap-5 xl:gap-10'>
                            <div>

                                <h1 className='xl:text-4xl lg:text-2xl sm:text-xl text-lg font-semibold sm:font-bold border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Visual Branding</h1>
                            </div>
                            <p>Elevate your brand&apos;s visual identity with Brand Vision, Toronto&apos;s award-winning agency. From logos to color palettes, our expert team crafts cohesive and impactful branding that resonates with your audience. Let us define your business across all channels, ensuring memorable and distinct visual branding for success.</p>
                            <p>Every web design project at Brand Vision stands out as unique, receiving unparalleled attention and care. Our team, composed of award-winning web designers and web developers, is renowned for its ability to craft visually striking websites. These sites are not only a feast for the eyes but also excel in functionality, effectively meeting their intended objectives.</p>

                            <div className=' gap-5 flex lg:flex-row font-sans flex-col'>
                                <div className='flex lg:flex-col w-fit gap-2 text-black'>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Logo Design </Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Typography</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Iconography</Link>
                                </div>

                                <div className='flex gap-2 lg:flex-col text-black'> <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Brand style Guide</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Color palette</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs text-slate-500  p-1'>Texture & Pattern</Link></div>
                            </div>
                            <div className='w-full flex justify-between border-t border-gray-200 lg:p-2 xl:pt-10 '>
                                <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs bg-gray-300 text-black/80 p-1'> Learn More</Link>
                            </div>
                        </div>
                        <div className='bg-white p-5 lg:p-4 xl:p-16  justify-between  rounded-2xl gap-5 h-auto w-full flex flex-col lg:gap-5 xl:gap-10'>
                            <div>

                                <h1 className='xl:text-4xl lg:text-2xl sm:text-xl text-lg font-semibold sm:font-bold border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Brand Research & Strategy</h1>
                            </div>
                            <p>At Brand Vision, our brand research and strategy services form the cornerstone of effective branding. We conduct in-depth analysis of competitors, market trends, and target audiences to inform decision-making. Our strategic framework includes developing brand personas, tone, voice, and mission statements, ensuring consistent and impactful brand communication aligned with clients&apos; business objectives.</p>


                            <div className=' gap-5 flex font-sans flex-col'>
                                <div className='flex flex-col gap-2 text-black'>
                                    <Link href='/' className=' border rounded-full w-fit border-gray-300 sm:text-sm px-3 text-xs  p-1'>Brand Positioning</Link>

                                    <Link href='/' className=' border rounded-full border-gray-300 w-fit  sm:text-sm px-3 text-xs  p-1'>Competitor Analysis</Link>
                                    <Link href='/' className='w-fit border rounded-full border-gray-300 sm:text-sm px-3 text-xs  p-1'>Market Trend Analysis</Link>
                                </div>

                                <div className='flex flex-col gap-2 text-black'> <Link href='/' className=' border rounded-full w-fit border-gray-300 sm:text-sm px-3 text-xs  p-1'>Brand messaging Frame work</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 w-fit sm:text-sm px-3 text-xs  p-1'>Brand voice and Tone</Link>
                                    <Link href='/' className=' border rounded-full border-gray-300 w-fit sm:text-sm px-3 text-xs text-black  p-1'>Brand value and promise</Link></div>
                            </div>
                            <div className='w-full flex justify-between border-t border-gray-200 pt-10'>
                                <Link href='/' className=' border rounded-full border-gray-300 sm:text-sm px-3 text-xs bg-gray-300 text-black/80 p-1'> Learn More</Link>
                            </div>
                        </div>

                    </div>
                    <div className=' grid grid-flow-row   grid-cols-1 lg:grid-cols-2 h-fit gap-5 xl:grid-cols-4'>
                        <div className='bg-white p-4  justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg font-semibold sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Consultation & Audit</h1>
                            <p>We assist you in finding tailored solutions for your business through personalized one-on-one sessions.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-sm px-3 text-xs bg-gray-200 w-44 text-black font-medium p-1 '>Learn more </Link>
                            </div>
                        </div>
                        <div className='bg-white p-4 justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg font-semibold sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>
                                Graphic
                                Design
                            </h1>
                            <p>We craft impactful marketing visuals and illustrations to ensure your brand&apos;s success and recognition.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-sm text-xs bg-gray-200 w-44 text-black font-medium p-1 px-3 '>Learn more </Link>
                            </div>
                        </div>
                        <div className='bg-white p-4 justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg font-semibold sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>Content
                                Marketing</h1>
                            <p>We create unique content, adding value, boosting organic reach, and engaging your target audience.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-sm text-xs bg-gray-200 w-44 text-black font-medium p-1 px-3 '>Learn more </Link>
                            </div>
                        </div>
                        <div className='bg-white p-4 justify-between  rounded-2xl  w-full flex flex-col gap-5'>

                            <h1 className='sm:text-xl text-lg font-semibold sm:font-bold  border-l-2 border-purple-500  group-hover:border-l-purple-600 pl-4 hover:border-l-4 group'>

                                User Interface
                                & User Experience</h1>
                            <p>Our strategies prioritize user-centric design, ensuring intuitive digital experiences for optimal satisfaction.</p>


                            <div className='border-t border-gray-200 pt-10'>

                                <Link href='/' className=' border rounded-full border-gray-200 sm:text-sm text-xs bg-gray-200 w-44 text-black font-medium p-1 px-3 '>Learn more </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stickycards
