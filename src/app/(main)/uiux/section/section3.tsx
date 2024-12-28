import React from 'react'
import "./style.css"
import { IoIosCheckmark } from "react-icons/io";
import Image from 'next/image';
import SCetch from "../../../../../public/scetch.png"
import Uxui7 from "../../../../../public/uxui7.png"
type Props = {}

const section3 = (props: Props) => {
    return (
        <div className='h-auto relative z-10 sectionbg bg-black text-white'>
            <div className=' flex flex-col gap-10 items-center pt-20 justify-center'>
                <span className='bg-gray-800/80 p-1 px-4 rounded-full w-fit text-white'>UX/UI</span>
                <h1 className='sm:text-7xl text-2xl  font-semibold text-center'>Our UI/UX
                    <br />
                    Methodology</h1>
                <div className=' flex sticky top-24 gap-2 text-white sm:gap-4'>
                    <span className='bg-black/20 p-1 sm:p-5 px-2 border sm:px-16 rounded-s-full backdrop-blur-3xl'>Research</span>
                    <span className='bg-black/20 p-1 sm:p-5 px-2ḍ border   sm:px-16 backdrop-blur-3xl'>Design</span>
                    <span className='bg-black/20 p-1 sm:p-5 px-2  border sm:px-16 backdrop-blur-3xl'>Testing</span>
                    <span className='bg-black/20 p-1 sm:p-5 px-2  border sm:px-16 rounded-e-full backdrop-blur-3xl'>Revision</span>
                </div>
                <div className='h-auto sm:h-[44 0vh] sm:p-20 flex flex-col gap-10 p-3'>
                    <h1 className='sm:text-4xl text-xl text-white font-semibold sm:w-1/2'>Research: The Foundation of Insightful Design</h1>
                    <p className='sm:w-2/3'>In the research phase, our goal is to derive a profound understanding of the user environment and needs through a series of targeted, high-quality research methods:</p>
                    <div className=' gap-10 grid grid-flow-row grid-cols-1 sm:grid-cols-4 '>
                        <div className='flex gap-5'>
                            <div>
                                <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='sm:text-lg text-md text-white font-semibold'>Ethnographic Studies</h3>
                                <p>Conducting real-world observations to capture authentic interactions and contexts of use.</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='sm:text-lg text-md text-white font-semibold'>Surveys</h3>
                                <p>Utilizing both closed and open-ended questions to collect a broad spectrum of data from a diverse user base.</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='sm:text-lg text-md font-semibold'>Competitive Analysis</h3>
                                <p>Evaluating existing market offerings to identify strengths, weaknesses, and opportunities for innovation.</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='sm:text-lg text-md font-semibold'>User Interviews</h3>
                                <p>Gathering qualitative data through structured conversations to delve deep into user needs and frustrations.</p>
                            </div>
                        </div>
                    </div>



                    <h1 className='sm:text-3xl text-xl font-semibold'>Advanced Data Analysis Methods
                    </h1>
                    <div className=' gap-10 grid grid-flow-row grid-cols-1 sm:grid-cols-3 '>

                        <div className='flex gap-5'>
                            <div>
                                <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='sm:text-lg text-md font-semibold'>Surveys</h3>
                                <p>Utilizing both closed and open-ended questions to collect a broad spectrum of data from a diverse user base.</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='sm:text-lg text-md font-semibold'>Competitive Analysis</h3>
                                <p>Evaluating existing market offerings to identify strengths, weaknesses, and opportunities for innovation.</p>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h3 className='sm:text-lg text-md font-semibold'>User Interviews</h3>
                                <p>Gathering qualitative data through structured conversations to delve deep into user needs and frustrations.</p>
                            </div>
                        </div>
                    </div>


                    <div className='sm:mt-44 grid gap-10 grid-flow-row grid-cols-1 sm:grid-cols-2'>
                        <div className='flex flex-col gap-10'>
                            <h1 className='sm:text-5xl text-xl font-semibold'>Design: Crafting User-Centric Interfaces</h1>
                            <p>Post-research, our design phase leverages the insights gained to create intuitive and visually appealing interfaces. We focus on:</p>
                            <div className=' gap-10 justify-between grid grid-flow-row grid-cols-1 sm:grid-cols-2 '>

                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Surveys</h3>
                                        <p>Utilizing both closed and open-ended questions to collect a broad spectrum of data from a diverse user base.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Competitive Analysis</h3>
                                        <p>Evaluating existing market offerings to identify strengths, weaknesses, and opportunities for innovation.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>User Interviews</h3>
                                        <p>Gathering qualitative data through structured conversations to delve deep into user needs and frustrations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' rounded-2xl flex items-end justify-end'>
                            <Image src={SCetch} alt="Kravion " width={650} className="rounded-xl "/>
                        </div>

                    </div>
                    <div className='sm:mt-44 flex flex-col gap-10 sm:gap-20'>
                        <div className='h-auto flex flex-col sm:flex-row gap-10'>
                            <h1 className='sm:text-5xl text-xl font- sm:w-2/3'>Testing: Crafting User-Centric Interfaces</h1>
                            <p className='sm:w-1/2'>In the testing phase at Brand Vision, our focus is on rigorous validation to ensure that our designs perfectly align with user expectations and business objectives. We employ a diverse array of testing methodologies to gather empirical data and user feedback, crucial for refining usability and enhancing the user experience. Here&apos;s an overview of the different types of testing we conduct:</p>

                        </div>
                        <div className=''>
                            <div className=' justify-between grid grid-flow-row grid-cols-1 gap-10 sm:grid-cols-4 '>

                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Usability Testing
                                        </h3>
                                        <p>Direct user interaction with the design to identify usability issues and areas for improvement. This involves observing users as they complete tasks and noting any usability problems.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>A/B Testing</h3>
                                        <p>Comparing two versions of a page or feature against each other to determine which one performs better in terms of user engagement and conversion rates.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Focus Groups</h3>
                                        <p>Gathering a group of target users to discuss and gather feedback on the UI/UX designs. This qualitative method helps understand user attitudes, experiences, and preferences.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Surveys and Questionnaires</h3>
                                        <p>Collecting a large amount of data from a broad user base to get statistically significant insights into user preferences and behaviors.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Eye Tracking</h3>
                                        <p>Using eye-tracking technology to study how users visually interact with the UI. This helps in understanding what attracts attention and what goes unnoticed.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Heatmaps</h3>
                                        <p>Analyzing areas of a web page most frequently clicked on or hovered over by users, providing insight into user behavior patterns.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <div>
                                        <IoIosCheckmark className='text-green-600 rounded-full border border-green-800 text-3xl ' />
                                    </div>
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='sm:text-lg text-md font-semibold'>Accessibility Testing</h3>
                                        <p>Testing: Ensuring that the product is accessible to all users, including those with disabilities. This involves checking color contrast, keyboard accessibility, and screen reader compatibility.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='flex sm:mt-32  flex-col gap-20 items-center justify-center'>
                    <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2  gap-10'>
                            <h1 className='sm:text-5xl font-semibold'>Revising: Iterative Enhancement for Perfections</h1>
                            <p>Our revising phase is characterized by iterative enhancements based on user feedback and test results. This stage ensures that each design element is not only aesthetically pleasing but also highly functional and user-friendly. Continuous improvements are applied until the highest standards of usability and user satisfaction are met.</p>

                        </div>
                        <Image src={ Uxui7} width={1500} alt='Kravion '/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default section3
