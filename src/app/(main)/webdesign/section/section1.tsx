import React from 'react'
import "../hero/style.css"
import TextReveal from '@/components/gsap/TextReveal'
import Link from 'next/link'

type Props = {}

const section1 = (props: Props) => {
    return (
        <div className='h-auto relative text-white bg-black  xl:pb-0 p-5 lg:p-10 xl:p-20'>
            <div className='webbg2 pb-10 h-full rounded-2xl '>
                <div className='grid grid-flow-row lg:grid-cols-2 p-5 xl:grid-cols-2 xl:p-20 xl:gap-20 gap-10 border-b border-gray-300/40'>
                    <div className='flex flex-col gap-10'>
                         <h1 className='xl:text-6xl text-4xl lg:hidden  text-white
                         font-semibold'>Custom websites,
backed by strategy</h1>
                        <span className='xl:text-6xl text-4xl lg:flex hidden text-white
                         font-semibold'>

                            <TextReveal text='Custom websites,
backed by strategy'/>

                        </span>
                        <div className='flex items-center gap-10'>
                            <Link href="/" className='bg-white rounded-full px-3 py-1 text-black'>Request a Proposal</Link>
                            <Link href="/" className='border-b pb-1 border-white'>Contact US</Link>

                        </div>
                    </div>
                    <div className='text-lg flex flex-col gap-10'>
                        <p>A strong online presence is essential to ensure the success of any business as it impacts how your audience perceives your brand. In order to maximize growth, a business needs to clearly differentiate itself from the vast sea of competition.  At Brand Vision, we specialize in designing websites that are not only visually stunning but also user-friendly, ensuring your brand makes an unforgettable impression.</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default section1
